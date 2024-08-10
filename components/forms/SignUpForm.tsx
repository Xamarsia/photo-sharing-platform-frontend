"use client";


import styles from '@/app/styles/text/text.module.css';

import Link from 'next/link';

import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';
import Textarea from "@/components/common/Textarea";
import FileSelector from "@/components/common/FileSelector";
import DragAndDropCirclePreview from '@/components/common/DragAndDropCirclePreview';

import { FormEvent, SetStateAction, useState } from "react";



type Props = {
    local: any;
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}


export default function SignUpForm({ local, onSubmit }: Props) {
    const [username, setUsername] = useState("username");
    const [password, setPassword] = useState("password");
    const [rpassword, setRPassword] = useState("password");
    const [fullName, setfullName] = useState("Full Name");
    const [email, setEmail] = useState("localpart@domain.com");
    const [formIsValid, setFormIsValid] = useState(true);
    const [description, setDescription] = useState("");

    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [rpassword, setRPassword] = useState("");
    // const [fullName, setfullName] = useState("");
    // const [email, setEmail] = useState("");
    // const [formIsValid, setFormIsValid] = useState(false);

    const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (onSubmit) {
            onSubmit(event);
        }
    }

    const onImageSelected = (file: SetStateAction<File | undefined>) => {
        setSelectedImage(file);
    };

    return (

        <form onSubmit={handleSubmit}
            onChange={(e) => setFormIsValid(e.currentTarget.checkValidity())}
            className={`flex flex-col gap-y-3 sm:gap-y-6`}>
            <h1 className={`${styles['h1']} text-center`}>{local.signUpFormTitle}</h1>
            <div className='size-72 m-auto'>
                <FileSelector onImageSelected={onImageSelected} local={local} rounded >
                    {selectedImage && <DragAndDropCirclePreview src={URL.createObjectURL(selectedImage)} />}
                </FileSelector>
            </div>

            <Input
                type="text"
                name="username"
                value={username}
                title={local.username}
                pattern='^[a-zA-Z0-9]{1,30}$'
                onChange={(e) => setUsername(e.target.value)}
                required
            />

            <Input
                type="text"
                name="email"
                value={email}
                title={local.email}
                pattern=".{1,}"
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <Input
                type="password"
                name="password"
                value={password}
                title={local.password}
                pattern=".{1,}"
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <Input
                type="password"
                name="rpassword"
                value={rpassword}
                title={local.password}
                onChange={(e) => setRPassword(e.target.value)}
                required
            />

            <Input
                type="text"
                name="fullName"
                value={fullName}
                title={local.fullName}
                pattern="^[a-zA-Z\s]{2,30}$"
                onChange={(e) => setfullName(e.target.value)}
                required
            />

            <Textarea
                value={description}
                title={local.description}
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                rows={5}
            />

            <div>
                <TextButton
                    type="submit"
                    text={local.submit}
                    fill="content"
                    disabled={!formIsValid}
                />
                <Link href={"/auth/signin"} className={`${styles['primary-link']}`} prefetch={false}>{local.haveAccount}</Link>
            </div>
        </form>
    )
}
