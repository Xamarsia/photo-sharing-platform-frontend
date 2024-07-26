import React, { FormEvent, ReactNode } from "react";

import styles from '@/app/styles/components/form.module.css';

import Title from "@/components/common/Title";

type FormProps = {
    title: string,
    children: ReactNode,
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void,
    onChange?: (event: FormEvent<HTMLFormElement>) => void,
}

export default function Form({ title, children, onSubmit, onChange }: FormProps) {
    return (
        <form onSubmit={onSubmit}
            onChange={onChange}
            className={`${styles["form"]}`}>
            <Title size="small" text={title} />
            {children}
        </form>
    )
}