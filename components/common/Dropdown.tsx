import { ReactNode } from 'react';


type Props = {
    children: ReactNode,
}


export default function Dropdown({ children }: Props) {
    return (
        <div className='relative inline-block'>
            <div className='absolute right-0 mt-2 w-48 sm:w-56 origin-top-right'>
                <div className="p-1 rounded-lg bg-white border border-gray-100">
                    {children}
                </div>
            </div>
        </div>
    )
}
