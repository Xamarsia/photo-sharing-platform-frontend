"use client";


import Form from "@/components/common/Form";
import Span from "@/components/common/Span";
import Link from "@/components/common/Link";
import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';
import Textarea from "@/components/common/Textarea";
import FileSelector from "@/components/common/FileSelector";
import ProfileImage from "@/components/profile/image/ProfileImage";

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
        <Form
            title={local.signUpFormTitle}
            onSubmit={handleSubmit}
            onChange={(e) => setFormIsValid(e.currentTarget.checkValidity())}>
            <div className='h-80 w-80 m-auto'>
                <FileSelector onImageSelected={onImageSelected} local={local} rounded="rounded-full"  >
                    {selectedImage && <ProfileImage src={URL.createObjectURL(selectedImage)} />}
                </FileSelector>
            </div>
            <div>
                <Span text={local.username} required />
                <Input
                    type="text"
                    name="username"
                    value={username}
                    pattern='^[a-zA-Z0-9]{1,30}$'
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <Span text={local.email} required />
                <Input
                    type="text"
                    name="email"
                    value={email}
                    pattern=".{1,}"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <Span text={local.password} required />
                <Input
                    type="password"
                    name="password"
                    value={password}
                    pattern=".{1,}"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className="my-1">
                <Span text={local.repeatPassword} required />
                <Input
                    type="password"
                    name="rpassword"
                    value={rpassword}
                    onChange={(e) => setRPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <Span text={local.fullName} required />
                <Input
                    type="text"
                    name="fullName"
                    value={fullName}
                    pattern="^[a-zA-Z\s]{2,30}$"
                    onChange={(e) => setfullName(e.target.value)}
                    required
                />
            </div>
            <div>
                <Span text={local.description} />
                <Textarea value={description} onChange={(e) => setDescription(e.target.value)} id="description" rows={5} placeholder={local.writeDescriptionHere} />
            </div>
            <div>
                <TextButton
                    type="submit"
                    style="primary-button"
                    text={local.submit}
                    fill="parent"
                    disabled={!formIsValid}
                />
                <Link href="/auth/signin" prefetch={false} style="text-link">
                    {local.haveAccount}
                </Link>
            </div>
        </Form>
    )
}

