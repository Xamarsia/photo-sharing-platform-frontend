"use client";


import Form from "@/components/common/Form";
import Span from "@/components/common/Span";
import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';


import { FormEvent, useState } from "react";


type Props = {
    local: any;
    user: UserDTO;
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

export default function ChangeEmailForm({ local, user, onSubmit }: Props) {
    const [isFormChanged, setIsFormChanged] = useState<boolean>(false);
    const [formIsValid, setFormIsValid] = useState(false);
    const [email, setEmail] = useState(user.email);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (onSubmit) {
            onSubmit(event);
        }
    }

    return (
        <Form title={local.changeEmail}
            onSubmit={handleSubmit}
            onChange={(e) => {
                setFormIsValid(e.currentTarget.checkValidity())
                setIsFormChanged(true)
            }}>
            <div>
                <Span text={local.email} required />
                <Input
                    type="text"
                    name="email"
                    value={email}
                    pattern=".{1,}"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <TextButton
                type="submit"
                style="primary-button"
                text={local.update}
                fill="parent"
                disabled={!formIsValid || !isFormChanged}
            />
        </Form>
    )
}