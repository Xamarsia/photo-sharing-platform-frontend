import styles from '@/app/styles/text/text.module.css';


type Props = {
    text?: string | number | undefined,
    style: 'main-info' | 'secondary-info' | 'placeholder',
    size: 'extra-small' | 'small' | 'base' | 'large' | 'extra-large',
    required?: boolean | undefined,
}


export default function Text({ text, style, size, required }: Props) {
    return (
        <span className={`
            ${styles[style]} 
            ${styles[size]}
            ${required ? styles["required"] : ''} 
        `}>
            {text}
        </span>
    )
}
