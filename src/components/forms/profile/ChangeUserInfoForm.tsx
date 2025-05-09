"use client";


import TextButton from '@/components/buttons/TextButton';
import FormFieldError from '@/components/common/FormFieldError';
import { GetCurrentUserOrRedirect } from '@/components/common/guards/UserProvider';
import Input from '@/components/common/Input';
import Textarea from "@/components/common/Textarea";

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useCallback, useState } from "react";

import { updateUserInfo } from '@/actions/user-actions';
import { fullNameValidationSchema, updateDescriptionSchema, updateUserInfoValidationSchema } from '@/lib/zod/schemas/profile/changeUserInfo';
import { getValidationErrors } from '@/lib/zod/validation';


export default function ChangeUserInfoForm() {
    const user: UserDTO = GetCurrentUserOrRedirect();
    const defaultFullName: string | undefined = (user.fullName == null ? undefined : user.fullName);
    const defaultDescription: string | undefined = (user.description == null ? undefined : user.description);

    const [fullName, setFullName] = useState<string | undefined>(defaultFullName);
    const [description, setDescription] = useState<string | undefined>(defaultDescription);
    const [errors, setErrors] = useState<Map<string | number, string>>(new Map());
    const [isFormChanged, setIsFormChanged] = useState<boolean>(false);
    const t = useTranslations('form');
    const router = useRouter();

    const onUserInfoUpdateFormSubmit = useCallback(async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        if (!isFormChanged) {
            return;
        }

        if (fullName == user.fullName && description == user.description) {
            return;
        }

        const response = await updateUserInfoValidationSchema.safeParseAsync({
            fullName: fullName,
            description: description,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);

        if (errorsMap.size != 0) {
            setErrors(errorsMap);
            return;
        };

        const body: UserInfoUpdateRequest = {
            description: description,
            fullName: fullName,
        }

        const newUser: UserDTO | undefined = await updateUserInfo(body);
        router.push(`/${newUser?.username}`);
    }, [fullName, description, isFormChanged, user.fullName, user.description, errors]);

    const onFullNameChangeHendler = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
        setFullName(e.target.value);

        const response = fullNameValidationSchema.safeParse({
            fullName: e.target.value,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);

        const error: string | undefined = errorsMap.get(e.target.name);
        if (error) {
            setErrors(errors.set(e.target.name, error));
        } else {
            errors.delete(e.target.name);
        }
    }, [fullName, errors]);

    const onDescriptionChangeHendler = useCallback((e: ChangeEvent<HTMLTextAreaElement>): void => {
        setDescription(e.target.value);

        const response = updateDescriptionSchema.safeParse({
            description: e.target.value,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);

        const error: string | undefined = errorsMap.get(e.target.name);
        if (error) {
            setErrors(errors.set(e.target.name, error));
        } else {
            errors.delete(e.target.name);
        }
    }, [description, errors]);

    const onFormChange = useCallback((): void => {
        setIsFormChanged(true);
    }, [isFormChanged]);

    return (
        <form onSubmit={onUserInfoUpdateFormSubmit} onChange={onFormChange}>
            <div>
                <Input
                    type="text"
                    name="fullName"
                    value={fullName}
                    title={t('fullName')}
                    onChange={onFullNameChangeHendler}
                    state={errors.has("fullName") ? 'invalid' : 'valid'}
                />
                <FormFieldError text={errors.get("fullName")} />
            </div>
            <div>
                <Textarea
                    rows={5}
                    value={description}
                    title={t('description')}
                    name="description"
                    onChange={onDescriptionChangeHendler}
                    state={errors.has("description") ? 'invalid' : 'valid'}
                />
                <FormFieldError text={errors.get("description")} />
            </div>
            <TextButton
                type="submit"
                text={t('update')}
                fill="content"
                disabled={!isFormChanged || errors.size != 0}
            />
        </form>
    )
}
