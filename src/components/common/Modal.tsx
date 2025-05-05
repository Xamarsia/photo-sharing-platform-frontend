"use client";

import styles from '@/styles/text/text.module.css';

import { ReactNode, useEffect, useRef } from "react";

import IconButton from "@/components/buttons/IconButton";

import xMark from '@/public/x-mark/x-mark.svg';
import xMarkHovered from '@/public/x-mark/x-mark-hovered.svg';


type Props = {
    title: string,
    children: ReactNode,
    opened?: boolean,
    onCloseClicked: () => void,
}

export default function Modal({ title, children, opened, onCloseClicked }: Props) {
    const modal = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onClickOutside = (e: MouseEvent) => {
            if (opened && !modal.current?.contains(e.target as Node)) {
                onCloseClicked();
            }
        }
        if (opened) {
            document.addEventListener('mousedown', onClickOutside);
        } else {
            document.removeEventListener('mousedown', onClickOutside);
        }
    }, [opened]);

    return (
        <div className={`fixed top-0 left-0 z-50 size-full bg-gray-800/45 flex justify-center items-center
            ${opened ? 'no-doc-scroll' : 'hidden'}`}>
            <div ref={modal} className={"bg-white w-full max-w-xl m-4 p-4 sm:p-8 rounded-2xl border border-gray-100"}>
                <div className="flex justify-between pb-8">
                    <h1 className={`${styles['h1']}`}>{title}</h1>
                    <IconButton icon={xMark} hoveredIcon={xMarkHovered} onClick={onCloseClicked} />
                </div>
                {children}
            </div>
        </div>
    );
};
