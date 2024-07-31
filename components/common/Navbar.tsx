"use client";

import { useRouter } from "next/navigation";
import { getUser } from "@/lib/profile-controller";

import Logo from "@/components/common/Logo";
import SearchBar from "@/components/common/SearchBar";
import TextButton from "@/components/buttons/TextButton";
import DropdownButton from "@/components/buttons/DropdownButton";
import CreatePostButton from "@/components/buttons/CreatePostButton";
import ProfilePreviewDropdown from "@/components/profile/ProfilePreviewDropdown";


type Props = {
    local: any,
}


export default function Navbar({ local }: Props) {
    const router = useRouter();
    const user = getUser();

    return (
        <nav className="bg-white w-full border-y border-gray-200 h-[84px]">
            <div className="flex items-center justify-between py-4 px-4 md:px-8 gap-2 md:gap-4">
                <Logo />
                <div className={`grow max-w-[580px] ${user ? "block" : "hidden"}`}>
                    <SearchBar local={local} />
                </div>

                <div className="flex flex-row gap-2 md:gap-4">
                    {user
                        ? <>
                            <div className='md:block hidden m-auto'>
                                <CreatePostButton local={local} style="rectungle" />
                            </div>
                            <div className="md:block">
                                <ProfilePreviewDropdown user={user}>
                                    <DropdownButton style='secondary' size='small' text='My profile' />
                                </ProfilePreviewDropdown>
                            </div>
                        </>
                        : <>
                            <TextButton type={'button'} text={local.signIn} onClick={e => { router.push('/auth/signin') }} style={'primary'} size="small" rounded="rounded-lg" />
                            <TextButton type={'button'} text={local.signUp} onClick={e => { router.push('/auth/signup') }} style={'primary'} size="small" rounded="rounded-lg" />
                        </>
                    }
                </div>
            </div>
        </nav>
    )
}