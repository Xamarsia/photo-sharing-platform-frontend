import styles from '@/app/styles/components/text.module.css';


type TextProps = {
    text?: string | undefined;
    style: 'main-info' | 'secondary-info' | 'base-text' | 'placeholder';
    size: 'extra-small' | 'small' | 'base' | 'large' | 'extra-large';
    required?: boolean | undefined;
}


export default function Text({ text, style, size, required }: TextProps) {
    return (
        <p className={`
            ${styles[style]} 
            ${styles[size]}
            ${required ? styles["required"] : ''} 
        `}>
            {text}
        </p>
    )
}
