import Link from "next/link";

import logo from '@/public/logo/logo.svg';

import textStyles from '@/app/styles/text/text.module.css';

import IconButton from "@/components/buttons/IconButton";

export default function Logo() {
    return (
        <Link href="/" className="flex flex-row gap-2 md:gap-4">
            <IconButton size={'large'} style='no-background' icon={logo} hoveredIcon={logo} />
            <div className="hidden md:block m-auto">
                <h2 className={`${textStyles["logo"]}`}>SPSP</h2>
            </div>
        </Link>
    )
}