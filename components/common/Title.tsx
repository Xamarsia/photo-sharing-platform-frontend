import styles from '@/app/styles/text/title.text.module.css';


type Props = {
    text: string | number,
    size: 'small' | 'base' | 'large',
    required?: boolean | undefined,
}


export default function Title({ text, size, required }: Props) {
    return (
        <h1 className={`
            ${styles['title']} 
            ${styles[size]}
            ${required ? styles["required"] : ''} 
        `}>
            {text}
        </h1>
    )
}
