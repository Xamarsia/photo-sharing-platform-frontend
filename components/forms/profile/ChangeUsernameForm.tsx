"use client";


import Form from "@/components/common/Form";
import Span from "@/components/common/Span";
import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';


import { FormEvent, useState } from "react";
import { getUser } from "@/lib/profile-controller";


type Props = {
    local: any,
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void | undefined,
}


export default function ChangeUsernameForm({ local, onSubmit }: Props) {
    const user: UserDTO = getUser();
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
        <Form
            align="text-left"
            title={local.changeUsername}
            onSubmit={handleSubmit}
            onChange={(e) => {
                setFormIsValid(e.currentTarget.checkValidity());
                setIsFormChanged(true);
            }}>
            <div>
                <Span text={local.username} required />
                <Input
                    type="text"
                    size="small"
                    name="username"
                    value={username}
                    pattern='^[a-zA-Z0-9]{1,30}$'
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <TextButton
                    type="submit"
                    style="primary"
                    text={local.update}
                    size="small"
                    fill="content"
                    disabled={!formIsValid || !isFormChanged}
                />
            </div>
        </Form>
    )
}