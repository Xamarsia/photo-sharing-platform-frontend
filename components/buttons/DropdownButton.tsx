"use client";

import dropdownTextStyle from '@/app/styles/text/dropdown.text.module.css';

type Props = {
    text: string | undefined,
    style: 'primary' | 'secondary' | 'delete'
    disabled?: boolean,
    hidden?: boolean,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}


export default function DropdownButton({ text, style, hidden, onClick }: Props) {

    return (
        <button
            type={'button'}
            className={`
                block hover:bg-gray-100 shadow-none w-full cursor-pointer disabled:cursor-default rounded-md
                px-2 py-1 sm:px-3 sm:py-2 text-sm leading-5
                ${dropdownTextStyle[style]} 
            `}
            onClick={onClick}
            hidden={hidden}
        >
            {text}
        </button>
    )
}
