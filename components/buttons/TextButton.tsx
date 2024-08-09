"use client";


import style from '@/app/styles/text/text.module.css';


type Props = {
    text: string,
    type?: 'button' | 'submit',
    fill?: 'content' | 'parent',
    disabled?: boolean,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}


export default function TextButton({ text, type = 'button', fill = "content", disabled = false, onClick }: Props) {

    return (
        <button type={type}
            className={`
                ${style['button-text']} bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 h-10 px-4 rounded-xl text-white 
                ${fill == 'parent' ? 'w-full' : ''}
            `}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    )
}
