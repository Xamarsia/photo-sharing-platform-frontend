"use client";

import { ReactNode, SetStateAction, useEffect, useState } from 'react';

import photo from '@/public/photo/photo.svg'
import photoHovered from '@/public/photo/photo-hovered.svg'

import styles from '@/app/styles/components/file.selector.module.css'
import textStyles from '@/app/styles/components/text.module.css'

import xMark from '@/public/x-mark/x-mark.svg';
import xMarkHovered from '@/public/x-mark/x-mark-hovered.svg';

import Span from '@/components/common/Span';
import Input from '@/components/common/Input';
import IconButton from '@/components/buttons/IconButton';


type Props = {
    local: any;
    rounded?: 'rounded-full';
    children?: ReactNode;
    onImageSelected?: (file: SetStateAction<File | undefined>) => void;
}


export default function FileSelector({ local, children, rounded, onImageSelected }: Props) {
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
        <div className={`${styles['file-selector-layout']} ${rounded}`}
            onDragEnter={handleDragEnter}
            onDrop={handleDrop}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
        >
            {children}
            <div className={`
            ${styles['file-selector']} ${rounded} 
                    ${dragActive ? 'bg-gray-200 bg-opacity-50' : ''}
                `}>

                {selectedImage &&
                    <div className={`absolute top-0 right-0`}>
                        <IconButton style={'transparent-button'} icon={xMark} hoveredIcon={xMarkHovered} onClick={handleCloseClick} />
                    </div>
                }
                <div className={`flex flex-col items-center justify-center  ${selectedImage ? 'invisible' : 'visible'}`}>
                    <IconButton size={'extra-extra-large'} rounded={'rounded'} icon={photo} hoveredIcon={photoHovered} hovered={dragActive} />
                    <div className='flex gap-1'>
                        <label>
                            <Span text={local.clickToUpload} style='upload-button' />
                            <Input accept="image/jpeg" type="file" draggable hidden onChange={imageChange} />
                        </label>
                        <p className={`${textStyles['secondary-info']}`}>{local.orDragAndDrop}</p>
                    </div>
                    <p className={`${textStyles['third-info']} `}>{local.fileFormatsForImageUploading}</p>
                </div>
            </div>
        </div>
    )
}
