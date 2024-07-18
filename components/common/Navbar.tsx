"use client";


import { useRouter } from "next/navigation";

import plus from '@/public/plus/plus-white.svg';

import Logo from "@/components/common/Logo";
import SearchBar from "@/components/common/SearchBar";
import TextButton from "@/components/buttons/TextButton";
import TextIconButton from "@/components/buttons/TextIconButton";
import ProfilePreviewDropdown from "@/components/profile/ProfilePreviewDropdown";

type Props = {
    local: any;
    user?: UserDTO | UserPreviewDTO | undefined;
}


export default function Navbar({ local, user }: Props) {
    const router = useRouter();

    return (
        <nav className="bg-white fixed w-full top-0 start-0 border-b border-gray-200">
            <div className="flex items-center justify-between py-4 px-4 md:px-8 gap-2 md:gap-4">
                <Logo />
                <div className={`grow max-w-[580px] ${user ? "block" : "hidden"}`}>
                    <SearchBar local={local} />
                </div>

                <div className="flex flex-row gap-2 md:gap-4">
                    {user
                        ? <>
                            <div className='md:block hidden m-auto'>
                                <TextIconButton type={'button'} fill="content" text={'Create Post'} style={'primary-button'} icon={plus} iconSide='left' size="small" rounded="rounded-lg" />
                            </div>
                            <ProfilePreviewDropdown user={user} />
                        </>
                        : <>
                            <TextButton type={'button'} text={local.signIn} onClick={e => { router.push('/auth/signin') }} style={'primary-button'} size="small" rounded="rounded-lg" />
                            <TextButton type={'button'} text={local.signUp} onClick={e => { router.push('/auth/signup') }} style={'primary-button'} size="small" rounded="rounded-lg" />
                        </>
                    }
                </div>
            </div>
        </nav>
    )
}