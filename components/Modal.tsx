import { ReactNode } from "react";

import Card from "@/components/Card";
import IconButton from "@/components/IconButton";

import xMark from '@/public/x-mark/x-mark.svg';
import xMarkHovered from '@/public/x-mark/x-mark-hovered.svg';

import textStyles from '@/app/styles/components/text.module.css'
import styles from '@/app/styles/components/modal.module.css'


type Props = {
    title: string,
    children: ReactNode,
    onClose: () => void
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
                    <h2 className={`${textStyles["title"]}`}>{title}</h2>
                    <IconButton style={'transparent-button'} icon={xMark} hoveredIcon={xMarkHovered} onClick={handleCloseClick} />
                </div>
                {children}
            </Card>
        </div>
    );
};
