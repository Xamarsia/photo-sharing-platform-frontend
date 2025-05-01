"use client";

import { useTranslations } from 'next-intl';
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import Dropdown from "@/components/common/Dropdown";
import DropdownButton from "@/components/buttons/DropdownButton";
import TextIconButton from "@/components/buttons/TextIconButton";
import { GetCurrentUserOrRedirect } from "@/components/common/guards/Providers";
import ProfileImage from "@/components/profile/image/ProfileImage";
import { signOut } from "@/lib/firebase/auth";
import plus from '@/public/plus/plus-white.svg';


export default function AuthHeaderMenu() {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const currentUser: UserDTO = GetCurrentUserOrRedirect();
    const t = useTranslations('form');
    const router = useRouter();

    const onCreatePostClick = useCallback(() => {
        router.push('/post/create');
    }, []);

    const onEditProfileClick = useCallback(() => {
        setShowDropdown(false);
        router.push('/profile/edit/info');
    }, []);

    const onMyProfileClick = useCallback(() => {
        setShowDropdown(false);
        if (currentUser) {
            router.push(`/${currentUser.username}`);
        }
    }, [currentUser]);

    const onOutsideClick = useCallback(() => {
        setShowDropdown(false);
    }, [showDropdown]);

    const onShowDropdown = useCallback(() => {
        setShowDropdown(!showDropdown);
    }, [showDropdown]);

    return (
        <div className="flex flex-row items-center gap-2 md:gap-4">
            <div className='md:block hidden h-full'>
                <TextIconButton text={t('createPost')} icon={plus} onClick={onCreatePostClick} />
            </div>

            <button onClick={onShowDropdown} className={showDropdown ? "pointer-events-none" : ""}>
                <ProfileImage profileImageExist={currentUser.isProfileImageExist} username={currentUser.username} preview />
            </button>

            <Dropdown isVisible={showDropdown} onOutsideClicked={onOutsideClick}>
                <DropdownButton text={t('myProfile')} onClick={onMyProfileClick} />
                <DropdownButton text={t('editProfile')} onClick={onEditProfileClick} />
                <DropdownButton text={t('signOut')} onClick={signOut} />
            </Dropdown>
        </div>
    )
}
