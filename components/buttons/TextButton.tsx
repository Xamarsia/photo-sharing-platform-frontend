"use client";


import textStyle from '@/app/styles/text/text.module.css';
import style from '@/app/styles/components/button.module.css';


type Props = {
    text: string,
    type?: 'button' | 'submit',
    fill?: 'content' | 'parent',
    disabled?: boolean,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}


export default function TextButton({ text, type = 'button', fill = "content", disabled = false, onClick }: Props) {

    return (
        /* External div for anti-flex */
        <div>
            <button type={type}
                className={`
                ${textStyle['button-text']} 
                ${style['primary']}
                ${fill == 'parent' ? 'w-full' : ''}
            `}
                disabled={disabled}
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    )
}
