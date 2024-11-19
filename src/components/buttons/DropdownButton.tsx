"use client";

type Props = {
    text: string | undefined,
    style?: 'primary' | 'remove' | undefined,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
}


export default function DropdownButton({ text, onClick, style = 'primary' }: Props) {
    return (
        <button
            className={`text-sm text-left font-normal px-3 rounded-lg h-10 w-full bg-white hover:bg-gray-100
                ${style == 'primary' && 'text-gray-500 hover:text-gray-700'}
                ${style == 'remove' && 'text-red-400 hover:text-red-600'}
            `}
            onClick={onClick}
        >
            {text}
        </button>
    )
}
