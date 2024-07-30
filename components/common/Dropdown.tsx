import { ReactNode } from 'react';


type Props = {
    children: ReactNode,
}


export default function Dropdown({ children }: Props) {
    return (
        <div className='relative inline-block'>
            <div className='absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-10'>
                <div className="py-2">
                    {children}
                </div>
            </div>
        </div>
    )
}
