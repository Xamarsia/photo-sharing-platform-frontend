"use client";


import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';
import FormFieldError from '@/components/common/FormFieldError';

import { ChangeEvent, FormEvent, useState } from "react";
import { getValidationErrors } from '@/lib/zod/validation';
import { updateEmailSchema } from '@/lib/zod/schemas/profile/changeEmail';


type Props = {
    local: any,
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void,
}

export default function ChangeEmailForm({ local, onSubmit }: Props) {
    const [isFormChanged, setIsFormChanged] = useState<boolean>(false);
    const [errors, setErrors] = useState<Map<string | number, string>>(new Map());
    const [email, setEmail] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (onSubmit) {
            onSubmit(event);
        }
    }

    async function onEmailChangeHendler(event: ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);

        const response = updateEmailSchema.safeParse({
            email: event.target.value,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);
        setErrors(errorsMap);
    }

    return (
        <form onSubmit={handleSubmit}
            onChange={(e) => { setIsFormChanged(true) }}
            className={`text-left flex flex-col gap-y-3 sm:gap-y-6`}>
            <div>
                <Input
                    type="text"
                    name="email"
                    value={email}
                    title={local.email}
                    onChange={(e) => onEmailChangeHendler(e)}
                    required
                />
                <FormFieldError text={errors.get("email")} />
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
