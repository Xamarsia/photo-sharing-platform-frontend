"use client";


import styles from '@/app/styles/text/text.module.css';

import Link from 'next/link';

import { FormEvent, useState } from "react";

import { signUpWithEmailPassword, signUpWithGoogle } from '@/lib/firebase/auth';

import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';
import TextIconSecondaryButton from '@/components/buttons/TextIconSecondaryButton';

import google from '@/public/google/google-icon-logo.svg';


type Props = {
    local: any;
    onSubmit?: () => void;
}


export default function AuthenticationForm({ local, onSubmit }: Props) {
    const [password, setPassword] = useState("password");
    // const [rpassword, setRPassword] = useState("password");
    const [email, setEmail] = useState("localpart@domain.com");
    const [formIsValid, setFormIsValid] = useState(true);

    async function handleSignUpWithEmailAndPassword(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const body: LoginRequest = {
            email: email,
            password: password,
        }

        const isAuthorized: boolean = await signUpWithEmailPassword(body);
        if (isAuthorized && onSubmit) {
            onSubmit();
        }
    }

    async function handleSignUnWithGoogle(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        const isAuthorized: boolean = await signUpWithGoogle();
        if (isAuthorized && onSubmit) {
            onSubmit();
        }
    }

    return (
        <form onSubmit={handleSignUpWithEmailAndPassword}
            onChange={(e) => setFormIsValid(e.currentTarget.checkValidity())}
            className={`flex flex-col justify-between h-[412px]`}>
            <div className={`flex flex-col gap-y-3 sm:gap-y-6`}>
                <h1 className={`${styles['h1']}`}>{local.signUp}</h1>

                <TextIconSecondaryButton
                    text={local.continueWithGoogle}
                    onClick={handleSignUnWithGoogle}
                    icon={google}
                    fill="parent"
                />

                <hr className="h-px bg-gray-100 border-0" />

                <Input
                    type="text"
                    name="email"
                    value={email}
                    title={local.email}
                    pattern=".{1,}"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <Input
                    type="password"
                    name="password"
                    value={password}
                    title={local.password}
                    pattern=".{1,}"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {/* <Input
                type="password"
                name="rpassword"
                value={rpassword}
                title={local.repeatPassword}
                onChange={(e) => setRPassword(e.target.value)}
                required
            /> */}
            </div>

            <div>
                <TextButton
                    type="submit"
                    text={local.signUp}
                    fill="content"
                    disabled={!formIsValid}
                />
                <Link href={"/auth/signin"} className={`${styles['primary-link']}`} prefetch={false}>{local.haveAccount}</Link>
            </div>
        </form>
    )
}
