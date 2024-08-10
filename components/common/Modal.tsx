import { ReactNode } from "react";

import Card from "@/components/common/Card";
import IconButton from "@/components/buttons/IconButton";

import xMark from '@/public/x-mark/x-mark.svg';
import xMarkHovered from '@/public/x-mark/x-mark-hovered.svg';

import styles from '@/app/styles/text/text.module.css';

type Props = {
    title: string,
    children: ReactNode,
    onClose: () => void,
}

export default function Modal({ title, children, onClose }: Props) {
    const handleCloseClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        onClose();
    };

    return (
        <div className='fixed top-0 left-0 size-full bg-gray-500 flex justify-center items-center'>
            <Card>
                <div className="flex justify-between">
                    <h1 className={`${styles['h1']}`}>{title}</h1>
                    <IconButton icon={xMark} hoveredIcon={xMarkHovered} onClick={handleCloseClick} />
                </div>
                {children}
            </Card>
        </div>
    );
};
