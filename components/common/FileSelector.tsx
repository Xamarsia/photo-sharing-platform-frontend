"use client";

import { ReactNode, SetStateAction, useEffect, useState } from 'react';

import Image from 'next/image';
import React from 'react';

import photo from '@/public/photo/photo.svg';
import xMark from '@/public/x-mark/x-mark.svg';
import xMarkHovered from '@/public/x-mark/x-mark-hovered.svg';

import styles from '@/app/styles/text/text.module.css';

import Input from '@/components/common/Input';
import IconButton from '@/components/buttons/IconButton';


type Props = {
    local: any,
    rounded?: boolean,
    children?: ReactNode,
    onImageSelected?: (file: SetStateAction<File | undefined>) => void,
}


export default function FileSelector({ local, rounded, children, onImageSelected }: Props) {
    const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);
    const [dragActive, setDragActive] = useState<boolean>(false);

    useEffect(() => {
        if (onImageSelected) onImageSelected(selectedImage);
    }, [onImageSelected, selectedImage]);

    function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        setDragActive(false);
    }

    function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        setDragActive(true);
    }

    function handleDragEnter(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        setDragActive(true);
    }

    function handleDrop(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            setSelectedImage(file);
        }
    }

    const imageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (!event.target.files || event.target.files.length === 0) {
            return;
        }

        const file = event.target.files[0];
        setSelectedImage(file);
    };

    const handleCloseClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setSelectedImage(undefined);
    };

    return (
        <div className={`relative w-full aspect-square hover:bg-gray-100 bg-gray-50 border border-gray-200 border-dashed
            ${rounded ? 'rounded-full' : 'rounded-lg'} `}
            onDragEnter={handleDragEnter}
            onDrop={handleDrop}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
        >
            {children}
            <div className={`
                    absolute bottom-0 left-0 w-full aspect-square flex flex-col items-center justify-center
                    ${rounded ? 'rounded-full' : 'rounded-lg'}
                    ${dragActive ? 'bg-gray-600/25' : ''}
                `}>

                {selectedImage &&
                    <div className={`absolute top-0 right-0`}>
                        <IconButton icon={xMark} hoveredIcon={xMarkHovered} onClick={handleCloseClick} />
                    </div>
                }
                <div className={`flex flex-col items-center justify-center  ${selectedImage ? 'invisible' : 'visible'}`}>
                    <Image src={photo} alt="photo" className={`size-8 inline-flex justify-center items-center aspect-square`} />

                    <div className='flex gap-1'>
                        <label>
                            <span className={`${styles['primary-link']}`}>{local.clickToUpload}</span>
                            <Input accept="image/jpeg" type="file" draggable hidden onChange={imageChange} />
                        </label>
                        <span className={`${styles['secondary-info']}`}>{local.orDragAndDrop}</span>
                    </div>

                    <span className={`${styles['secondary-info']}`}>{local.fileFormatsForImageUploading}</span>
                </div>
            </div>
        </div>
    )
}
