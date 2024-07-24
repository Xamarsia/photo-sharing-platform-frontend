"use client";


import { FormEvent, SetStateAction, useState } from "react";

import Form from "@/components/common/Form";
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
        <Form title={local.createPost} onSubmit={onSubmit}>
            <div>
                <FileSelector onImageSelected={onImageSelected} local={local}>
                    {selectedImage && <PostImage src={URL.createObjectURL(selectedImage)} size={"uncropped-square"} />}
                </FileSelector>
            </div>

            <div>
                <Span text={local.description} />
                <Textarea value={description} onChange={(e) => setDescription(e.target.value)} id="description" rows={5} placeholder={local.writeDescriptionHere} />
            </div>

            <div>
                <TextButton type="submit" style="primary" text={local.create} disabled={!selectedImage} fill="parent" />
            </div>
        </Form>
    )
}