import { ChangeEvent, KeyboardEvent } from "react";

import styles from '@/app/styles/text/text.module.css';


type InputProps = {
    name?: string,
    type: 'text' | 'email' | 'password' | 'file',
    placeholder?: string | undefined,
    required?: boolean | undefined,
    pattern?: string | undefined,
    disabled?: boolean | undefined,
    value?: string | undefined,
    accept?: string | undefined,
    id?: string | undefined,
    draggable?: boolean | undefined,
    hidden?: boolean | undefined,
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void | undefined,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void | undefined,
}


export default function InputField({ name, type, required, pattern, disabled, value, accept, id, draggable, hidden, placeholder = " ", onKeyDown, onChange }: InputProps) {
    return (
        <input
            id={id}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            required={required}
            pattern={pattern}
            accept={accept}
            hidden={hidden}
            draggable={draggable}
            disabled={disabled}
            onChange={onChange}
            onKeyDown={onKeyDown}
            className={`peer 
                w-full rounded-md border border-gray-300 bg-inherit shadow shadow-gray-100 appearance-none outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 focus:border-blue-500 focus:ring-0 focus:ring-blue-500 disabled:bg-slate-50 disabled:border-slate-200 disabled:shadow-none
                py-1.5 px-2 min-h-8
                text-sm leading-5
                ${styles['placeholder']}
            `}
        />
    )
}