"use client";

import Logo from "@/components/common/Logo";
import TextButton from "@/components/buttons/TextButton";

import { useRouter } from "next/navigation";
import { useTranslations } from 'next-intl';
import { useCallback } from "react";


export default function UnAuthHeader() {
    const t = useTranslations('form');
    const router = useRouter();

    const onSignInClick = useCallback(() => {
        router.push('/auth/signin');
    }, []);

    const onSignUpClick = useCallback(() => {
        router.push('/auth/signup');
    }, []);

    return (
        <header
            className="fixed top-0 flex-shrink-0 flex items-center justify-between w-full 
            border-y bg-white border-gray-100 h-20 px-4 md:px-8 gap-2 md:gap-4 z-10"
        >
            <Logo />
            <div className="flex flex-row items-center gap-2 md:gap-4">
                <TextButton text={t('signIn')} onClick={onSignInClick} />
                <TextButton text={t('signUp')} onClick={onSignUpClick} />
            </div>
        </header>
    )
}
