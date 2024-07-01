import { ChangeEvent, KeyboardEvent } from "react"
import styles from '@/app/styles/components/input.module.css'


type InputProps = {
    name: string;
    state: 'invalid' | 'valid';
    type: 'text' | 'number' | 'email' | 'password';
    size: 'small' | 'base' | 'large';
    placeholder: string | undefined;
    required?: boolean | undefined;
    pattern?: string | undefined;
    disabled?: boolean | undefined;
    value?: string | undefined;
    accept?: string | undefined;
    id?: string | undefined;
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void | undefined;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void | undefined;
}


export default function InputField({ name, state, type, size, required, pattern, disabled, value, accept, id, placeholder, onKeyDown, onChange }: InputProps) {
    return (
        <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            required={required}
            pattern={pattern}
            accept={accept}
            id={id}
            disabled={disabled}
            onChange={onChange}
            onKeyDown={onKeyDown}
            className={`peer 
                ${styles['base-input-field']} 
                ${state == 'invalid' ? '[&:not(:placeholder-shown):not(:focus)]:border-red-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' : ''}
                ${styles[size]}
            `}
        />
    )
}