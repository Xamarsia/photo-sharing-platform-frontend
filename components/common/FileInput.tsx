"use client";


import Text from '@/components/common/Text';
import Input from '@/components/common/Input';

import linkTextStyle from '@/app/styles/text/link.text.module.css';

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
                                inline-flex w-full justify-center sm:mt-0 sm:w-auto bg-transparent shadow-none border-none disabled:opacity-50 disabled:text-slate-500 disabled:no-underline
                                text-sm leading-5
                                ${linkTextStyle['primary']}
                                ${linkTextStyle['link']}
                            `}
                >{local.clickToUpload}</span>
                <Input accept="image/jpeg" type="file" draggable hidden onChange={onChange} />
            </label>
            <Text style='secondary-info' size='small' text={local.orDragAndDrop} />
        </div>
    )
}
