"use client";


type Props = {
    text: string | undefined,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

export default function DropdownRemoveButton({ text, onClick }: Props) {

    return (
        <button
            className={`
                text-sm text-left font-normal text-red-400 px-3 rounded-lg
                h-10 w-full bg-white hover:bg-gray-100 hover:text-red-600
            `}
            onClick={onClick}
        >
            {text}
        </button>
    )
}