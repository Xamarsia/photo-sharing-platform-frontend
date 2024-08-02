"use client";


import styles from '@/app/styles/text/text.module.css';

import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';

import { FormEvent, useState } from "react";


type Props = {
    local: any;
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

export default function ChangePasswordForm({ local, onSubmit }: Props) {
    const [isFormChanged, setIsFormChanged] = useState<boolean>(false);
    const [formIsValid, setFormIsValid] = useState(false);;

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [rNewPassword, setRNewPassword] = useState("");


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
                <span className={`${styles['formInputTitleRequired']}`}>{local.currentPassword}</span>
                <Input
                    type="password"
                    name="oldPassword"
                    value={oldPassword}
                    pattern=".{1,}"
                    onChange={(e) => setOldPassword(e.target.value)}
                    required
                />
            </div>
            <div className="my-1">
                <span className={`${styles['formInputTitleRequired']}`}>{local.newPassword}</span>
                <Input
                    type="password"
                    name="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
            </div>

            <div className="my-1">
                <span className={`${styles['formInputTitleRequired']}`}>{local.repeatNewPassword}</span>
                <Input
                    type="password"
                    name="rNewPassword"
                    value={rNewPassword}
                    onChange={(e) => setRNewPassword(e.target.value)}
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