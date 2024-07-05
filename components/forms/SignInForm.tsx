"use client";


import Form from "@/components/Form";
import Span from "@/components/Span";
import Link from "@/components/Link";
import Input from '@/components/Input';
import Button from '@/components/Button';

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
        <Form
            title={local.signInFormTitle}
            onSubmit={handleSubmit}
            onChange={(e) => setFormIsValid(e.currentTarget.checkValidity())}>

            <div>
                <Span text={local.email} required />
                <Input
                    type="text"
                    name="email"
                    size='base'
                    pattern=".{1,}"
                    placeholder=" "
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
                    size='base'
                    pattern=".{1,}"
                    placeholder=" "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <Button
                    type="submit"
                    style="primary-button"
                    text={local.submit}
                    fill="parent"
                    size="base"
                    disabled={!formIsValid}
                />
                <Link href="/auth/signup" prefetch={false} style="text-link">
                    {local.dontHaveAccount}
                </Link>
            </div>
        </Form>
    )
}

