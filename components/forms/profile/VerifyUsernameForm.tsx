"use client";

import styles from '@/app/styles/text/text.module.css';
import formStyles from '@/app/styles/components/form.module.css';

import { FormEvent, useState } from "react";

import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';
import { reauthenticate } from '@/lib/firebase/auth';
import { FirebaseError } from 'firebase/app';
import { useAlert } from '@/utils/useAlert';
import { updateUsername } from '@/actions/user-actions';

type Props = {
    local: any,
    newUsername: string,
    onSubmit: () => void,
}


export default function VerifyUsernameForm({ local, newUsername, onSubmit }: Props) {
    const [password, setPassword] = useState("password");
    const [formIsValid, setFormIsValid] = useState(true);
    const { showAlert } = useAlert();

    async function handleEmailVerification(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const credential = await reauthenticate(password);
        if (credential instanceof FirebaseError) {
            var errorCode = credential.code;
            var errorMessage = credential.message;
            if (errorCode == 'auth/invalid-credential') {
                showAlert('Error', local.invalidCredential)
            } else if (errorCode == 'auth/too-many-requests') {
                showAlert('Error', local.tooManyRequests)
            } else {
                console.error(errorMessage);
            }
            setPassword("")
            return;
        }

        const body: UsernameUpdateRequest = {
            username: newUsername,
        }

        await updateUsername(body);
        if (onSubmit) {
            onSubmit();
        }
    }


    return (
        <form onSubmit={handleEmailVerification}
            onChange={(e) => setFormIsValid(e.currentTarget.checkValidity())}
            className={`${formStyles['form-card-container']}`}>
            <div className={`${formStyles['form-container']}`}>
                <p className={`${styles['base-text']}`}>{local.resetUsernameMessage}</p>

                <Input
                    type="password"
                    name="password"
                    title={local.password}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <TextButton
                type="submit"
                text={local.confirm}
                fill="content"
                disabled={!formIsValid}
            />
        </form>
    )
}
