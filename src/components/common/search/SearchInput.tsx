"use client";

import { ChangeEvent } from "react";

import Image from 'next/image';

import textStyles from '@/styles/text/text.module.css';
import magnifyingGlass from '@/public/magnifying-glass/magnifying-glass.svg';


type SearchInputProps = {
    local: any,
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void | undefined,
}


export default function SearchInput({ local, value, onChange }: SearchInputProps) {
    return (
        <div className='relative w-full'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3'>
                <Image src={magnifyingGlass} alt="glass-icon" className="size-4" />
            </div>
            <input type="text" id="simple-search"
                name={'query'}
                value={value}
                onChange={onChange}
                placeholder={local.searchUsers}
                required
                className={`bg-gray-50 focus:bg-white border border-gray-100 focus:border-blue-500 appearance-none outline-none w-full ps-10 rounded-xl h-10
                ${textStyles['base-text']}`}
            />
        </div>
    )
}