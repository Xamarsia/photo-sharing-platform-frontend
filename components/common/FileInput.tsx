"use client";

import Input from '@/components/common/Input';

import styles from '@/app/styles/text/text.module.css';

import React from 'react';


type Props = {
    local: any,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}


export default function FileInput({ local, onChange }: Props) {

    return (
        <div className='flex gap-1'>
            <label>
                <span
                    className={`
                                inline-flex w-full justify-center sm:mt-0 sm:w-auto bg-transparent border-none 
                                disabled:text-slate-500 disabled:no-underline
                                text-sm leading-5 underline text-blue-500 font-semibold hover:text-blue-700
                            `}
                >{local.clickToUpload}</span>
                <Input accept="image/jpeg" type="file" draggable hidden onChange={onChange} />
            </label>
            <span className={`${styles['secondary-info']}`}>{local.orDragAndDrop}</span>
        </div>
    )
}
