import { ChangeEvent } from "react";

import Image from 'next/image';

import textStyles from '@/app/styles/text/text.module.css';
import styles from '@/app/styles/components/search.input.module.css';

import magnifyingGlass from '@/public/magnifying-glass/magnifying-glass.svg';


type SearchInputProps = {
    name?: string,
    value?: string | undefined,
    size?: 'small' | 'base' | 'large',
    onChange: (e: ChangeEvent<HTMLInputElement>) => void | undefined,
}


export default function SearchInputField({ name, value, size = 'small', onChange }: SearchInputProps) {
    return (

        <div className={`${styles['main-container']}`}>
            <div className={`${styles['icon-layout']}`}>
                <div className={`${styles['icon-size']}`}>
                    <Image src={magnifyingGlass} alt="glass-icon" />
                </div>
            </div>

            <input type="text" id="simple-search"
                name={name}
                value={value}
                onChange={onChange}
                placeholder="Search users..." required
                className={`${styles['search-input-field']} 
                ${textStyles['base-text']}
                ${textStyles[size]}
                `}
            />
        </div>
    )
}
