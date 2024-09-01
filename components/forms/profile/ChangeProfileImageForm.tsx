"use client";


import TextButton from '@/components/buttons/TextButton';
import FileSelector from "@/components/common/FileSelector";
import DragAndDropCirclePreview from "@/components/common/DragAndDropCirclePreview";

import { FormEvent, SetStateAction, useState } from "react";
import { updateProfileImage } from '@/actions/user-actions';
import { useRouter } from 'next/navigation';


type Props = {
    local: any,
    user: UserDTO,
}


export default function ChangeProfileImageForm({ local, user }: Props) {
    const [isFormChanged, setIsFormChanged] = useState<boolean>(false);
    const [formIsValid, setFormIsValid] = useState(false);
    const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);
    const [isDefaultImageChanged, setIsDefaultImageChanged] = useState<boolean>(false);
    const router = useRouter();

    const onImageSelected = (file: SetStateAction<File | undefined>) => {
        setSelectedImage(file);
        if (file) {
            setIsDefaultImageChanged(true);
        }
    };

    async function onUpdate(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        //TODO Add error handling
        if (selectedImage) {
            if (selectedImage.type == "image/png") {
                throw new Error("[Create post]: Incorrect post image type. Only .jpg and jpeg are acceptable!");
            }
            let formData = new FormData();
            formData.append('file', selectedImage);
            await updateProfileImage(formData);
        }
        router.push(`/${user.username}`);
    }

    return (

        <form onSubmit={onUpdate}
            onChange={(e) => {
                setFormIsValid(e.currentTarget.checkValidity())
                setIsFormChanged(true)
            }}
            className={`text-left flex flex-col gap-y-3 sm:gap-y-6`}>
            <div className='size-72'>
                <FileSelector onImageSelected={onImageSelected} local={local} rounded  >
                    {isDefaultImageChanged || !user.isProfileImageExist
                        ? (selectedImage && <DragAndDropCirclePreview src={URL.createObjectURL(selectedImage)} />)
                        : <DragAndDropCirclePreview src={`/api/user/avatar/${user.username}`} />
                    }

                </FileSelector>
            </div>

            <TextButton
                type="submit"
                text={local.update}
                fill="content"
                disabled={!formIsValid || !isFormChanged}
            />
        </form>
    )
}
