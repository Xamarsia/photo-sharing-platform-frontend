"use client";


import { useRouter } from "next/navigation";

import FooterMenu from '@/components/common/FooterMenu';

import styles from '@/app/styles/text/text.module.css';

type Props = {
    local: any,
}


export default function Footer({ local }: Props) {
    const router = useRouter();

    return (
        <footer className="bg-white w-full z-5 border-t border-gray-200 flex-shrink-0">
            <div className="flex flex-col items-center justify-between py-2 sm:py-4 sm:px-4 md:flex-row md:px-8 md:py-4 gap-2 md:gap-4">
                <span className={`${styles['secondary-info']}`}>
                    {local.copyrightText}
                </span>
                <FooterMenu local={local} />
            </div>
        </footer>
    )
}
