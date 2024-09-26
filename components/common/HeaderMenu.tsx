"use client";

import { useRouter } from "next/navigation";

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


export default async function HeaderMenu({ local, user }: Props) {
    const router = useRouter();

    return (
        <div className="flex flex-row items-center gap-2 md:gap-4">
            {user
                ? <>
                    <div className='md:block hidden h-full'>
                        <TextIconButton text={local.createPost} icon={plus} onClick={() => { router.push('/post/create') }}

                        />
                    </div>
                    <div className="md:block">
                        <ProfilePreviewDropdown user={user}>
                            <DropdownButton text='My profile' onClick={() => { router.push(`/${user.username}`) }} />
                            <DropdownButton text={local.signOut} onClick={signOut} />
                        </ProfilePreviewDropdown>
                    </div>
                </>
                : <>
                    <TextButton type={'button'} text={local.signIn}
                        onClick={e => { router.push('/auth/signin') }}
                    />
                    <TextButton type={'button'} text={local.signUp} onClick={e => { router.push('/auth/signup') }} />
                </>
            }
        </div>
    )
}
