"use client";

type Props = {
    text: string | undefined,
    disabled?: boolean,
    hidden?: boolean,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

export default function DropdownButton({ text, hidden, onClick }: Props) {

    return (
        <button
            type={'button'}
            className={`
                block hover:bg-gray-100 w-full
                px-2 py-1 sm:px-3 sm:py-2 text-sm leading-5
                text-left text-gray-500 font-normal hover:text-gray-700 
            `}
            onClick={onClick}
            hidden={hidden}
        >
            {text}
        </button>
    )
}
