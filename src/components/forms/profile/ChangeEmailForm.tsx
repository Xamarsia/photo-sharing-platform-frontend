"use client";

import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';
import FormFieldError from '@/components/common/FormFieldError';

import { useTranslations } from 'next-intl';
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
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

    const onChangeEmailFormSubmit = useCallback(async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

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
    }, [email, isFormChanged, errors]);

    const onEmailChangeHendler = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        setEmail(e.target.value);

        const response = updateEmailSchema.safeParse({
            email: e.target.value,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);
        setErrors(errorsMap);
    }, [email, errors]);

    const onFormChange = useCallback(() => {
        setIsFormChanged(true);
    }, [isFormChanged]);

    return (
        <form onSubmit={onChangeEmailFormSubmit} onChange={onFormChange}>
            <div>
                <Input
                    type="text"
                    name="email"
                    value={email}
                    title={t('email')}
                    onChange={onEmailChangeHendler}
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
