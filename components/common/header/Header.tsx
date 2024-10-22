import 'server-only';

import Logo from "@/components/common/Logo";
import SearchBar from "@/components/common/search/SearchBar";
import HeaderMenu from "@/components/common/header/HeaderMenu";

import { getCurrentUser } from "@/actions/actions";


type Props = {
    local: any,
}


export default async function Header({ local }: Props) {
    const user: UserDTO | undefined = await getCurrentUser();


    return (
        <header className="flex-shrink-0 z-10 fixed top-0 bg-white w-full border-y border-gray-100 h-20">
            <div className="flex items-center justify-between h-full px-4 md:px-8 gap-2 md:gap-4">
                <Logo />
                <div className={`grow max-w-[580px] ${user ? "block" : "hidden"}`}>
                    <SearchBar local={local} />
                </div>
                <HeaderMenu local={local} user={user} />
            </div>
        </header>
    )
}
