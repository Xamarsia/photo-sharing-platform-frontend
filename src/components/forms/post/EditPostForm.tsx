"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from 'next-intl';
import { ChangeEvent, FormEvent, SetStateAction, useCallback, useMemo, useState } from "react";

import Textarea from "@/components/common/Textarea";
import TextButton from "@/components/buttons/TextButton";
import FileSelector from "@/components/common/FileSelector";
import FormFieldError from "@/components/common/FormFieldError";
import DragAndDropFullPreview from '@/components/post/image/DragAndDropFullPreview';

import { updatePostInfo, updatePostImage } from "@/actions/post-actions";

import styles from '@/styles/text/text.module.css';

import { editPostValidationSchema, updateDescriptionSchema, updateRequiredFileSchema } from "@/lib/zod/schemas/post/editPost";
import { getValidationErrors } from "@/lib/zod/validation";


type Props = {
    post: PostDTO;
}


export default function EditPostForm({ post }: Props) {
    const [isFormChanged, setIsFormChanged] = useState<boolean>(false);
    const [description, setDescription] = useState<string | undefined>(post?.description);
    const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);
    const [defaultImageExist, setDefaultImageExist] = useState<boolean>(true);
    const [errors, setErrors] = useState<Map<string | number, string>>(new Map());
    const t = useTranslations('form');
    const router = useRouter();

    const onImageSelected = useCallback((file: SetStateAction<File | undefined>) => {
        setSelectedImage(file);
        const response = updateRequiredFileSchema.safeParse({
            file: file,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);
        const error: string | undefined = errorsMap.get("file");
        if (error) {
            setErrors(errors.set("file", error));
        } else {
            errors.delete("file");
        }
    }, [selectedImage, errors]);

    const onDescriptionChangeHendler = useCallback((e: ChangeEvent<HTMLTextAreaElement>): void => {
        setDescription(e.target.value);

        const response = updateDescriptionSchema.safeParse({
            description: e.target.value,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);

        const error: string | undefined = errorsMap.get(e.target.name);
        if (error) {
            setErrors(errors.set(e.target.name, error));
        } else {
            errors.delete(e.target.name);
        }
    }, [description, errors]);

    const onUpdate = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = editPostValidationSchema.safeParse({
            file: selectedImage,
            description: description,
            defaultImage: defaultImageExist
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);

        if (errorsMap.size != 0) {
            setErrors(errorsMap);
            console.log("ERRORS: ", errorsMap)
            return;
        }

        if (selectedImage) {
            let formData = new FormData();
            formData.append('file', selectedImage);
            await updatePostImage(post.id, formData);
        }

        if (isFormChanged && description != post.description) {
            const body: UpdatePostRequest = {
                description: description,
            }
            const newPost: PostDTO | undefined = await updatePostInfo(post.id, body);
        }
        router.push(`/../post/${post.id}`);
    }, [selectedImage, description, defaultImageExist, isFormChanged, errors]);

    let imageSrc = useMemo((): string | undefined => {
        if (selectedImage) {
            return URL.createObjectURL(selectedImage);
        } else if (defaultImageExist) {
            return `/api/post/image/${post.id}`;
        }
        return undefined;
    }, [selectedImage, defaultImageExist, post])

    const onFormChange = useCallback(() => {
        setIsFormChanged(true);
    }, [isFormChanged]);

    const onDefaultImageRemoved = useCallback(() => {
        setDefaultImageExist(false);
    }, [defaultImageExist]);

    return (
        <form onSubmit={onUpdate} onChange={onFormChange} className='flex flex-col gap-y-3'>
            <h1 className={`${styles['h1']}`}>{t('editPost')}</h1>
            <div>
                <FileSelector onImageSelected={onImageSelected} defaultImageExist={defaultImageExist} onDefaultImageRemoved={onDefaultImageRemoved}>
                    {imageSrc && <DragAndDropFullPreview src={imageSrc} />}
                </FileSelector>
                <FormFieldError text={errors.get("file")} />
            </div>

            <div>
                <Textarea
                    rows={5}
                    value={description}
                    title={t('description')}
                    name="description"
                    onChange={onDescriptionChangeHendler}
                    state={errors.has("description") ? 'invalid' : 'valid'}
                />
                <FormFieldError text={errors.get("description")} />
            </div>

            <TextButton
                type="submit"
                text={t('update')}
                disabled={!isFormChanged || errors.size != 0}
                fill="content" />
        </form>
    )
}
