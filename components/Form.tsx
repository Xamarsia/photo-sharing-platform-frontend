import React, { FormEvent, ReactNode } from "react";
import styles from '@/app/styles/components/form.module.css'
import textStyles from '@/app/styles/components/text.module.css'

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
            <h2 className={`${textStyles["title"]}`}>{title}</h2>
            {children}
        </form>
    )
}