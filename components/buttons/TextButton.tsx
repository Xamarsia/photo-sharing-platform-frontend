"use client";


import styles from '@/app/styles/components/buttons/button.module.css';

import textStyles from '@/app/styles/text/text.module.css';
import buttonTextStyle from '@/app/styles/text/button.text.module.css';

type Props = {
    text: string,
    style: 'primary' | 'secondary' | 'delete',
    size?: 'small' | 'base' | 'large',
    rounded?: 'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-xl',
    type?: 'button' | 'submit',
    fill?: 'content' | 'parent',
    disabled?: boolean,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}


export default function TextButton({ text, style, type = 'button', size = 'base', rounded = 'rounded-md', fill = "content", disabled = false, onClick }: Props) {

    return (
        <button type={type}
            className={`
                ${styles['base-button']}
                ${rounded}
                ${styles[size]}
                ${styles[style]} 
                ${textStyles[size]} 
                ${buttonTextStyle[style]} 
                ${fill == 'parent' ? 'w-full' : ''}
            `}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    )
}
