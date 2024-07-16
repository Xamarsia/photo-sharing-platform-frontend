"use client";


import Form from "@/components/common/Form";
import Span from "@/components/common/Span";
import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';
import Textarea from "@/components/common/Textarea";

import { FormEvent, useState } from "react";


type Props = {
    local: any;
    user: UserDTO;
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}


export default function ChangeUserInfoForm({ local, user, onSubmit }: Props) {
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
        <Form
            title={local.changeUserInfo}
            onSubmit={handleSubmit}
            onChange={(e) => {
                setFormIsValid(e.currentTarget.checkValidity());
                setIsFormChanged(true);
            }}>

            <div>
                <Span text={local.fullName} required />
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
                <Span text={local.description} />
                <Textarea value={description} onChange={(e) => setDescription(e.target.value)} id="description" rows={5} placeholder={local.writeDescriptionHere} />
            </div>

            <div>
                <TextButton
                    type="submit"
                    style="primary-button"
                    text={local.update}
                    fill="parent"
                    disabled={!formIsValid || !isFormChanged}
                />
            </div>
        </Form>
    )
}