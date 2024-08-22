"use client";


import { FormEvent, SetStateAction, useState } from "react";

import styles from '@/app/styles/text/text.module.css';
import { useRouter } from 'next/navigation';

import TextButton from "@/components/buttons/TextButton";
import Textarea from "@/components/common/Textarea";
import FileSelector from "@/components/common/FileSelector";
import DragAndDropFullPreview from '@/components/common/DragAndDropFullPreview';

import { createPost } from "@/actions/post-actions";


type Props = {
    local: any;
}

export default function CreatePostForm({ local }: Props) {
    const [description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum metus eros, ut rutrum nulla blandit eu. Curabitur ac molestie lorem. Nunc porttitor tempor justo sed tempor.');
    const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);
    const router = useRouter();

    const onImageSelected = (file: SetStateAction<File | undefined>) => {
        setSelectedImage(file);
    };

    async function onCreate(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        //TODO Error handling

        if (!selectedImage) {
            throw new Error("[Create post]: Incorrect request. Post image is empty!");
        }

        if (selectedImage.type == "image/png") {
            throw new Error("[Create post]: Incorrect post image type. Only .jpg and jpeg are acceptable!");
        }

        let formData = new FormData();
        formData.append('image', selectedImage);
        formData.append('description', event.currentTarget.description.value);


        const post: PostDTO | undefined = await createPost(formData);
        if(post) {
            router.push(`${post.id}`);
        }
    }


    return (
        <form onSubmit={onCreate} className={`flex flex-col gap-y-3 sm:gap-y-6`}>
            <h1 className={`${styles['h1']}`}>{local.createPost}</h1>
            <FileSelector onImageSelected={onImageSelected} local={local}>
                {selectedImage && <DragAndDropFullPreview src={URL.createObjectURL(selectedImage)} />}
            </FileSelector>

            <Textarea value={description} title={local.description} onChange={(e) => setDescription(e.target.value)} id="description" rows={5} />

            <TextButton type="submit" text={local.create} disabled={!selectedImage} fill="content" />
        </form>
    )
}