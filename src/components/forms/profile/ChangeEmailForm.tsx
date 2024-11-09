"use client";

import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';
import FormFieldError from '@/components/common/FormFieldError';

import { useTranslations } from 'next-intl';
import { ChangeEvent, FormEvent, useState } from "react";
import { getValidationErrors } from '@/lib/zod/validation';
import { updateEmailSchema } from '@/lib/zod/schemas/profile/changeEmail';


type Props = {
    oldEmail: string,
    onSubmit: (newEmail: string) => void,
}

export default function ChangeEmailForm({ oldEmail, onSubmit }: Props) {
    const [isFormChanged, setIsFormChanged] = useState<boolean>(false);
    const [errors, setErrors] = useState<Map<string | number, string>>(new Map());
    const [email, setEmail] = useState<string>(oldEmail);
    const t = useTranslations('form');

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!isFormChanged || !email) {
            return;
        }

        if (email == oldEmail) {
            setIsFormChanged(false);
            return;
        }

        const response = await updateEmailSchema.safeParseAsync({
            email: email,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);
        if (errorsMap.size != 0) {
            setErrors(errorsMap);
            return;
        }

        onSubmit(email);
    }

    async function onEmailChangeHendler(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setEmail(event.target.value);

        const response = updateEmailSchema.safeParse({
            email: event.target.value,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);
        setErrors(errorsMap);
    }

    return (
        <form
            onSubmit={handleSubmit}
            onChange={(e) => { setIsFormChanged(true) }}
            className='text-left flex flex-col gap-y-3'>
            <div>
                <Input
                    type="text"
                    name="email"
                    value={email}
                    title={t('email')}
                    onChange={(e) => onEmailChangeHendler(e)}
                    required
                />
                <FormFieldError text={errors.get("email")} />
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
