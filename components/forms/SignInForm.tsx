"use client";


import Span from "@/components/common/Span";
import Link from "@/components/common/Link";
import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';

import { FormEvent, useState } from "react";


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
            <h1 className={`text-slate-800 font-normal tracking-normal text-xl sm:text-2xl leading-9 text-center`}>{local.signInFormTitle}</h1>

            <div>
                <Span text={local.email} required />
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
                <Span text={local.password} required />
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
                    style="primary"
                    text={local.submit}
                    fill="parent"
                    disabled={!formIsValid}
                />
                <Link href='/auth/signup' text={local.dontHaveAccount} prefetch={false} style='primary' size='small' />
            </div>
        </form>
    )
}

