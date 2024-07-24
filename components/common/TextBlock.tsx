import styles from '@/app/styles/text/text.module.css';


type TextProps = {
    text?: string | number | undefined,
    size: 'extra-small' | 'small' | 'base' | 'large',
}


export default function TextBlock({ text, size }: TextProps) {
    return (
        <p className={`
            ${styles['base-text']} 
            ${styles[size]}
        `}>
            {text}
        </p>
    )
}
