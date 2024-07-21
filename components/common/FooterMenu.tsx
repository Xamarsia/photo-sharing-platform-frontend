"use client";


import { useRouter } from "next/navigation";

import TextButton from "@/components/buttons/TextButton";


type Props = {
    local: any,
}


export default function FooterMenu({ local }: Props) {
    const router = useRouter();

    return (
        <ul className="flex flex-wrap items-center gap-2 sm:gap-4 md:gap-8">
            <li>
                <TextButton style="gray-transparent-button" text={local.about} fill="parent" size="small" padding={false} />
            </li>
            <li>
                <TextButton style="gray-transparent-button" text={local.privacyPolicy} fill="parent" size="small" padding={false} />
            </li>
            <li>
                <TextButton style="gray-transparent-button" text={local.contact} fill="parent" size="small" padding={false} />
            </li>
        </ul>
    )
}
