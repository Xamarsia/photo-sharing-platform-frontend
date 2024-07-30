import { ReactNode } from "react";

import Card from "@/components/common/Card";
import Title from "@/components/common/Title";

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
        <div className='fixed top-0 left-0 w-full h-full bg-gray-500 flex justify-center items-center bg-opacity-75'>
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
