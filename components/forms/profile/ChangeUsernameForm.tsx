"use client";


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
        <form onSubmit={handleSubmit}
            onChange={(e) => {
                setFormIsValid(e.currentTarget.checkValidity())
                setIsFormChanged(true)
            }}
            className={`text-left flex flex-col gap-y-3 sm:gap-y-6`}>

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
        </form>
    )
}