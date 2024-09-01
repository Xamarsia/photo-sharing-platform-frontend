"use client";


import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';
import Textarea from "@/components/common/Textarea";

import { FormEvent, useState } from "react";
import { updateUserInfo } from '@/actions/user-actions';
import { useRouter } from 'next/navigation';


type Props = {
    local: any,
    user: UserDTO,
}


export default function ChangeUserInfoForm({ local, user }: Props) {
    const defaultFullName: string | undefined = (user.fullName == null ? undefined : user.fullName);
    const defaultDescription: string | undefined = (user.description == null ? undefined : user.description);

    const [fullName, setfullName] = useState<string | undefined>(defaultFullName);
    const [description, setDescription] = useState<string | undefined>(defaultDescription);
    const [isFormChanged, setIsFormChanged] = useState<boolean>(false);
    const [formIsValid, setFormIsValid] = useState(false);

    const router = useRouter();

    async function handleUserInfoUpdate(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!isFormChanged) {
            return;
        }

        if (fullName == user.fullName && description == user.description) {
            return;
        }

        const body: UserInfoUpdateRequest = {
            description: description,
            fullName: fullName,
        }

        const newUser: UserDTO | undefined = await updateUserInfo(body);
        router.push(`/${user.username}`);
    }


    return (

        <form onSubmit={handleUserInfoUpdate}
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
                // pattern="^[a-zA-Z\s]{2,30}$"
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
