import { ReactNode } from "react";

import Card from "@/components/common/Card";
import Title from "@/components/common/Title";

import styles from '@/app/styles/components/modal.module.css';

import IconButton from "@/components/buttons/IconButton";

import xMark from '@/public/x-mark/x-mark.svg';
import xMarkHovered from '@/public/x-mark/x-mark-hovered.svg';


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
        <div className={`${styles["modal"]}`}>
            <Card>
                <div className="flex justify-between">
                    <Title size="small" text={title} />
                    <IconButton size='small' style={'secondary'} icon={xMark} hoveredIcon={xMarkHovered} onClick={handleCloseClick} />
                </div>
                {children}
            </Card>
        </div>
    );
};
