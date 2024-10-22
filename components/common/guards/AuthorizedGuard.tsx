import 'server-only';

import { getCurrentUser } from "@/actions/actions";
import { ReactNode } from "react";
import { redirect } from 'next/navigation';


type Props = {
    children: ReactNode,
}


export default async function AuthorizedGuard({ children }: Props) {
    const user: UserDTO | undefined = await getCurrentUser();

    if (user == undefined) {
        redirect("/auth/signin");
    }

    return (
        <>
            {children}
        </>
    )
}
