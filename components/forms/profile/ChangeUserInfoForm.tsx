"use client";


import styles from '@/app/styles/text/text.module.css';

import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';
import Textarea from "@/components/common/Textarea";

import { FormEvent, useState } from "react";
import { getUser } from "@/lib/profile-controller";


type Props = {
    local: any,
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void,
}


export default function ChangeUserInfoForm({ local, onSubmit }: Props) {
    const user: UserDTO = getUser();
    const [isFormChanged, setIsFormChanged] = useState<boolean>(false)
    const [fullName, setfullName] = useState(user.fullName);
    const [formIsValid, setFormIsValid] = useState(false);
    const [description, setDescription] = useState(user?.description);

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
                <span className={`${styles['formInputTitleRequired']}`}>{local.fullName}</span>
                <Input
                    type="text"
                    name="fullName"
                    value={fullName}
                    pattern="^[a-zA-Z\s]{2,30}$"
                    onChange={(e) => setfullName(e.target.value)}
                    required
                />
            </div>
            <div>
                <span className={`${styles['formInputTitle']}`}>{local.description}</span>
                <Textarea
                    rows={5}
                    value={description}
                    id="description"
                    placeholder={local.writeDescriptionHere}
                    onChange={(e) => setDescription(e.target.value)}
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