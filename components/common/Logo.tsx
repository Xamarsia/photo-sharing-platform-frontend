import 'server-only';

import Link from "next/link";
import Image from 'next/image';

import logo from '@/public/logo/logo.svg';

export default function Logo() {
    return (
        <Link href="/" className="flex flex-row gap-2 md:gap-4">
            <Image src={logo} alt="icon" className={`size-8`} />
            <div className="hidden md:block">
                <h2 className='self-center text-2xl font-semibold whitespace-nowrap'>SPSP</h2>
            </div>
        </Link>
    )
}