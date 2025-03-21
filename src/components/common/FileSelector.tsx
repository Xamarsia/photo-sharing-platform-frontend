"use client";

import { ReactNode, SetStateAction, useCallback, useState } from 'react';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

import photo from '@/public/photo/photo.svg';
import xMark from '@/public/x-mark/x-mark.svg';
import xMarkHovered from '@/public/x-mark/x-mark-hovered.svg';

import styles from '@/styles/text/text.module.css';

import IconButton from '@/components/buttons/IconButton';


type Props = {
    rounded?: boolean,
    children?: ReactNode,
    defaultImageExist?: boolean,
    onDefaultImageRemoved?: () => void,
    onImageSelected: (file: SetStateAction<File | undefined>) => void,
}


export default function FileSelector({ rounded, children, defaultImageExist, onDefaultImageRemoved, onImageSelected }: Props) {
    const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);
    const [dragActive, setDragActive] = useState<boolean>(false);
    const t = useTranslations('FileSelector');

    const imageChangeHendler = useCallback((file: SetStateAction<File | undefined>): void => {
        setSelectedImage(file);
        onImageSelected(file);
    }, [selectedImage, onImageSelected]);

    const onDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        if (!defaultImageExist) {
            setDragActive(false);
        }
    }, [defaultImageExist, dragActive]);


    const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        if (!defaultImageExist) {
            setDragActive(true);
        }
    }, [defaultImageExist, dragActive]);


    const onDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        if (!defaultImageExist) {
            setDragActive(true);
        }
    }, [defaultImageExist, dragActive]);

    const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();

        if (defaultImageExist) {
            return;
        }

        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            imageChangeHendler(file);
        }
    }, [defaultImageExist, dragActive]);


    const onImageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
        if (!e.target.files || e.target.files.length === 0) {
            return;
        }

        const file = e.target.files[0];
        imageChangeHendler(file);
    }, []);


    const onCloseClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (defaultImageExist && onDefaultImageRemoved) {
            onDefaultImageRemoved();
        }
        imageChangeHendler(undefined);
    }, [defaultImageExist, onDefaultImageRemoved]);


    return (
        <div className={`relative w-full aspect-square hover:bg-gray-100 bg-gray-50 border border-gray-200 border-dashed
            ${rounded ? 'rounded-full' : 'rounded-lg'} `}
            onDragEnter={onDragEnter}
            onDrop={onDrop}
            onDragLeave={onDragLeave}
            onDragOver={onDragOver}
        >
            {children}
            <div className={`
                    absolute bottom-0 left-0 w-full aspect-square flex flex-col items-center justify-center
                    ${rounded ? 'rounded-full' : 'rounded-lg'}
                    ${dragActive ? 'bg-gray-600/25' : ''}
                `}>

                {(selectedImage || defaultImageExist) &&
                    <div className={`absolute top-0 right-0`}>
                        <IconButton icon={xMark} hoveredIcon={xMarkHovered} onClick={onCloseClick} />
                    </div>
                }
                <div className={`flex flex-col items-center justify-center ${(selectedImage || defaultImageExist) ? 'invisible' : 'visible'}`}>
                    <Image src={photo} alt="photo" className={`size-8 inline-flex justify-center items-center aspect-square`} />

                    <div className='flex gap-1'>
                        <label>
                            <span className={`${styles['primary-link']}`}>{t('clickToUpload')}</span>
                            <input accept="image/jpeg" type="file" draggable hidden onChange={onImageChange} />
                        </label>
                        <span className={`${styles['secondary-info']}`}>{t('orDragAndDrop')}</span>
                    </div>

                    <span className={`${styles['secondary-info']}`}>{t('fileFormatsForImageUploading')}</span>
                </div>
            </div>
        </div>
    )
}
