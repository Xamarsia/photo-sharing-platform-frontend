"use client";


import styles from '@/app/styles/text/text.module.css';


import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';

import { FormEvent, useState } from "react";


type Props = {
    local: any;
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}


export default function SignUpForm({ local, onSubmit }: Props) {
    const [username, setUsername] = useState("username");
    const [fullName, setfullName] = useState("");
    const [formIsValid, setFormIsValid] = useState(true);


    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (onSubmit) {
            onSubmit(event);
        }
    }


    return (
        <form onSubmit={handleSubmit}
            onChange={(e) => setFormIsValid(e.currentTarget.checkValidity())}
            className={`flex flex-col justify-between h-[412px]`}>
            <div className={`flex flex-col gap-y-3 sm:gap-y-6`}>
                <h1 className={`${styles['h1']}`}>{local.signUp}</h1>

                <Input
                    type="text"
                    name="username"
                    value={username}
                    title={local.username}
                    pattern='^[a-zA-Z0-9]{1,30}$'
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <Input
                    type="text"
                    name="fullName"
                    value={fullName}
                    title={local.fullName}
                    pattern="^[a-zA-Z\s]{2,30}$"
                    onChange={(e) => setfullName(e.target.value)} 
                />
            </div>
            <TextButton
                type="submit"
                text={local.finish}
                fill="content"
                disabled={!formIsValid}
            />
        </form>
    )
}
