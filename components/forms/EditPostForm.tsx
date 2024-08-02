"use client";


import { FormEvent, SetStateAction, useState } from "react";

import styles from '@/app/styles/text/text.module.css';

import TextButton from "@/components/buttons/TextButton";
import Textarea from "@/components/common/Textarea";
import PostImage from "@/components/post/image/PostImage";
import FileSelector from "@/components/common/FileSelector";


type Props = {
    local: any;
    detailedPost: DetailedPostDTO;
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

export default function EditPostForm({ local, detailedPost, onSubmit }: Props) {
    const [isFormChanged, setIsFormChanged] = useState<boolean>(false)
    const [description, setDescription] = useState(detailedPost.postDTO?.description);
    const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);

    const onImageSelected = (file: SetStateAction<File | undefined>) => {
        setSelectedImage(file);
    };


    return (
        <form onSubmit={onSubmit} onChange={() => setIsFormChanged(true)} className={`flex flex-col gap-y-3 sm:gap-y-6`}>
            <h1 className={`text-slate-800 font-normal tracking-normal text-xl sm:text-2xl leading-9 text-center`}>{local.editPost}</h1>
            <div>
                <FileSelector onImageSelected={onImageSelected} local={local}>
                    {selectedImage && <PostImage src={URL.createObjectURL(selectedImage)} size={"uncropped-square"} />}
                </FileSelector>
            </div>
            <div>
                <span className={`${styles['formInputTitle']}`}>{local.description}</span>
                <Textarea value={description} onChange={(e) => setDescription(e.target.value)} id="description" rows={5} placeholder={local.writeDescriptionHere} />
            </div>
            <div>
                <TextButton type="submit" style="primary" text={local.update} disabled={!isFormChanged} fill="parent" />
            </div>
        </form>
    )
}