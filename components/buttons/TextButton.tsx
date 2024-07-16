"use client";


import styles from '@/app/styles/components/button.module.css';
import textStyles from '@/app/styles/components/text.module.css';


type TextButtonProps = {
    type: 'button' | 'submit';
    text: string | undefined;
    style: 'primary-button' | 'secondary-button' | 'transparent-button' | 'delete-button' | 'delete-transparent-button' | 'dropdown-button' | 'red-dropdown-button' | 'blue-dropdown-button';
    size?: 'extra-small' | 'small' | 'base' | 'large' | 'extra-large';
    rounded?: 'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-xl';
    fill?: 'content' | 'parent';
    padding?: boolean;
    disabled?: boolean;
    hidden?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


export default function TextButton({ text, style, hidden, type = 'button', size = 'base', rounded = 'rounded-md', fill = "content", padding = true, disabled = false, onClick }: TextButtonProps) {
    return (
        <button type={type}
            className={`
                ${styles['base-button']} 
                ${padding && styles[size]}
                ${textStyles[size]} 
                ${textStyles[style]} 
                ${style.includes('dropdown-button') ? styles['dropdown-button'] : styles[style]} 
                ${rounded}
                ${fill == 'parent' ? 'w-full' : ''}
            `}
            disabled={disabled}
            onClick={onClick}
            hidden={hidden}
        >
            <h1>{text}</h1>
        </button>
    )
}
