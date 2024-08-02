import { ChangeEvent } from "react";

import Image from 'next/image';

import textStyles from '@/app/styles/text/text.module.css';
import magnifyingGlass from '@/public/magnifying-glass/magnifying-glass.svg';


type SearchInputProps = {
    name?: string,
    value?: string | undefined,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void | undefined,
}


export default function SearchInputField({ name, value, onChange }: SearchInputProps) {
    return (
        <div className='relative w-full'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <div className='w-4 h-4'>
                    <Image src={magnifyingGlass} alt="glass-icon" />
                </div>
            </div>

            <input type="text" id="simple-search"
                name={name}
                value={value}
                onChange={onChange}
                placeholder="Search users..." 
                required
                className={`bg-gray-50 border border-gray-300 focus:ring-blue-700 focus:border-blue-500 appearance-none outline-none w-full ps-10 p-2
                ${textStyles['base-text']}`}
            />
        </div>
    )
}
