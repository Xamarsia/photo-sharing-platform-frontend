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
        <Form title={local.editPost} onSubmit={onSubmit} onChange={() => setIsFormChanged(true)}>
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
                <TextButton type="submit" style="primary-button" text={local.update} disabled={!isFormChanged} fill="parent" />
            </div>
        </Form>
    )
}