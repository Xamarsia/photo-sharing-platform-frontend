"use client";


import { ChangeEvent, FormEvent, SetStateAction, useState } from "react";
import { useRouter } from 'next/navigation';

import TextButton from "@/components/buttons/TextButton";
import Textarea from "@/components/common/Textarea";
import FileSelector from "@/components/common/FileSelector";
import FormFieldError from "@/components/common/FormFieldError";
import DragAndDropFullPreview from '@/components/post/image/DragAndDropFullPreview';

import styles from '@/app/styles/text/text.module.css';
import formStyles from '@/app/styles/components/form.module.css';

import { createPost } from "@/actions/post-actions";
import { createPostValidationSchema, updateDescriptionSchema, updateRequiredFileSchema } from "@/lib/zod/schemas/post/createPost";
import { getValidationErrors } from "@/lib/zod/validation";
// 'use server'
// import { redirect } from 'next/navigation'
// import { revalidatePath } from 'next/cache'


type Props = {
    local: any;
}

export default function CreatePostForm({ local }: Props) {
    const [description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum metus eros, ut rutrum nulla blandit eu. Curabitur ac molestie lorem. Nunc porttitor tempor justo sed tempor.');
    const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);
    const [errors, setErrors] = useState<Map<string | number, string>>(new Map());
    const router = useRouter();

    const onImageSelected = (file: SetStateAction<File | undefined>) => {
        setSelectedImage(file);

        const response = updateRequiredFileSchema.safeParse({
            file: file,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);
        const error = errorsMap.get("file");
        if (error) {
            setErrors(errors.set("file", error));
        } else {
            errors.delete("file");
        }
    };

    async function onCreate(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const response = createPostValidationSchema.safeParse({
            file: selectedImage,
            description: description,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);

        if (errorsMap.size != 0) {
            setErrors(errorsMap);
            return;
        }

        if (selectedImage) {
            let formData = new FormData();
            formData.append('image', selectedImage);
            formData.append('description', event.currentTarget.description.value);


            const post: PostDTO | undefined = await createPost(formData);
            if (post) {
                router.prefetch(`${post.id}`)
                router.push(`${post.id}`);

                //TODO Add revalidation
                // revalidatePath('/posts') // Update cached posts
                // redirect(`/post/${id}`) // Navigate to the new post page
            }
        }
    }

    function onDescriptionChangeHendler(event: ChangeEvent<HTMLTextAreaElement>): void {
        setDescription(event.target.value);

        const response = updateDescriptionSchema.safeParse({
            description: event.target.value,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);

        const error = errorsMap.get(event.target.name);
        if (error) {
            setErrors(errors.set(event.target.name, error));
        } else {
            errors.delete(event.target.name);
        }
    }

    return (
        <form onSubmit={onCreate} className={`${formStyles['form-container']}`}>
            <h1 className={`${styles['h1']}`}>{local.createPost}</h1>
            <div>
                <FileSelector onImageSelected={onImageSelected} local={local}>
                    {selectedImage && <DragAndDropFullPreview src={URL.createObjectURL(selectedImage)} />}
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
                text={local.create}
                fill="content"
                disabled={!selectedImage || errors.size != 0
                }
            />
        </form>
    )
}
