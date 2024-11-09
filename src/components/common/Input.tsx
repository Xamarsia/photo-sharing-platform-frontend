"use client";

import { ChangeEvent } from "react";


type Props = {
    name?: string | undefined,
    type: 'text' | 'email' | 'password',
    title?: string | undefined,
    value?: string | undefined,
    state?: 'invalid' | 'valid'
    placeholder?: string | undefined,
    required?: boolean | undefined,
    id?: string | undefined,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}


export default function InputField({ name, type, title, required, value, state, id, placeholder = " ", onChange }: Props) {
    return (
        <div className="relative h-12">
            <input
                id={id}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
                className={`px-3 
                    peer transition-all outline-none size-full text-sm pb-2 pt-6
                    bg-gray-50 focus:bg-white placeholder-shown:bg-gray-50 
                    border border-gray-100 focus:border-blue-500 rounded-xl
                    font-normal text-gray-800 
                    ${state == 'invalid' && '[&:not(:placeholder-shown):not(:focus)]:border-red-500'}`
                }
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
