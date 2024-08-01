"use client";


import styles from '@/app/styles/components/buttons/button.module.css';
import buttonTextStyle from '@/app/styles/text/button.text.module.css';

type Props = {
    text: string,
    style: 'primary' | 'secondary' | 'delete',
    type?: 'button' | 'submit',
    fill?: 'content' | 'parent',
    disabled?: boolean,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}


export default function TextButton({ text, style, type = 'button', fill = "content", disabled = false, onClick }: Props) {

    return (
        <button type={type}
            className={`
                ${styles['base-button']}
                ${styles[style]} 
                 ${buttonTextStyle[style]} 
                px-2 py-1 sm:px-3 sm:py-2 text-sm leading-5
                ${fill == 'parent' ? 'w-full' : ''}
            `}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    )
}
