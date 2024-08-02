"use client";


import { useRouter } from "next/navigation";

import Link from "@/components/common/Link";


type Props = {
    local: any,
}


export default function FooterMenu({ local }: Props) {
    const router = useRouter();

    return (
        <ul className="flex flex-wrap items-center gap-2 sm:gap-4 md:gap-8">
            <li>
                <Link text={local.about} />
            </li>
            <li>
                <Link text={local.privacyPolicy} />
            </li>
            <li>
                <Link text={local.contact} />
            </li>
        </ul>
    )
}
