"use client";


import styles from '@/app/styles/text/text.module.css';

import { FormEvent, useState } from "react";
import Link from 'next/link';

import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';
import TextIconSecondaryButton from '@/components/buttons/TextIconSecondaryButton';

import google from '@/public/google/google-icon-logo.svg';

import { signInWithGoogle } from '@/lib/firebase/auth';


type Props = {
    local: any;
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}


export default function SignInForm({ local, onSubmit }: Props) {
    const [password, setPassword] = useState("password");
    const [email, setEmail] = useState("localpart@domain.com")
    const [formIsValid, setFormIsValid] = useState(true);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (onSubmit) {
            onSubmit(event);
        }
    }

    return (
        <form onSubmit={handleSubmit} onChange={(e) =>
            setFormIsValid(e.currentTarget.checkValidity())}
            className={`flex flex-col justify-between h-[412px]`}>
            <div className={`flex flex-col gap-y-3 sm:gap-y-6`}>
                <h1 className={`${styles['h1']}`}>{local.signIn}</h1>

                <TextIconSecondaryButton
                    text={local.continueWithGoogle}
                    onClick={signInWithGoogle}
                    icon={google}
                    fill="parent"
                />

                <hr className="h-px bg-gray-100 border-0" />

                <Input
                    type="text"
                    name="email"
                    title={local.email}
                    pattern=".{1,}"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    name="password"
                    title={local.password}
                    pattern=".{1,}"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <div>
                <TextButton
                    type="submit"
                    text={local.submit}
                    fill="content"
                    disabled={!formIsValid}
                />
                <Link href={"/auth/signup"} className={`${styles['primary-link']}`} prefetch={false}>{local.dontHaveAccount}</Link>
            </div>
        </form>
    )
}
