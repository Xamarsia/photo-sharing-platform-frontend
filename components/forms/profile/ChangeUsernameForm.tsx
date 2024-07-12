"use client";


import Form from "@/components/common/Form";
import Span from "@/components/common/Span";
import Input from '@/components/common/Input';
import Button from '@/components/buttons/Button';


import { FormEvent, SetStateAction, useState } from "react";


type Props = {
    local: any;
    user: UserDTO,
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}


export default function ChangeUsernameForm({ local, user, onSubmit }: Props) {
    const [isFormChanged, setIsFormChanged] = useState<boolean>(false);
    const [formIsValid, setFormIsValid] = useState(false);
    const [username, setUsername] = useState(user.username);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (onSubmit) {
            onSubmit(event);
        }
    }

    return (
        <Form title={local.changeUsername}
            onSubmit={handleSubmit}
            onChange={(e) => {
                setFormIsValid(e.currentTarget.checkValidity())
                setIsFormChanged(true)
            }}>
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
            <Button
                type="submit"
                style="primary-button"
                text={local.update}
                fill="parent"
                size="base"
                disabled={!formIsValid || !isFormChanged}
            />
        </Form>
    )
}