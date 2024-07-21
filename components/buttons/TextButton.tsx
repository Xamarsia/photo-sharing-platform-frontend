"use client";


import styles from '@/app/styles/components/button.module.css';
import textStyles from '@/app/styles/components/text.module.css';


type TextButtonProps = {
    text: string | undefined,
    style: 'primary-button' | 'secondary-button' | 'transparent-button' | 'gray-transparent-button' | 'delete-button' | 'delete-transparent-button' | 'dropdown-button' | 'red-dropdown-button' | 'blue-dropdown-button',
    size?: 'extra-small' | 'small' | 'base' | 'large' | 'extra-large',
    rounded?: 'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-xl',
    type?: 'button' | 'submit',
    fill?: 'content' | 'parent',
    padding?: boolean,
    disabled?: boolean,
    hidden?: boolean,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}


export default function TextButton({ text, style, hidden, type = 'button', size = 'base', rounded = 'rounded-md', fill = "content", padding = true, disabled = false, onClick }: TextButtonProps) {
    function getButtonStyle(style: string): string {
        if (style.includes('dropdown-button')) {
            return 'dropdown-button';
        } else if (style.includes('transparent-button')) {
            return 'transparent-button';
        } return style;
    }

    const buttonStyle: string = getButtonStyle(style);

    return (
        <button type={type}
            className={`
                ${styles['base-button']}
                ${styles[buttonStyle]} 
                ${padding && styles[size]}
                ${textStyles[size]} 
                ${textStyles[style]} 
                ${rounded}
                ${fill == 'parent' ? 'w-full' : ''}
            `}
            disabled={disabled}
            onClick={onClick}
            hidden={hidden}
        >
            {text}
        </button>
    )
}
