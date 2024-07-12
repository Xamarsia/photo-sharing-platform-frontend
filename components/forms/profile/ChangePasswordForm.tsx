"use client";


import Form from "@/components/common/Form";
import Span from "@/components/common/Span";
import Input from '@/components/common/Input';
import Button from '@/components/buttons/Button';

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
        <Form
            title={local.changePassword}
            onSubmit={handleSubmit}
            onChange={(e) => {
                setFormIsValid(e.currentTarget.checkValidity())
                setIsFormChanged(true)
            }
            }>

            <div>
                <Span text={local.currentPassword} required />
                <Input
                    type="password"
                    name="oldPassword"
                    size='base'
                    value={oldPassword}
                    placeholder=" "
                    pattern=".{1,}"
                    onChange={(e) => setOldPassword(e.target.value)}
                    required
                />
            </div>
            <div className="my-1">
                <Span text={local.newPassword} required />
                <Input
                    type="password"
                    name="newPassword"
                    size="base"
                    value={newPassword}
                    placeholder=" "
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
            </div>

            <div className="my-1">
                <Span text={local.repeatNewPassword} required />
                <Input
                    type="password"
                    name="rNewPassword"
                    size="base"
                    value={rNewPassword}
                    placeholder=" "
                    onChange={(e) => setRNewPassword(e.target.value)}
                    required
                />
            </div>

            <div>
                <Button
                    type="submit"
                    style="primary-button"
                    text={local.update}
                    fill="parent"
                    size="base"
                    disabled={!formIsValid || !isFormChanged}
                />
            </div>
        </Form>
    )
}