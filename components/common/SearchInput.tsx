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
                <Image src={magnifyingGlass} alt="glass-icon" className="size-4" />
            </div>
            <input type="text" id="simple-search"
                name={name}
                value={value}
                onChange={onChange}
                placeholder="Search users..."
                required
                className={`bg-gray-50 border border-gray-100 focus:ring-blue-700 focus:border-blue-500 appearance-none outline-none w-full ps-10 rounded-xl h-10
                ${textStyles['base-text']}`}
            />
        </div>
    )
}