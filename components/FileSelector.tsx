"use client";

import { SetStateAction, useEffect, useState } from 'react';

import photo from '@/public/photo/photo.svg'
import photoHovered from '@/public/photo/photo-hovered.svg'

import styles from '@/app/styles/components/file.selector.module.css'
import textStyles from '@/app/styles/components/text.module.css'

import Span from '@/components/Span';
import Input from '@/components/Input';
import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';


type Props = {
    local: any;
    removable?: boolean;
    textOnly?: boolean;
    fill?: 'content' | 'parent';
    onImageSelected?: (file: SetStateAction<File | undefined>) => void;
}


export default function FileSelector({ local, removable, textOnly, fill = 'content', onImageSelected }: Props) {
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

    const removeImage = (): void => {
        setSelectedImage(undefined);
    };


    return (
        <>
            {(!selectedImage && !textOnly) &&
                <div className={`
                        ${dragActive ? "bg-gray-100" : "bg-gray-50"} 
                        ${fill == 'parent' ? 'w-full h-full' : 'w-[416px] h-[192px]'}
                        ${styles['file-selector']}
                    `}
                    onDragEnter={handleDragEnter}
                    onDrop={handleDrop}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                >
                    <IconButton size={'extra-extra-large'} rounded={'rounded'} icon={photo} hoveredIcon={photoHovered} hovered={dragActive} />
                    <div className='flex gap-1'>
                        <label>
                            <Span text={local.clickToUpload} style='upload-button' />
                            <Input accept="image/jpeg" type="file" draggable hidden onChange={imageChange} />
                        </label>
                        <p className={`${textStyles['secondary-info']}`}>{local.orDragAndDrop}</p>
                    </div>
                    <p className={`${textStyles['third-info']}`}>{local.fileFormatsForImageUploading}</p>
                </div>
            }

            {(selectedImage || textOnly) &&
                <div className={`flex justify-evenly items-center mt-1`}>
                    <label>
                        <Span text={local.selectImage} style='upload-button' />
                        <Input accept="image/jpeg" type="file" draggable hidden onChange={imageChange} />
                    </label>
                    {(removable && selectedImage) && <Button type='button' onClick={removeImage} style='delete-transparent-button' text={local.removeImage} />}
                </div>
            }
        </>
    )
}
