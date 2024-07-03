import styles from '@/app/styles/components/text.module.css'

type SpanProps = {
    text: string;
    required?: boolean;
}


export default function Span({ text, required }: SpanProps) {
    return (
        <span className={`
            ${styles["main-info"]}
            ${required ? styles["required"] : ''}`}>
            {text}
        </span>
    )
}