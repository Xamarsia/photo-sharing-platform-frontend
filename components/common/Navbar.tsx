"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getUser } from "@/lib/profile-controller";

import Logo from "@/components/common/Logo";
import Sidebar from "@/components/common/Sidebar";
import SearchBar from "@/components/common/SearchBar";
import TextButton from "@/components/buttons/TextButton";
import IconButton from "@/components/buttons/IconButton";
import DropdownButton from "@/components/buttons/DropdownButton";
import CreatePostButton from "@/components/buttons/CreatePostButton";
import ProfilePreviewDropdown from "@/components/profile/ProfilePreviewDropdown";


import bars3 from '@/public/bars-3/bars-3.svg';
import bars3Hovered from '@/public/bars-3/bars-3-hovered.svg';

import xMark from '@/public/x-mark/x-mark.svg';
import xMarkHovered from '@/public/x-mark/x-mark-hovered.svg';


type Props = {
    local: any,
}


export default function Navbar({ local }: Props) {
    const router = useRouter();
    const user = getUser();

    const [showDropdown, setShowDropdown] = useState(false);

    const handleClick = () => {
        setShowDropdown(!showDropdown);
    }

    return (
        <nav className="bg-white w-full border-y border-gray-200">
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
                            <div className="md:block hidden m-auto">
                                <ProfilePreviewDropdown user={user}>
                                    <DropdownButton style='secondary' size='small' text='My profile' />
                                </ProfilePreviewDropdown>
                            </div>
                            <div className="block md:hidden m-auto">
                                {showDropdown
                                    ? <IconButton size='base' style='no-background' icon={xMark} hoveredIcon={xMarkHovered} onClick={handleClick} />
                                    : <IconButton style='no-background' size='base' icon={bars3} hoveredIcon={bars3Hovered} onClick={handleClick} />
                                }
                            </div>
                        </>
                        : <>
                            <TextButton type={'button'} text={local.signIn} onClick={e => { router.push('/auth/signin') }} style={'primary'} size="small" rounded="rounded-lg" />
                            <TextButton type={'button'} text={local.signUp} onClick={e => { router.push('/auth/signup') }} style={'primary'} size="small" rounded="rounded-lg" />
                        </>
                    }
                </div>
            </div>

            <div className={`${showDropdown ? 'w-full' : 'hidden'} border-y border-gray-200 flex flex-col h-screen`}>
                <div className="flex-grow ">
                    <Sidebar local={local} size="base" onClick={handleClick} />
                </div>
            </div>
        </nav>
    )
}