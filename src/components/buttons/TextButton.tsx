"use client";


import textStyle from '@/styles/text/text.module.css';


type Props = {
    text: string,
    type?: 'button' | 'submit',
    fill?: 'content' | 'parent',
    disabled?: boolean,
    style?: 'primary' | 'secondary' | 'remove' | undefined,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
}


export default function TextButton({ text, type = 'button', fill = "content", style = 'primary', disabled = false, onClick }: Props) {
    return (
        /* External div for anti-flex */
        <div>
            <button type={type}
                className={`
                    ${fill == 'parent' ? 'w-full' : ''}
                    ${textStyle['button-text']} px-4 rounded-xl h-10
                    ${style == 'primary' && 'bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white'}
                    ${style == 'secondary' && 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-100'}
                    ${style == 'remove' && 'bg-red-600 hover:bg-red-500 disabled:bg-red-300 text-white'}
            `}
                disabled={disabled}
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    )
}
