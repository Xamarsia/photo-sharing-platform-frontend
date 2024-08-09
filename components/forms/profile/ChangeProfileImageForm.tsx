"use client";


import TextButton from '@/components/buttons/TextButton';
import FileSelector from "@/components/common/FileSelector";
import DragAndDropCirclePreview from "@/components/common/DragAndDropCirclePreview";

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

        <form onSubmit={handleSubmit}
            onChange={(e) => {
                setFormIsValid(e.currentTarget.checkValidity())
                setIsFormChanged(true)
            }}
            className={`text-left flex flex-col gap-y-3 sm:gap-y-6`}>
            <div className='size-72'>
                <FileSelector onImageSelected={onImageSelected} local={local} rounded  >
                    {selectedImage && <DragAndDropCirclePreview src={URL.createObjectURL(selectedImage)} />}
                </FileSelector>
            </div>
            <div>
                <TextButton
                    type="submit"
                    text={local.update}
                    fill="content"
                    disabled={!formIsValid || !isFormChanged}
                />
            </div>
        </form>
    )
}