"use client";


import Form from "@/components/common/Form";
import TextButton from '@/components/buttons/TextButton';

import { FormEvent } from "react";


type Props = {
    local: any;
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}


export default function EditProfileForm({ local, onSubmit }: Props) {

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (onSubmit) {
            onSubmit(event);
        }
    }

    return (
        <Form title={local.editProfile} onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
                <TextButton type="submit" style='secondary-button' text={local.changeUserInfo} />
                <TextButton type="submit" style='secondary-button' text={local.changeUsername} />
                <TextButton type="submit" style='secondary-button' text={local.changePassword} />
                <TextButton type="submit" style='secondary-button' text={local.changeEmail} />
                <TextButton type="submit" style='secondary-button' text={local.changeProfileImage} />
                <TextButton type="submit" style='delete-transparent-button' text={local.deleteProfile} />
            </div>
        </Form>
    )
}