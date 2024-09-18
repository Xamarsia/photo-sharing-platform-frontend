"use client";


import Input from '@/components/common/Input';
import Textarea from "@/components/common/Textarea";
import TextButton from '@/components/buttons/TextButton';
import FormFieldError from '@/components/common/FormFieldError';

import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from "react";


import { updateUserInfo } from '@/actions/user-actions';
import { getValidationErrors } from '@/lib/zod/validation';
import { fullNameValidationSchema, updateDescriptionSchema, updateUserInfoValidationSchema } from '@/lib/zod/schemas/changeUserInfo';


type Props = {
    local: any,
    user: UserDTO,
}


export default function ChangeUserInfoForm({ local, user }: Props) {
    const defaultFullName: string | undefined = (user.fullName == null ? undefined : user.fullName);
    const defaultDescription: string | undefined = (user.description == null ? undefined : user.description);

    const [fullName, setFullName] = useState<string | undefined>(defaultFullName);
    const [description, setDescription] = useState<string | undefined>(defaultDescription);
    const [errors, setErrors] = useState<Map<string | number, string>>(new Map());
    const [isFormChanged, setIsFormChanged] = useState<boolean>(false);

    const router = useRouter();

    async function handleUserInfoUpdate(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

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
        router.push(`/${user.username}`);
    }

    async function onFullNameChangeHendler(event: ChangeEvent<HTMLInputElement>) {
        setFullName(event.target.value);

        const response = fullNameValidationSchema.safeParse({
            fullName: event.target.value,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);

        const error = errorsMap.get(event.target.name);
        if (error) {
            setErrors(errors.set(event.target.name, error));
        } else {
            errors.delete(event.target.name);
        }
    }

    async function onDescriptionChangeHendler(event: ChangeEvent<HTMLTextAreaElement>) {
        setDescription(event.target.value);

        const response = updateDescriptionSchema.safeParse({
            description: event.target.value,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);

        const error = errorsMap.get(event.target.name);
        if (error) {
            setErrors(errors.set(event.target.name, error));
        } else {
            errors.delete(event.target.name);
        }
    }

    return (
        <form onSubmit={handleUserInfoUpdate}
            onChange={(e) => { setIsFormChanged(true) }}
            className={`text-left flex flex-col gap-y-3 sm:gap-y-6`}>
            <div>
                <Input
                    type="text"
                    name="fullName"
                    value={fullName}
                    title={local.fullName}
                    onChange={(e) => onFullNameChangeHendler(e)}
                    state={errors.has("fullName") ? 'invalid' : 'valid'}
                />
                <FormFieldError text={errors.get("fullName")} />
            </div>
            <div>
                <Textarea
                    rows={5}
                    value={description}
                    title={local.description}
                    name="description"
                    onChange={(e) => onDescriptionChangeHendler(e)}
                    state={errors.has("description") ? 'invalid' : 'valid'}
                />
                <FormFieldError text={errors.get("description")} />
            </div>
            <TextButton
                type="submit"
                text={local.update}
                fill="content"
                disabled={!isFormChanged || errors.size != 0}
            />
        </form>
    )
}
