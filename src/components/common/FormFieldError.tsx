
type Props = {
    text?: string | undefined,
}


export default function FormFieldError({ text }: Props) {
    return (
        <span className={`m-2 text-xs text-red-500`}>{text}</span>
    );
};
