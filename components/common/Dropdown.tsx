import { ReactNode } from 'react';


type Props = {
    children: ReactNode,
}


export default function Dropdown({ children }: Props) {
    return (
        <div className='relative inline-block'>
            <div className='absolute right-0 mt-2 w-56 origin-top-right bg-white'>
                <div className="py-2">
                    {children}
                </div>
            </div>
        </div>
    )
}
