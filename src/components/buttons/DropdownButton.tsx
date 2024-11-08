"use client";


type Props = {
    text: string | undefined,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

//remove DropdownRemoveButton add style prop
export default function DropdownButton({ text, onClick }: Props) {

    return (
        <button
            className={`
                text-sm text-left font-normal text-gray-500 px-3 rounded-lg
                h-10 w-full bg-white hover:bg-gray-100 hover:text-gray-700
            `}
            onClick={onClick}
        >
            {text}
        </button>
    )
}