import React, { FormEvent, ReactNode } from "react";

import Title from "@/components/common/Title";

type FormProps = {
    title: string,
    children: ReactNode,
    align?: 'text-left' | 'text-center' | 'text-right',
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void,
    onChange?: (event: FormEvent<HTMLFormElement>) => void,
}

export default function Form({ title, children, align, onSubmit, onChange }: FormProps) {
    return (
        <form onSubmit={onSubmit}
            onChange={onChange}
            className={`flex flex-col gap-y-3 sm:gap-y-6`}>
            <Title size="small" align={align} text={title} />
            {children}
        </form>
    )
}