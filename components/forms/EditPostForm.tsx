"use client";


import { FormEvent, SetStateAction, useState } from "react";

import styles from '@/app/styles/text/text.module.css';

import TextButton from "@/components/buttons/TextButton";
import Textarea from "@/components/common/Textarea";
import FileSelector from "@/components/common/FileSelector";
import DragAndDropFullPreview from '@/components/common/DragAndDropFullPreview';


type Props = {
    local: any;
    post: PostDTO;
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

export default function EditPostForm({ local, post, onSubmit }: Props) {
    const [isFormChanged, setIsFormChanged] = useState<boolean>(false)
    const [description, setDescription] = useState(post?.description);
    const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);

    const onImageSelected = (file: SetStateAction<File | undefined>) => {
        setSelectedImage(file);
    };


    return (
        <form onSubmit={onSubmit} onChange={() => setIsFormChanged(true)} className={`flex flex-col gap-y-3 sm:gap-y-6`}>
            <h1 className={`${styles['h1']}`}>{local.editPost}</h1>

            <FileSelector onImageSelected={onImageSelected} local={local}>
                {selectedImage && <DragAndDropFullPreview src={URL.createObjectURL(selectedImage)} />}
            </FileSelector>

            <Textarea value={description} title={local.description} onChange={(e) => setDescription(e.target.value)} id="description" rows={5} />

            <TextButton type="submit" text={local.update} disabled={!isFormChanged} fill="content" />
        </form>
    )
}