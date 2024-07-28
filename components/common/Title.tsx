import styles from '@/app/styles/text/title.text.module.css';


type Props = {
    text: string | number,
    size: 'small' | 'base' | 'large',
    align?: 'text-left'| 'text-center' | 'text-right',
    required?: boolean | undefined,
}


export default function Title({ text, size, align = 'text-center', required }: Props) {
    return (
        <h1 className={`
            ${styles['title']} 
            ${styles[size]}
            ${align}
            ${required ? styles["required"] : ''} 
        `}>
            {text}
        </h1>
    )
}
