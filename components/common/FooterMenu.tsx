"use client";


import { useRouter } from "next/navigation";

import TextButton from "@/components/buttons/TextButton";
import Link from "@/components/common/Link";


type Props = {
    local: any,
}


export default function FooterMenu({ local }: Props) {
    const router = useRouter();

    return (
        <ul className="flex flex-wrap items-center gap-2 sm:gap-4 md:gap-8">
            <li>
                <Link style="secondary" text={local.about} />
            </li>
            <li>
                <Link style="secondary" text={local.privacyPolicy} />
            </li>
            <li>
                <Link style="secondary" text={local.contact} />
            </li>
        </ul>
    )
}
