"use client";


import Text from '@/components/common/Text';
import Input from '@/components/common/Input';

import styles from '@/app/styles/components/link.module.css';
import textStyles from '@/app/styles/text/text.module.css';
import linkTextStyle from '@/app/styles/text/link.text.module.css';

import React from 'react';


type Props = {
    local: any,
    size: 'small' | 'base' | 'large',
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}


export default function FileInput({ local, size, onChange }: Props) {

    return (
        <div className='flex gap-1'>
            <label>
                <span
                    className={`
                                ${styles['link']} 
                                ${textStyles[size]}
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
