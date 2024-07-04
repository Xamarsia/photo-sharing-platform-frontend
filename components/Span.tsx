import textStyles from '@/app/styles/components/text.module.css'
import buttonStyles from '@/app/styles/components/button.module.css'

type SpanProps = {
    text: string;
    required?: boolean;
    style?: 'input' | 'upload-button'
}


export default function Span({ text, required, style = 'input' }: SpanProps) {
    const uploadButtonStyles = `${textStyles["transparent-button"]} ${buttonStyles["transparent-button"]}`

    return (
        <span className={`
            ${style == 'input' ? textStyles["main-info"] : ''}
            ${style == 'upload-button' ? uploadButtonStyles : ''}
            ${required ? textStyles["required"] : ''}`}>
            {text}
        </span>
    )
}