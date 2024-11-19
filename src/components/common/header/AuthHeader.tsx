import 'server-only';

import Logo from "@/components/common/Logo";
import SearchBar from "@/components/common/search/SearchBar";
import AuthHeaderMenu from '@/components/common/header/AuthHeaderMenu';

import { getCurrentUser } from "@/actions/actions";
import { notFound } from 'next/navigation';


export default async function AuthHeader() {
    const user: UserDTO | undefined = await getCurrentUser();

    if (!user) {
        notFound();
    }

    return (
        <header
            className="fixed top-0 flex-shrink-0 flex items-center justify-between w-full 
            border-y bg-white border-gray-100 h-20 px-4 md:px-8 gap-2 md:gap-4 z-10"
        >
            <Logo />
            <div className='grow max-w-[580px] block'>
                <SearchBar />
            </div>
            <AuthHeaderMenu user={user} />
        </header>
    )
}
