"use client";

import { useRouter } from "next/navigation";

import Logo from "@/components/common/Logo";
import SearchBar from "@/components/common/SearchBar";
import TextButton from "@/components/buttons/TextButton";
import DropdownButton from "@/components/buttons/DropdownButton";
import TextIconButton from "@/components/buttons/TextIconButton";
import ProfilePreviewDropdown from "@/components/profile/ProfilePreviewDropdown";

import plus from '@/public/plus/plus-white.svg';
import { signOut } from "@/lib/firebase/auth";


type Props = {
    local: any,
    user?: UserDTO | undefined,
}


export default function Header({ local, user }: Props) {
    const router = useRouter();

    return (
        <header className="flex-shrink-0 z-10 fixed top-0 bg-white w-full border-y border-gray-100 h-20">
            <div className="flex items-center justify-between h-full px-4 md:px-8 gap-2 md:gap-4">
                <Logo />
                <div className={`grow max-w-[580px] ${user ? "block" : "hidden"}`}>
                    <SearchBar local={local} />
                </div>

                <div className="flex flex-row items-center gap-2 md:gap-4">
                    {user
                        ? <>
                            <div className='md:block hidden h-full'>
                                <TextIconButton text={local.createPost} icon={plus} onClick={() => { router.push('/post/create') }} />
                            </div>
                            <div className="md:block">
                                <ProfilePreviewDropdown user={user}>
                                    <DropdownButton text='My profile' />
                                    <DropdownButton text={local.signOut} onClick={signOut} />
                                </ProfilePreviewDropdown>
                            </div>
                        </>
                        : <>
                            <TextButton type={'button'} text={local.signIn} onClick={e => { router.push('/auth/signin') }} />
                            <TextButton type={'button'} text={local.signUp} onClick={e => { router.push('/auth/signup') }} />
                        </>
                    }
                </div>
            </div>
        </header>
    )
}