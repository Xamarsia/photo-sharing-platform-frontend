"use client";


import { FormEvent, SetStateAction, useState } from "react";

import Span from "@/components/common/Span";
import TextButton from "@/components/buttons/TextButton";
import Textarea from "@/components/common/Textarea";
import PostImage from "@/components/post/image/PostImage";
import FileSelector from "@/components/common/FileSelector";


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
            <h1 className={`text-slate-800 font-normal tracking-normal text-xl sm:text-2xl leading-9 text-center`}>{local.createPost}</h1>
            <FileSelector onImageSelected={onImageSelected} local={local}>
                {selectedImage && <PostImage src={URL.createObjectURL(selectedImage)} size={"uncropped-square"} />}
            </FileSelector>

            <div>
                <Span text={local.description} />
                <Textarea value={description} onChange={(e) => setDescription(e.target.value)} id="description" rows={5} placeholder={local.writeDescriptionHere} />
            </div>
            <div>
                <TextButton type="submit" style="primary" text={local.create} disabled={!selectedImage} fill="content" />
            </div>
        </form>
    )
}