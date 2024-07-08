import React, { ReactNode } from "react";

import styles from '@/app/styles/components/card.module.css'


type CardProps = {
    children: ReactNode,
    size?: 'base' | 'large',
}


export default function Card({ children, size = 'base' }: CardProps) {
    return (
        <div className={`
                ${styles["card"]}
                ${styles[size]}
            `}>
            {children}
        </div>
    )
}
