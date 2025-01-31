"use client";

import TextButton from '@/components/buttons/TextButton';
import FileSelector from "@/components/common/FileSelector";
import FormFieldError from '@/components/common/FormFieldError';

import { FormEvent, SetStateAction, useCallback, useMemo, useState } from "react";
import { useTranslations } from 'next-intl';
import Image from 'next/image';
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
    const [defaultImageExist, setDefaultImageExist] = useState<boolean>(user.isProfileImageExist);
    const [errors, setErrors] = useState<Map<string | number, string>>(new Map());
    const t = useTranslations('form');
    const router = useRouter();

    const onImageSelected = useCallback((file: SetStateAction<File | undefined>): void => {
        setSelectedImage(file);
        const response = updateProfileImageSchema.safeParse({
            file: file,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);
        setErrors(errorsMap);
    }, [selectedImage, errors]);


    const onUpdate = useCallback(async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

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
        } else if (user.isProfileImageExist && !defaultImageExist) {
            await onDeleteProfileImage();
            return;
        }
        router.push(`/${user.username}`);
    }, [selectedImage, defaultImageExist, errors]);

    let imageSrc = useMemo((): string | undefined => {
        if (selectedImage) {
            return URL.createObjectURL(selectedImage);
        } else if (user.isProfileImageExist && defaultImageExist) {
            return `/api/user/avatar/${user.username}`;
        }
        return undefined;
    }, [selectedImage, defaultImageExist, user])


    const onFormChange = useCallback(() => {
        setIsFormChanged(true);
    }, [isFormChanged]);

    const onDefaultImageRemoved = useCallback(() => {
        setDefaultImageExist(false);
        setIsFormChanged(true);
    }, [defaultImageExist, isFormChanged]);

    return (
        <form onSubmit={onUpdate} onChange={onFormChange}>
            <div>
                <div className='size-60'>
                    <FileSelector onDefaultImageRemoved={onDefaultImageRemoved} onImageSelected={onImageSelected} rounded defaultImageExist={defaultImageExist} >
                        {imageSrc && <Image className={`size-60 rounded-full object-cover object-center`}
                            src={imageSrc} quality={60} alt="Profile image" width={500} height={500} />}
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
