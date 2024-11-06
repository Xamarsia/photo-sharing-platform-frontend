"use client";


import Input from '@/components/common/Input';
import Modal from '@/components/common/Modal';
import TextButton from '@/components/buttons/TextButton';
import FormFieldError from '@/components/common/FormFieldError';
import VerifyUsernameForm from '@/components/forms/profile/VerifyUsernameForm';

import { ChangeEvent, FormEvent, useState } from "react";

import formStyles from '@/styles/components/form.module.css';

import { getValidationErrors } from '@/lib/zod/validation';
import { updateUniqueUsernameSchema, updateUsernameSchema } from '@/lib/zod/schemas/profile/changeUsername';


type Props = {
    local: any,
    user: UserDTO,
}


export default function ChangeUsernameForm({ local, user }: Props) {
    const [isFormChanged, setIsFormChanged] = useState<boolean>(false);
    const [username, setUsername] = useState<string>(user.username);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [errors, setErrors] = useState<Map<string | number, string>>(new Map());

    async function onUpdate(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!isFormChanged) {
            return;
        }

        if (username == user.username) {
            setIsFormChanged(false);
            return;
        }

        const response = await updateUniqueUsernameSchema.safeParseAsync({
            username: username,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);
        if (errorsMap.size != 0) {
            setErrors(errorsMap);
            return;
        }
        setShowModal(true);
    }

    async function onUsernameChangeHendler(event: ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);

        const response = updateUsernameSchema.safeParse({
            username: event.target.value,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);
        setErrors(errorsMap);
    }

    return (
        <>
            <form onSubmit={onUpdate}
                onChange={() => { setIsFormChanged(true); }}
                className={`text-left ${formStyles['form-container']}`}>

                <div>
                    <Input
                        type="text"
                        name="username"
                        value={username}
                        title={local.username}
                        onChange={(e) => { onUsernameChangeHendler(e) }}
                        required
                        state={errors.has("username") ? 'invalid' : 'valid'}
                    />
                    <FormFieldError text={errors.get("username")} />
                </div>

                <TextButton
                    type="submit"
                    text={local.update}
                    fill="content"
                    disabled={!isFormChanged || errors.size != 0}
                />
            </form>
            <Modal title={local.verifyNewUsername} onCloseClicked={() => { setShowModal(false); }} opened={showModal}>
                <VerifyUsernameForm local={local} newUsername={username} onSubmit={() => { setShowModal(false); setIsFormChanged(false); }} />
            </Modal>
        </>
    )
}
