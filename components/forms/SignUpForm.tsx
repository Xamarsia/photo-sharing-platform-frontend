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


export default function SignUpForm({ local, onSubmit }: Props) {
    const [username, setUsername] = useState("username");
    const [password, setPassword] = useState("password");
    const [rpassword, setRPassword] = useState("password");
    const [fullName, setfullName] = useState("Full Name");
    const [email, setEmail] = useState("localpart@domain.com");
    const [formIsValid, setFormIsValid] = useState(true);

    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [rpassword, setRPassword] = useState("");
    // const [fullName, setfullName] = useState("");
    // const [email, setEmail] = useState("");
    // const [formIsValid, setFormIsValid] = useState(false);


    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (onSubmit) {
            onSubmit(event);
        }
    }

    return (
        <Form
            title={local.signUpFormTitle}
            onSubmit={handleSubmit}
            onChange={(e) => setFormIsValid(e.currentTarget.checkValidity())}>
            <div>
                <Span text={local.username} required />
                <Input
                    type="text"
                    name="username"
                    size="base"
                    value={username}
                    placeholder=" "
                    pattern='^[a-zA-Z0-9]{1,30}$'
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <Span text={local.email} required />
                <Input
                    type="text"
                    name="email"
                    size='base'
                    value={email}
                    placeholder=" "
                    pattern=".{1,}"
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
                    value={password}
                    placeholder=" "
                    pattern=".{1,}"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <div className="my-1">
                <Span text={local.repeatPassword} required />
                <Input
                    type="password"
                    name="rpassword"
                    size="base"
                    value={rpassword}
                    placeholder=" "
                    onChange={(e) => setRPassword(e.target.value)}
                    required
                />
            </div>

            <div>
                <Span text={local.fullName} required />
                <Input
                    type="text"
                    name="fullName"
                    size="base"
                    value={fullName}
                    placeholder=" "
                    pattern="^[a-zA-Z\s]{2,30}$"
                    onChange={(e) => setfullName(e.target.value)}
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
                <Link href="/auth/signin" text={local.haveAccount} />
            </div>
        </Form>
    )
}

