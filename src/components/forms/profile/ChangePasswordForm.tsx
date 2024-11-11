"use client";


import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';
import FormFieldError from '@/components/common/FormFieldError';

import { useTranslations } from 'next-intl';
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { getValidationErrors } from '@/lib/zod/validation';
import { currentPasswordSchema, setPasswordSchema, updatePasswordSchema } from '@/lib/zod/schemas/profile/changePassword';
import { reauthenticate, changePassword } from '@/lib/firebase/auth';
import { useAlert } from '@/utils/useAlert';
import { FirebaseError } from 'firebase/app';
import { UserCredential } from 'firebase/auth';


export default function ChangePasswordForm() {
    const [errors, setErrors] = useState<Map<string | number, string>>(new Map());
    const [currentPassword, setCurrentPassword] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [formIsValid, setFormIsValid] = useState<boolean>(false);
    const t = useTranslations('form');

    const { showAlert } = useAlert();


    const onChangePasswordFormSubmit = useCallback(async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

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

        const credential: UserCredential | undefined | FirebaseError = await reauthenticate(currentPassword);
        if (credential instanceof FirebaseError) {
            let errorCode: string = credential.code;
            let errorMessage: string = credential.message;

            if (errorCode == 'auth/invalid-credential') {
                showAlert('Error', t('invalidCredential'));
            } else if (errorCode == 'auth/too-many-requests') {
                showAlert('Error', t('tooManyRequests'));
            } else {
                console.error(errorMessage);
            }
            setCurrentPassword("");
            setFormIsValid(false);
            return;
        }
        await changePassword(password);
    }, [currentPassword, password, confirmPassword, errors, formIsValid]);


    const onCurrentPasswordChangeHendler = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
        setCurrentPassword(event.target.value);

        const response = currentPasswordSchema.safeParse({
            currentPassword: event.target.value,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);
        const error: string | undefined = errorsMap.get(event.target.name);

        if (error) {
            setErrors(errors.set(event.target.name, error));
        } else {
            errors.delete(event.target.name);
        }
    }, [currentPassword, errors]);


    const onPasswordChangeHendler = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
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
    }, [password, confirmPassword, currentPassword, errors]);



    const onConfirmPasswordChangeHendler = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
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
    }, [password, confirmPassword, errors]);

    const onFormChange = useCallback((event: FormEvent<HTMLFormElement>) => {
        setFormIsValid(event.currentTarget.checkValidity());
    }, [formIsValid]);

    return (
        <form onSubmit={onChangePasswordFormSubmit} onChange={onFormChange}>
            <div>
                <Input
                    type="password"
                    name="currentPassword"
                    value={currentPassword}
                    title={t('currentPassword')}
                    onChange={onCurrentPasswordChangeHendler}
                    required
                />
                <FormFieldError text={errors.get("currentPassword")} />
            </div>
            <div>
                <Input
                    type="password"
                    name="password"
                    value={password}
                    title={t('newPassword')}
                    onChange={onPasswordChangeHendler}
                    required
                />
                <FormFieldError text={errors.get("password")} />
            </div>
            <div>
                <Input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    title={t('repeatNewPassword')}
                    onChange={onConfirmPasswordChangeHendler}
                    required
                />
                <FormFieldError text={errors.get("confirmPassword")} />
            </div>
            <TextButton
                type="submit"
                text={t('update')}
                fill="content"
                disabled={!formIsValid || errors.size != 0}
            />
        </form>
    )
}
