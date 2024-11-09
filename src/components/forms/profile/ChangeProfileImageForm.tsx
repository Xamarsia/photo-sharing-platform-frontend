"use client";

import TextButton from '@/components/buttons/TextButton';
import FileSelector from "@/components/common/FileSelector";
import FormFieldError from '@/components/common/FormFieldError';
import DragAndDropCirclePreview from "@/components/profile/image/DragAndDropCirclePreview";

import { FormEvent, SetStateAction, useState } from "react";
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

import { updateProfileImage } from '@/actions/user-actions';
import { updateProfileImageSchema } from '@/lib/zod/schemas/profile/changeProfileImage';
import { getValidationErrors } from '@/lib/zod/validation';


type Props = {
    user: UserDTO,
    onDeleteProfileImage: () => void,
}


export default function ChangeProfileImageForm({ user, onDeleteProfileImage }: Props) {
    const [isFormChanged, setIsFormChanged] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);
    const [errors, setErrors] = useState<Map<string | number, string>>(new Map());
    const t = useTranslations('form');
    const router = useRouter();

    const onImageSelected = (file: SetStateAction<File | undefined>) => {
        setSelectedImage(file);
        const response = updateProfileImageSchema.safeParse({
            file: file,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);
        setErrors(errorsMap);
    };

    async function onUpdate(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const response = updateProfileImageSchema.safeParse({
            file: selectedImage,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);

        if (errorsMap.size != 0) {
            setErrors(errorsMap);
            return;
        }

        if (selectedImage) {
            let formData = new FormData();
            formData.append('file', selectedImage);
            await updateProfileImage(formData);
        }
        router.push(`/${user.username}`);
    }

    return (
        <form onSubmit={onUpdate}
            onChange={(e) => { setIsFormChanged(true) }}
            className='text-left flex flex-col gap-y-3'>
            <div>
                <div className='size-72'>
                    <FileSelector onDefaultImageRemoved={onDeleteProfileImage} onImageSelected={onImageSelected} rounded defaultImageExist={user.isProfileImageExist} >
                        {/* <DragAndDropCirclePreview src={user.isProfileImageExist ? `/api/user/avatar/${user.username}` : URL.createObjectURL(selectedImage)} /> */}

                        {/* //PLEASE REVIEW TIHS */}
                        {user.isProfileImageExist
                            ? <DragAndDropCirclePreview src={`/api/user/avatar/${user.username}`} />
                            : (selectedImage && <DragAndDropCirclePreview src={URL.createObjectURL(selectedImage)} />)
                        }
                        {/* // */}

                    </FileSelector>
                </div>
                <FormFieldError text={errors.get("file")} />
            </div>

            <TextButton
                type="submit"
                text={t('update')}
                fill="content"
                disabled={!isFormChanged || errors.size != 0}
            />
        </form>
    )
}
