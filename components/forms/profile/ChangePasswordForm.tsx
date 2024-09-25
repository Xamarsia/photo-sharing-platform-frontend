"use client";


import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';
import FormFieldError from '@/components/common/FormFieldError';

import formStyles from '@/app/styles/components/form.module.css';

import { ChangeEvent, FormEvent, useState } from "react";
import { getValidationErrors } from '@/lib/zod/validation';
import { currentPasswordSchema, setPasswordSchema, updatePasswordSchema } from '@/lib/zod/schemas/profile/changePassword';
import { reauthenticate, changePassword } from '@/lib/firebase/auth';
import { useAlert } from '@/utils/useAlert';


type Props = {
    local: any;
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}


export default function ChangePasswordForm({ local, onSubmit }: Props) {
    const [errors, setErrors] = useState<Map<string | number, string>>(new Map());
    const [currentPassword, setCurrentPassword] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { showAlert } = useAlert();


    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (onSubmit) {
            onSubmit(event);
        }

        const response = updatePasswordSchema.safeParse({
            currentPassword: currentPassword,
            password: password,
            confirmPassword: confirmPassword,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);

        if (errorsMap.size != 0) {
            setErrors(errorsMap);
            return;
        };

        const auth = await reauthenticate(currentPassword);

        if (!auth) {
            showAlert('Error', 'Password confirmation invalid. Please, try again');
            return;
        }

        await changePassword(currentPassword);
    }

    async function onCurrentPasswordChangeHendler(event: ChangeEvent<HTMLInputElement>) {
        setCurrentPassword(event.target.value);

        const response = currentPasswordSchema.safeParse({
            currentPassword: event.target.value,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);

        const error = errorsMap.get(event.target.name);
        if (error) {
            setErrors(errors.set(event.target.name, error));
        } else {
            errors.delete(event.target.name);
        }
    }


    async function onPasswordChangeHendler(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);

        const response = setPasswordSchema.safeParse({
            password: event.target.value,
            confirmPassword: confirmPassword,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);

        const currentPasswordError = errors.get('currentPassword');
        if (currentPasswordError) {
            errorsMap.set('currentPassword', currentPasswordError);
        }
        setErrors(errorsMap);
    }

    async function onConfirmPasswordChangeHendler(event: ChangeEvent<HTMLInputElement>) {
        setConfirmPassword(event.target.value);

        const response = setPasswordSchema.safeParse({
            password: password,
            confirmPassword: event.target.value,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);
        const currentPasswordError = errors.get('currentPassword');
        if (currentPasswordError) {
            errorsMap.set('currentPassword', currentPasswordError);
        }

        setErrors(errorsMap);
    }

    return (
        <form onSubmit={handleSubmit}
            className={`text-left ${formStyles['form-container']}`}>
            <div>
                <Input
                    type="password"
                    name="currentPassword"
                    value={currentPassword}
                    title={local.currentPassword}
                    onChange={(e) => onCurrentPasswordChangeHendler(e)}
                    required
                />
                <FormFieldError text={errors.get("currentPassword")} />
            </div>
            <div>
                <Input
                    type="password"
                    name="password"
                    value={password}
                    title={local.newPassword}
                    onChange={(e) => onPasswordChangeHendler(e)}
                    required
                />
                <FormFieldError text={errors.get("password")} />
            </div>
            <div>
                <Input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    title={local.repeatNewPassword}
                    onChange={(e) => onConfirmPasswordChangeHendler(e)}
                    required
                />
                <FormFieldError text={errors.get("confirmPassword")} />
            </div>
            <TextButton
                type="submit"
                text={local.update}
                fill="content"
                disabled={errors.size != 0}
            />
        </form>
    )
}
