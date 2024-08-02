"use client";

import { useRouter } from "next/navigation";
import { getUser } from "@/lib/profile-controller";

import Logo from "@/components/common/Logo";
import SearchBar from "@/components/common/SearchBar";
import TextButton from "@/components/buttons/TextButton";
import DropdownButton from "@/components/buttons/DropdownButton";
import TextIconButton from "@/components/buttons/TextIconButton";
import ProfilePreviewDropdown from "@/components/profile/ProfilePreviewDropdown";

import plus from '@/public/plus/plus-white.svg';


type Props = {
    local: any,
}


export default function Header({ local }: Props) {
    const router = useRouter();
    const user = getUser();

    return (

        <header className="flex-shrink-0 z-10 sticky top-0 bg-white w-full border-y border-gray-200 h-20">
            <div className="flex items-center justify-between py-4 px-4 md:px-8 gap-2 md:gap-4">
                <Logo />
                <div className={`grow max-w-[580px] ${user ? "block" : "hidden"}`}>
                    <SearchBar local={local} />
                </div>

                <div className="flex flex-row gap-2 md:gap-4">
                    {user
                        ? <>
                            <div className='md:block hidden m-auto'>
                                <TextIconButton fill="content" text={local.createPost} icon={plus} onClick={() => { router.push('/post/create') }} />
                            </div>
                            <div className="md:block">
                                <ProfilePreviewDropdown user={user}>
                                    <DropdownButton text='My profile' />
                                </ProfilePreviewDropdown>
                            </div>
                        </>
                        : <>
                            <TextButton type={'button'} text={local.signIn} onClick={e => { router.push('/auth/signin') }} style={'primary'} />
                            <TextButton type={'button'} text={local.signUp} onClick={e => { router.push('/auth/signup') }} style={'primary'} />
                        </>
                    }
                </div>
            </div>
        </header>
    )
}