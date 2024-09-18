"use client";


import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';
import FormFieldError from '@/components/common/FormFieldError';

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from 'next/navigation';

import { updateUniqueUsernameSchema, updateUsernameSchema } from '@/lib/zod/schemas/changeUsername';
import { updateUsername } from '@/actions/user-actions';
import { getValidationErrors } from '@/lib/zod/validation';


type Props = {
    local: any,
    user: UserDTO,
}


export default function ChangeUsernameForm({ local, user }: Props) {
    const [isFormChanged, setIsFormChanged] = useState<boolean>(false);
    const [username, setUsername] = useState(user.username);
    const [errors, setErrors] = useState<Map<string | number, string>>(new Map());
    const router = useRouter();

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

        const body: UsernameUpdateRequest = {
            username: username,
        }
        const newUser: UserDTO | undefined = await updateUsername(body);
        router.push(`/${newUser?.username}`);
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
        <form
            onSubmit={onUpdate}
            onChange={(e) => { setIsFormChanged(true); }}
            className={`text-left flex flex-col gap-y-3 sm:gap-y-6`}>

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
    )
}
