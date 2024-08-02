import { ChangeEvent } from "react"

import textStyles from '@/app/styles/text/text.module.css';


type TextareaProps = {
    id?: string | undefined,
    value?: string | undefined,
    placeholder?: string | undefined,
    rows?: number | undefined,
    maxLength?: number | undefined,
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void | undefined,
}


export default function Textarea({ id, value, placeholder, rows, maxLength, onChange }: TextareaProps) {
    return (
        <textarea
            id={id}
            value={value}
            placeholder={placeholder}
            rows={rows}
            maxLength={maxLength}
            onChange={onChange}
            className={`resize-none w-full border border-gray-300 bg-inherit appearance-none outline-none  
                focus:border-blue-500 focus:ring-0 focus:ring-blue-500 py-1.5 px-2 min-h-8 
                ${textStyles['placeholder']}
            `}
        />
    )
}
