import Text from '@/components/common/Text';


type SpanProps = {
    text: string,
    required?: boolean | undefined,
}


export default function Span({ text, required }: SpanProps) {
    return (
        <Text style='main-info' size='small' text={text} required={required} />
    )
}