"use client";

import { ReactNode, useEffect, useRef } from "react";

import Card from "@/components/common/Card";
import IconButton from "@/components/buttons/IconButton";

import xMark from '@/public/x-mark/x-mark.svg';
import xMarkHovered from '@/public/x-mark/x-mark-hovered.svg';

import styles from '@/app/styles/text/text.module.css';

type Props = {
    title: string,
    children: ReactNode,
    opened?: boolean,
    onCloseClicked: () => void,
}

export default function Modal({ title, children, opened, onCloseClicked }: Props) {

    const modal = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (opened && !modal.current?.contains(event.target as Node)) {
                onCloseClicked();
            }
        }
        if (opened) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [opened])

    return (
        <div className={`${opened ? '' : 'hidden'} fixed top-0 left-0 z-50 size-full bg-gray-800/45 flex justify-center items-center no-doc-scroll`}>
            <div ref={modal}>
                <Card>
                    <div className="flex justify-between">
                        <h1 className={`${styles['h1']}`}>{title}</h1>
                        <IconButton icon={xMark} hoveredIcon={xMarkHovered} onClick={onCloseClicked} />
                    </div>
                    {children}
                </Card>
            </div>
        </div>
    );
};
