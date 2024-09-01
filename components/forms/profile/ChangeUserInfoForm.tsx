"use client";


import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';
import Textarea from "@/components/common/Textarea";

import { FormEvent, useState } from "react";


type Props = {
    local: any,
    user: UserDTO,
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void,
}


export default function ChangeUserInfoForm({ local, user, onSubmit }: Props) {
    const defaultFullName: string | undefined = (user.fullName == null ? undefined : user.fullName);
    const defaultDescription: string | undefined = (user.description == null ? undefined : user.description);

    const [isFormChanged, setIsFormChanged] = useState<boolean>(false);
    const [fullName, setfullName] = useState(defaultFullName);
    const [formIsValid, setFormIsValid] = useState(false);
    const [description, setDescription] = useState(defaultDescription);

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
                type="text"
                name="fullName"
                value={fullName}
                title={local.fullName}
                pattern="^[a-zA-Z\s]{2,30}$"
                onChange={(e) => setfullName(e.target.value)}
            />

            <Textarea
                rows={5}
                value={description}
                title={local.description}
                id="description"
                onChange={(e) => setDescription(e.target.value)}
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
