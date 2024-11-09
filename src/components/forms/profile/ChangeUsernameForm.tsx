"use client";


import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';
import FormFieldError from '@/components/common/FormFieldError';

import { useTranslations } from 'next-intl';
import { ChangeEvent, FormEvent, useState } from "react";

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

    async function onUpdate(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

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
    }

    async function onUsernameChangeHendler(event: ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);

        const response = updateUsernameSchema.safeParse({
            username: event.target.value,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);
        setErrors(errorsMap);
    }

    return (
        <form onSubmit={onUpdate} onChange={() => { setIsFormChanged(true); }}>

            <div>
                <Input
                    type="text"
                    name="username"
                    value={username}
                    title={t('username')}
                    onChange={(e) => { onUsernameChangeHendler(e) }}
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
