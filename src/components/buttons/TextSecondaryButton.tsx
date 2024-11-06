"use client";


import textStyle from '@/styles/text/text.module.css';
import style from '@/styles/components/button.module.css';


type Props = {
    text: string,
    type?: 'button' | 'submit',
    fill?: 'content' | 'parent',
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}


export default function TextSecondaryButton({ text, type = 'button', fill = "content", onClick }: Props) {

    return (
        /* External div for anti-flex */
        <div>
            <button type={type}
                className={`
                ${textStyle['button-text']}
                ${style['secondary']}
                ${fill == 'parent' && 'w-full'}
            `}
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    )
}
