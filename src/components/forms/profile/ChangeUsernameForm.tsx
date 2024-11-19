"use client";


import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';
import FormFieldError from '@/components/common/FormFieldError';

import { useTranslations } from 'next-intl';
import { ChangeEvent, FormEvent, useCallback, useState } from "react";

import { getValidationErrors } from '@/lib/zod/validation';
import { updateUniqueUsernameSchema, updateUsernameSchema } from '@/lib/zod/schemas/profile/changeUsername';


type Props = {
    oldUsername: string,
    onSubmit: (username: string) => void,
}


export default function ChangeUsernameForm({ oldUsername, onSubmit }: Props) {
    const [isFormChanged, setIsFormChanged] = useState<boolean>(false);
    const [username, setUsername] = useState<string>(oldUsername);
    const [errors, setErrors] = useState<Map<string | number, string>>(new Map());
    const t = useTranslations('form');

    const onUpdate = useCallback(async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        if (!isFormChanged) {
            return;
        }

        if (username == oldUsername) {
            setIsFormChanged(false);
            return;
        }

        const response = await updateUniqueUsernameSchema.safeParseAsync({
            username: username,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);
        if (errorsMap.size != 0) {
            setErrors(errorsMap);
            return;
        }
        onSubmit(username);
    }, [isFormChanged, username, errors, onSubmit]);

    const onUsernameChangeHendler = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
        setUsername(e.target.value);

        const response = updateUsernameSchema.safeParse({
            username: e.target.value,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);
        setErrors(errorsMap);
    }, [username, errors]);

    const onFormChange = useCallback(() => {
        setIsFormChanged(true);
    }, [isFormChanged]);

    return (
        <form onSubmit={onUpdate} onChange={onFormChange}>
            <div>
                <Input
                    type="text"
                    name="username"
                    value={username}
                    title={t('username')}
                    onChange={onUsernameChangeHendler}
                    required
                    state={errors.has("username") ? 'invalid' : 'valid'}
                />
                <FormFieldError text={errors.get("username")} />
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
