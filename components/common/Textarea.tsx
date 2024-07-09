import { ChangeEvent } from "react"
import styles from '@/app/styles/components/textarea.module.css'
import textStyles from '@/app/styles/components/text.module.css'


type TextareaProps = {
    id?: string | undefined;
    value?: string | undefined;
    size?: 'small' | 'base' | 'large';
    placeholder?: string | undefined;
    rows?: number | undefined;
    maxLength?: number | undefined;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void | undefined;
}


export default function Textarea({ id, value, size = 'base', placeholder, rows, maxLength, onChange }: TextareaProps) {
    return (
        <textarea
            id={id}
            value={value}
            placeholder={placeholder}
            rows={rows}
            maxLength={maxLength}
            onChange={onChange}
            className={`resize-none
                ${styles['textarea']} 
                ${textStyles['placeholder']}
                ${size ? styles[size] : ''}
            `}
        />
    )
}


