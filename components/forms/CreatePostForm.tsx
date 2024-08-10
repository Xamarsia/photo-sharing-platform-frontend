"use client";


import { FormEvent, SetStateAction, useState } from "react";

import styles from '@/app/styles/text/text.module.css';

import TextButton from "@/components/buttons/TextButton";
import Textarea from "@/components/common/Textarea";
import FileSelector from "@/components/common/FileSelector";
import DragAndDropFullPreview from '@/components/common/DragAndDropFullPreview';


type Props = {
    local: any;
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

export default function CreatePostForm({ local, onSubmit }: Props) {
    // const [description, setDescription] = useState('');
    const [description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum metus eros, ut rutrum nulla blandit eu. Curabitur ac molestie lorem. Nunc porttitor tempor justo sed tempor.');

    const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);

    const onImageSelected = (file: SetStateAction<File | undefined>) => {
        setSelectedImage(file);
    };


    return (
        <form onSubmit={onSubmit} className={`flex flex-col gap-y-3 sm:gap-y-6`}>
            <h1 className={`${styles['h1']} text-center`}>{local.createPost}</h1>
            <FileSelector onImageSelected={onImageSelected} local={local}>
                {selectedImage && <DragAndDropFullPreview src={URL.createObjectURL(selectedImage)} />}
            </FileSelector>
            <Textarea value={description} title={local.description} onChange={(e) => setDescription(e.target.value)} id="description" rows={5} />
            <div>
                <TextButton type="submit" text={local.create} disabled={!selectedImage} fill="content" />
            </div>
        </form>
    )
}