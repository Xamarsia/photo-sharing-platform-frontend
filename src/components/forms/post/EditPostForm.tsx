"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, SetStateAction, useState } from "react";

import Textarea from "@/components/common/Textarea";
import TextButton from "@/components/buttons/TextButton";
import FileSelector from "@/components/common/FileSelector";
import FormFieldError from "@/components/common/FormFieldError";
import DragAndDropFullPreview from '@/components/post/image/DragAndDropFullPreview';

import { updatePost, updatePostImage } from "@/actions/post-actions";

import styles from '@/styles/text/text.module.css';
import formStyles from '@/styles/components/form.module.css';

import { editPostValidationSchema, updateDescriptionSchema, updateRequiredFileSchema } from "@/lib/zod/schemas/post/editPost";
import { getValidationErrors } from "@/lib/zod/validation";


type Props = {
    local: any;
    post: PostDTO;
}


export default function EditPostForm({ local, post }: Props) {
    const [isFormChanged, setIsFormChanged] = useState<boolean>(false);
    const [description, setDescription] = useState<string | undefined>(post?.description);
    const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);
    const [defaultImageExist, setDefaultImageExist] = useState<boolean>(true);
    const [errors, setErrors] = useState<Map<string | number, string>>(new Map());

    const router = useRouter();

    const onImageSelected = (file: SetStateAction<File | undefined>) => {
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
    };

    function onDescriptionChangeHendler(event: ChangeEvent<HTMLTextAreaElement>): void {
        setDescription(event.target.value);

        const response = updateDescriptionSchema.safeParse({
            description: event.target.value,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);

        const error: string | undefined = errorsMap.get(event.target.name);
        if (error) {
            setErrors(errors.set(event.target.name, error));
        } else {
            errors.delete(event.target.name);
        }
    }

    async function onUpdate(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

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
            const newPost: PostDTO | undefined = await updatePost(post.id, body);
        }
        router.push(`/../post/${post.id}`);
    }

    return (
        <form onSubmit={onUpdate} onChange={() => setIsFormChanged(true)} className={`${formStyles['form-container']}`}>
            <h1 className={`${styles['h1']}`}>{local.editPost}</h1>
            <div>
                <FileSelector onImageSelected={onImageSelected} local={local} defaultImageExist={defaultImageExist} onDefaultImageRemoved={() => { setDefaultImageExist(false); }}>
                    {defaultImageExist
                        ? <DragAndDropFullPreview src={`/api/post/image/${post.id}`} />
                        : (selectedImage && <DragAndDropFullPreview src={URL.createObjectURL(selectedImage)} />)
                    }
                </FileSelector>
                <FormFieldError text={errors.get("file")} />
            </div>

            <div>
                <Textarea
                    rows={5}
                    value={description}
                    title={local.description}
                    name="description"
                    onChange={(e) => onDescriptionChangeHendler(e)}
                    state={errors.has("description") ? 'invalid' : 'valid'}
                />
                <FormFieldError text={errors.get("description")} />
            </div>

            <TextButton
                type="submit"
                text={local.update}
                disabled={!isFormChanged || errors.size != 0}
                fill="content" />
        </form>
    )
}
