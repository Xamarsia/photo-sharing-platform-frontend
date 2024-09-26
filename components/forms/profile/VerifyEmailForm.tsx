"use client";

import styles from '@/app/styles/text/text.module.css';
import formStyles from '@/app/styles/components/form.module.css';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from "react";

import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';
// import { reauthenticate, updateUserEmail, verifyEmail } from '@/lib/firebase/auth';

type Props = {
    local: any,
    newEmail: string,
}


export default function VerifyEmailForm({ local, newEmail }: Props) {
    const [password, setPassword] = useState("password");
    const [formIsValid, setFormIsValid] = useState(true);
    const [confirmPressed, setConfirmPressed] = useState(false);

    const router = useRouter();

    async function handleEmailVerification(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // TODO realise email update
        // const isAuthorized = await reauthenticate(password);
        // await verifyEmail(newEmail);
        // await updateUserEmail(newEmail);

        setConfirmPressed(true);
    }


    return (
        <form onSubmit={handleEmailVerification}
            onChange={(e) => setFormIsValid(e.currentTarget.checkValidity())}
            className={`${formStyles['form-card-container']}`}>
            <div className={`${formStyles['form-container']}`}>
                <p className={`${styles['base-text']}`}>{confirmPressed ? local.resetEmailMessageSended : local.resetEmailMessage} </p>

                {!confirmPressed && <Input
                    type="password"
                    name="password"
                    title={local.password}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />}
            </div>

            {!confirmPressed && <TextButton
                type="submit"
                text={local.confirm}
                fill="content"
                disabled={!formIsValid}
            />}
        </form>
    )
}
