"use client";


import Image from 'next/image';


type Props = {
    icon: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}


export default function CircleButton({ icon, onClick }: Props) {
    return (
        <button onClick={onClick}
            className={`flex justify-center items-center aspect-square size-14
                bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 rounded-full text-white`
            }>
            <Image src={icon} alt="icon" className={`size-8`} />
        </button>
    )
}