"use client";

import Modal from '@/components/common/Modal';
import TextButton from '@/components/buttons/TextButton';
import FileSelector from "@/components/common/FileSelector";
import FormFieldError from '@/components/common/FormFieldError';
import TextRemoveButton from '@/components/buttons/TextRemoveButton';
import DragAndDropCirclePreview from "@/components/profile/image/DragAndDropCirclePreview";

import { FormEvent, SetStateAction, useState } from "react";
import { useRouter } from 'next/navigation';

import formStyles from '@/app/styles/components/form.module.css';

import { deleteProfileImage, updateProfileImage } from '@/actions/user-actions';
import { updateProfileImageSchema } from '@/lib/zod/schemas/profile/changeProfileImage';
import { getValidationErrors } from '@/lib/zod/validation';


type Props = {
    local: any,
    user: UserDTO,
}


export default function ChangeProfileImageForm({ local, user }: Props) {
    const [isFormChanged, setIsFormChanged] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);
    const [errors, setErrors] = useState<Map<string | number, string>>(new Map());
    const router = useRouter();

    const onImageSelected = (file: SetStateAction<File | undefined>) => {
        setSelectedImage(file);
        const response = updateProfileImageSchema.safeParse({
            file: file,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);
        setErrors(errorsMap);
    };

    const onDeleteProfileImage = async () => {
        await deleteProfileImage();
        router.push(`/${user.username}`);
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
        <>
            <form onSubmit={onUpdate}
                onChange={(e) => { setIsFormChanged(true) }}
                className={`text-left ${formStyles['form-container']}`}>
                <div>
                    <div className='size-72'>
                        <FileSelector onDefaultImageRemoved={() => { setShowModal(true); }} onImageSelected={onImageSelected} local={local} rounded defaultImageExist={user.isProfileImageExist} >
                            {user.isProfileImageExist
                                ? <DragAndDropCirclePreview src={`/api/user/avatar/${user.username}`} />
                                : (selectedImage && <DragAndDropCirclePreview src={URL.createObjectURL(selectedImage)} />)
                            }
                        </FileSelector>
                    </div>
                    <FormFieldError text={errors.get("file")} />
                </div>

                <TextButton
                    type="submit"
                    text={local.update}
                    fill="content"
                    disabled={!isFormChanged || errors.size != 0}
                />
            </form>
            <Modal onCloseClicked={() => { setShowModal(false); }} title={local.removeProfileImage} opened={showModal}>
                <div className='flex flex-col gap-20'>
                    <p>{local.removeProfileImageMessage}</p>
                    <TextRemoveButton text={local.remove} onClick={onDeleteProfileImage} />
                </div>
            </Modal>
        </>
    )
}
