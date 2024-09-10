"use client";


import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';


import { FormEvent, useState } from "react";
import { updateUsername } from '@/actions/user-actions';
import { useRouter } from 'next/navigation';


type Props = {
    local: any,
    user: UserDTO,
}


export default function ChangeUsernameForm({ local, user }: Props) {
    const [isFormChanged, setIsFormChanged] = useState<boolean>(false);
    const [formIsValid, setFormIsValid] = useState(false);
    const [username, setUsername] = useState(user.username);
    const router = useRouter();

    async function onUpdate(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!isFormChanged) {
            return;
        }
        if (username == user.username) {
            return;
        }

        const body: UsernameUpdateRequest = {
            username: username,
        }
        const newUser: UserDTO | undefined = await updateUsername(body);
        router.push(`/${newUser?.username}`);
    }

    return (
        <form
            onSubmit={onUpdate}
            onChange={(e) => {
                setFormIsValid(e.currentTarget.checkValidity())
                setIsFormChanged(true)
            }}
            className={`text-left flex flex-col gap-y-3 sm:gap-y-6`}>

            <div>
                <Input
                    type="text"
                    name="username"
                    value={username}
                    title={local.username}
                    pattern='^[a-zA-Z0-9]{1,30}$'
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>

            <TextButton
                type="submit"
                text={local.update}
                fill="content"
                disabled={!formIsValid || !isFormChanged}
            />
        </form>
    )
}
