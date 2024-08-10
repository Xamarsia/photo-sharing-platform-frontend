"use client";


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

            <Input
                type="password"
                name="oldPassword"
                value={oldPassword}
                title={local.currentPassword}
                pattern=".{1,}"
                onChange={(e) => setOldPassword(e.target.value)}
                required
            />

            <Input
                type="password"
                name="newPassword"
                value={newPassword}
                title={local.newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
            />

            <Input
                type="password"
                name="rNewPassword"
                value={rNewPassword}
                title={local.repeatNewPassword}
                onChange={(e) => setRNewPassword(e.target.value)}
                required
            />

            <TextButton
                type="submit"
                text={local.update}
                fill="content"
                disabled={!formIsValid || !isFormChanged}
            />
        </form>
    )
}