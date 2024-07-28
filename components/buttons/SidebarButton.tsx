"use client";

import styles from '@/app/styles/components/buttons/sidebar.button.module.css';
import textStyles from '@/app/styles/text/text.module.css';

type Props = {
    text: string | undefined,
    size: 'small' | 'base' | 'large',
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}


export default function SidebarButton({ text, size, onClick }: Props) {

    return (
        <button
            type={'button'}
            className={`
                ${styles['sidebar']} 
                ${styles[size]}
                ${textStyles[size]}
                ${textStyles['base-text']}
            `}
            onClick={onClick}
        >
            {text}
        </button>
    )
}
