"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from 'next-intl';

import TextButton from "@/components/buttons/TextButton";
import DropdownButton from "@/components/buttons/DropdownButton";
import TextIconButton from "@/components/buttons/TextIconButton";
import Dropdown from "@/components/common/Dropdown";

import plus from '@/public/plus/plus-white.svg';
import { signOut } from "@/lib/firebase/auth";
import ProfileImage from "@/components/profile/image/ProfileImage";
import { useState } from "react";


type Props = {
    user?: UserDTO | undefined,
}


export default function HeaderMenu({ user }: Props) {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const t = useTranslations('form');
    const router = useRouter();

    return (
        <div className="flex flex-row items-center gap-2 md:gap-4">
            {user
                ? <>
                    <div className='md:block hidden h-full'>
                        <TextIconButton text={t('createPost')} icon={plus} onClick={() => { router.push('/post/create') }} />
                    </div>

                    <button onClick={e => { setShowDropdown(!showDropdown) }}
                        className={showDropdown ? "pointer-events-none" : ""}
                    >
                        <ProfileImage profileImageExist={user.isProfileImageExist} username={user.username} preview />
                    </button>

                    <Dropdown isVisible={showDropdown} onOutsideClicked={() => setShowDropdown(false)}>
                        <DropdownButton text={t('myProfile')} onClick={() => { router.push(`/${user.username}`) }} />
                        <DropdownButton text={t('editProfile')} onClick={() => { router.push('/profile/edit/info') }} />
                        <DropdownButton text={t('signOut')} onClick={signOut} />
                    </Dropdown>
                </>
                : <>
                    <TextButton text={t('signIn')} onClick={e => { router.push('/auth/signin') }} />
                    <TextButton text={t('signUp')} onClick={e => { router.push('/auth/signup') }} />
                </>
            }
        </div>
    )
}
