"use client";


import Form from "@/components/common/Form";
import Button from '@/components/buttons/Button';

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
                <Button type="submit" style='secondary-button' text={local.changeUserInfo} />
                <Button type="submit" style='secondary-button' text={local.changeUsername} />
                <Button type="submit" style='secondary-button' text={local.changePassword} />
                <Button type="submit" style='secondary-button' text={local.changeEmail} />
                <Button type="submit" style='secondary-button' text={local.changeProfileImage} />
                <Button type="submit" style='delete-transparent-button' text={local.deleteProfile} />
            </div>
        </Form>
    )
}