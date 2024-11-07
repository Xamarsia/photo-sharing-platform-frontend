"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from 'next-intl';

import TextButton from "@/components/buttons/TextButton";
import DropdownButton from "@/components/buttons/DropdownButton";
import TextIconButton from "@/components/buttons/TextIconButton";
import ProfilePreviewDropdown from "@/components/profile/ProfilePreviewDropdown";

import plus from '@/public/plus/plus-white.svg';
import { signOut } from "@/lib/firebase/auth";


type Props = {
    user?: UserDTO | undefined,
}


export default function HeaderMenu({ user }: Props) {
    const t = useTranslations('form');
    const router = useRouter();

    return (
        <div className="flex flex-row items-center gap-2 md:gap-4">
            {user
                ? <>
                    <div className='md:block hidden h-full'>
                        <TextIconButton text={t('createPost')} icon={plus} onClick={() => { router.push('/post/create') }}

                        />
                    </div>
                    <div className="md:block">
                        <ProfilePreviewDropdown user={user}>
                            <DropdownButton text={t('myProfile')} onClick={() => { router.push(`/${user.username}`) }} />
                            <DropdownButton text={t('editProfile')} onClick={() => { router.push('/profile/edit/info') }} />
                            <DropdownButton text={t('signOut')} onClick={signOut} />
                        </ProfilePreviewDropdown>
                    </div>
                </>
                : <>
                    <TextButton text={t('signIn')} onClick={e => { router.push('/auth/signin') }} />
                    <TextButton text={t('signUp')} onClick={e => { router.push('/auth/signup') }} />
                </>
            }
        </div>
    )
}
