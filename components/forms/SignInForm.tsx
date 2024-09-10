"use client";


import styles from '@/app/styles/text/text.module.css';

import { FormEvent, useState } from "react";
import Link from 'next/link';

import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';
import TextIconSecondaryButton from '@/components/buttons/TextIconSecondaryButton';

import google from '@/public/google/google-icon-logo.svg';

import { signInWithEmailPassword, signInWithGoogle } from '@/lib/firebase/auth';
import { useRouter } from 'next/navigation';


type Props = {
    local: any;
}


export default function SignInForm({ local }: Props) {
    const [password, setPassword] = useState("password");
    const [email, setEmail] = useState("localpart@domain.com")
    const [formIsValid, setFormIsValid] = useState(true);
    const router = useRouter();

    async function handleSignInWithEmailAndPassword(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const body: LoginRequest = {
            email: email,
            password: password,
        }

        const isAuthorized: boolean = await signInWithEmailPassword(body);
        if (isAuthorized) {
            router.replace('/news');
        }
    }

    async function handleSignInWithGoogle(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        const isAuthorized: boolean = await signInWithGoogle();
        if (isAuthorized) {
            router.replace('/news');
        }
    }

    return (
        <form onSubmit={handleSignInWithEmailAndPassword} onChange={(e) =>
            setFormIsValid(e.currentTarget.checkValidity())}
            className={`flex flex-col justify-between h-[412px]`}>
            <div className={`flex flex-col gap-y-3 sm:gap-y-6`}>
                <h1 className={`${styles['h1']}`}>{local.signIn}</h1>

                <TextIconSecondaryButton
                    text={local.continueWithGoogle}
                    onClick={handleSignInWithGoogle}
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
