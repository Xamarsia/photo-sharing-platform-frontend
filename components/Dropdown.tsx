import styles from '@/app/styles/components/dropdown.module.css';

import { ReactNode } from 'react';


type Props = {
    children: ReactNode,
}


export default function Dropdown({ children }: Props) {
    return (
        <div className={`${styles["dropdown-layout"]}`}>
            <div className={`${styles["dropdown"]}`}>
                {children}
            </div>
        </div>
    )
}
