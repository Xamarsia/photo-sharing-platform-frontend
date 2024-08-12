import blueExclamationCircle from '@/public/exclamation-circle/blue-exclamation-circle.svg';

import Image from 'next/image';

import styles from '@/app/styles/text/text.module.css';


type Props = {
    alertTitle: string,
    alertBody?: string,
}


export default function NotFound({ alertTitle, alertBody }: Props) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="rounded-full bg-blue-50 p-3">
                <Image src={blueExclamationCircle} alt="icon" />
            </div>
            <h1 className={`${styles['h1']}`}>{alertTitle}</h1>
            <span className={`${styles['secondary-info']}`}>{alertBody}</span>
        </div>
    );
};
