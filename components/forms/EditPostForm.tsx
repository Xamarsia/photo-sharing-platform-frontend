"use client";

import { FormEvent, SetStateAction, useState } from "react";

import styles from '@/app/styles/text/text.module.css';

import Textarea from "@/components/common/Textarea";
import TextButton from "@/components/buttons/TextButton";
import FileSelector from "@/components/common/FileSelector";
import DragAndDropFullPreview from '@/components/common/DragAndDropFullPreview';

import { updatePost, updatePostImage } from "@/actions/post-actions";

import { useRouter } from "next/navigation";


type Props = {
    local: any;
    post: PostDTO;
}


export default function EditPostForm({ local, post }: Props) {
    const [isFormChanged, setIsFormChanged] = useState<boolean>(false);
    const [description, setDescription] = useState(post?.description);
    const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);
    const [defaultImageExist, setDefaultImageExist] = useState<boolean>(true);

    const router = useRouter();

    const onImageSelected = (file: SetStateAction<File | undefined>) => {
        setSelectedImage(file);
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
            await updatePostImage(post.id, formData);
        }

        if (isFormChanged) {
            if (description == post.description) {
                return;
            }

            const body: UpdatePostRequest = {
                description: description,
            }
            const newPost: PostDTO | undefined = await updatePost(post.id, body);
        }
        router.prefetch(`/../post/${post.id}`);
        router.push(`/../post/${post.id}`);
    }

    return (
        <form onSubmit={onUpdate} onChange={() => setIsFormChanged(true)} className={`flex flex-col gap-y-3 sm:gap-y-6`}>
            <h1 className={`${styles['h1']}`}>{local.editPost}</h1>

            <FileSelector onImageSelected={onImageSelected} local={local} defaultImageExist={defaultImageExist} onDefaultImageRemoved={() => { setDefaultImageExist(false); }}>
                {defaultImageExist
                    ? <DragAndDropFullPreview src={`/api/post/image/${post.id}`} />
                    : (selectedImage && <DragAndDropFullPreview src={URL.createObjectURL(selectedImage)} />)
                }
            </FileSelector>

            <Textarea value={description} title={local.description} onChange={(e) => setDescription(e.target.value)} id="description" rows={5} />

            <TextButton type="submit" text={local.update} disabled={!isFormChanged || (selectedImage == undefined && !defaultImageExist)} fill="content" />
        </form>
    )
}
