import { ChangeEvent, KeyboardEvent } from "react";

import styles from '@/app/styles/components/input.module.css';
import textStyles from '@/app/styles/components/text.module.css';


type InputProps = {
    name?: string,
    type: 'text' | 'number' | 'email' | 'password' | 'file',
    size?: 'small' | 'base' | 'large',
    placeholder?: string | undefined,
    state?: 'invalid' | 'valid',
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


export default function InputField({ name, type, required, pattern, disabled, value, accept, id, draggable, hidden, placeholder=" ", size = 'small', state = 'valid', onKeyDown, onChange }: InputProps) {
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
                ${styles['base-input-field']} 
                ${styles[state]}
                ${styles[size]}
                ${textStyles[size]}
                ${textStyles['placeholder']}
            `}
        />
    )
}