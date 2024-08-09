"use client";


import styles from '@/app/styles/text/text.module.css';

import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';

import { FormEvent, useState } from "react";
import Link from 'next/link';


type Props = {
    local: any;
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}


export default function SignInForm({ local, onSubmit }: Props) {
    const [password, setPassword] = useState("password");
    const [email, setEmail] = useState("localpart@domain.com")
    const [formIsValid, setFormIsValid] = useState(true);

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [formIsValid, setFormIsValid] = useState(false);


    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (onSubmit) {
            onSubmit(event);
        }
    }

    return (
        <form onSubmit={handleSubmit} onChange={(e) =>
            setFormIsValid(e.currentTarget.checkValidity())}
            className={`flex flex-col gap-y-3 sm:gap-y-6`}>
            <h1 className={`${styles['h1']} text-center`}>{local.signInFormTitle}</h1>

            <div>
                <span className={`${styles['formInputTitleRequired']}`}>{local.email}</span>
                <Input
                    type="text"
                    name="email"
                    pattern=".{1,}"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <span className={`${styles['formInputTitleRequired']}`}>{local.password}</span>
                <Input
                    type="password"
                    name="password"
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
                    fill="parent"
                    disabled={!formIsValid}
                />
                <Link href={"/auth/signup"} className={`${styles['primary-link']}`} prefetch={false}>{local.dontHaveAccount}</Link>
            </div>
        </form>
    )
}

