"use client";


import styles from '@/app/styles/text/text.module.css';

import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';


import { FormEvent, useState } from "react";
import { getUser } from "@/lib/profile-controller";


type Props = {
    local: any;
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

export default function ChangeEmailForm({ local, onSubmit }: Props) {
    const user: UserDTO = getUser();
    const [isFormChanged, setIsFormChanged] = useState<boolean>(false);
    const [formIsValid, setFormIsValid] = useState(false);
    const [email, setEmail] = useState(user.email);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (onSubmit) {
            onSubmit(event);
        }
    }

    return (
        <form onSubmit={handleSubmit}
            onChange={(e) => {
                setFormIsValid(e.currentTarget.checkValidity())
                setIsFormChanged(true)
            }}
            className={`text-left flex flex-col gap-y-3 sm:gap-y-6`}>
            <div>
                <span className={`${styles['formInputTitleRequired']}`}>{local.email}</span>
                <Input
                    type="text"
                    name="email"
                    value={email}
                    pattern=".{1,}"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <TextButton
                    type="submit"
                    style="primary"
                    text={local.update}
                    fill="content"
                    disabled={!formIsValid || !isFormChanged}
                />
            </div>
        </form>
    )
}