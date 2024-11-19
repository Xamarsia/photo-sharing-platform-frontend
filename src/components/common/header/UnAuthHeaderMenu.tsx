"use client";


import { useRouter } from "next/navigation";
import { useTranslations } from 'next-intl';
import { useCallback } from "react";

import TextButton from "@/components/buttons/TextButton";

export default function UnAuthHeaderMenu() {
    const t = useTranslations('form');
    const router = useRouter();

    const onSignInClick = useCallback(() => {
        router.push('/auth/signin');
    }, []);

    const onSignUpClick = useCallback(() => {
        router.push('/auth/signup');
    }, []);

    return (
        <div className="flex flex-row items-center gap-2 md:gap-4">
            <TextButton text={t('signIn')} onClick={onSignInClick} />
            <TextButton text={t('signUp')} onClick={onSignUpClick} />
        </div>
    )
}
