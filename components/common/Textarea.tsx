import { ChangeEvent } from "react"


type TextareaProps = {
    id?: string | undefined,
    value?: string | undefined,
    title?: string | undefined,
    placeholder?: string | undefined,
    rows?: number | undefined,
    maxLength?: number | undefined,
    required?: boolean,
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void | undefined,
}


export default function Textarea({ id, value, title, rows, maxLength, required, placeholder = " ", onChange }: TextareaProps) {
    return (
        <div className="relative h-36">
            <textarea
                id={id}
                value={value}
                placeholder={placeholder}
                rows={rows}
                maxLength={maxLength}
                onChange={onChange}
                className={`px-3 resize-none
                peer transition-all outline-none size-full text-sm pb-2 pt-6
                bg-gray-50 focus:bg-white placeholder-shown:bg-gray-50 
                border border-gray-100 focus:border-blue-500 rounded-xl
                font-normal text-gray-800`}
            />
            <label className={`px-3 
                transition-all pointer-events-none h-full text-gray-400 
                text-xs peer-focus:text-xs peer-placeholder-shown:text-sm
                absolute left-0 top-0 pt-2 peer-focus:pt-2 peer-placeholder-shown:pt-3
                ${required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ''}
            `}>
                {title}
            </label>
        </div>
    )
}
