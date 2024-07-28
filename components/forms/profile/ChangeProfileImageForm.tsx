"use client";


import Form from "@/components/common/Form";
import TextButton from '@/components/buttons/TextButton';
import FileSelector from "@/components/common/FileSelector";
import ProfileImage from "@/components/profile/image/ProfileImage";

import { FormEvent, SetStateAction, useState } from "react";


type Props = {
    local: any;
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}


export default function ChangeProfileImageForm({ local, onSubmit }: Props) {
    const [isFormChanged, setIsFormChanged] = useState<boolean>(false);
    const [formIsValid, setFormIsValid] = useState(false);

    const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (onSubmit) {
            onSubmit(event);
        }
    }

    const onImageSelected = (file: SetStateAction<File | undefined>) => {
        setSelectedImage(file);
    };

    return (
        <Form
            title={local.changeProfileImage}
            onSubmit={handleSubmit}
            align="text-left"
            onChange={(e) => {
                setFormIsValid(e.currentTarget.checkValidity());
                setIsFormChanged(true);
            }
            }>
            <div className='h-80 w-80'>
                <FileSelector onImageSelected={onImageSelected} local={local} rounded="rounded-full"  >
                    {selectedImage && <ProfileImage src={URL.createObjectURL(selectedImage)} />}
                </FileSelector>
            </div>
            <div>
                <TextButton
                    type="submit"
                    style="primary"
                    text={local.update}
                    fill="content"
                    size="small"
                    disabled={!formIsValid || !isFormChanged}
                />
            </div>
        </Form>
    )
}