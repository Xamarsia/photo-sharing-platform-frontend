import { ChangeEvent } from "react"

import styles from '@/app/styles/components/textarea.module.css'
import textStyles from '@/app/styles/text/text.module.css';


type TextareaProps = {
    id?: string | undefined,
    value?: string | undefined,
    size?: 'small' | 'base' | 'large',
    placeholder?: string | undefined,
    rows?: number | undefined,
    maxLength?: number | undefined,
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void | undefined,
}


export default function Textarea({ id, value, size = 'small', placeholder, rows, maxLength, onChange }: TextareaProps) {
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
                ${styles[size]}
                ${textStyles['placeholder']}
                ${textStyles[size]}
            `}
        />
    )
}


