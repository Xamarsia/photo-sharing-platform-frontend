"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from 'next-intl';
import { useCallback, useState } from "react";

import Dropdown from "@/components/common/Dropdown";
import DropdownButton from "@/components/buttons/DropdownButton";
import TextIconButton from "@/components/buttons/TextIconButton";
import ProfileImage from "@/components/profile/image/ProfileImage";

import plus from '@/public/plus/plus-white.svg';
import { signOut } from "@/lib/firebase/auth";


type Props = {
    user: UserDTO,
}


export default function AuthHeaderMenu({ user }: Props) {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
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
        if (user) {
            router.push(`/${user.username}`);
        }
    }, [user]);

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
                <ProfileImage profileImageExist={user.isProfileImageExist} username={user.username} preview />
            </button>

            <Dropdown isVisible={showDropdown} onOutsideClicked={onOutsideClick}>
                <DropdownButton text={t('myProfile')} onClick={onMyProfileClick} />
                <DropdownButton text={t('editProfile')} onClick={onEditProfileClick} />
                <DropdownButton text={t('signOut')} onClick={signOut} />
            </Dropdown>
        </div>
    )
}
