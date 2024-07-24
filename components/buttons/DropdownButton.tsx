"use client";


import styles from '@/app/styles/components/buttons/button.module.css';

import textStyles from '@/app/styles/text/text.module.css';
import dropdownTextStyle from '@/app/styles/text/dropdown.text.module.css';

type Props = {
    text: string | undefined,
    style: 'primary' | 'secondary' | 'delete'
    size: 'small' | 'base' | 'large',
    disabled?: boolean,
    hidden?: boolean,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}


export default function DropdownButton({ text, style, hidden, size, onClick }: Props) {

    return (
        <button
            type={'button'}
            className={`
                ${styles['dropdown']} 
                ${styles[size]}
                ${textStyles[size]} 
                ${dropdownTextStyle[style]} 
            `}
            onClick={onClick}
            hidden={hidden}
        >
            {text}
        </button>
    )
}
