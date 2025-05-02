'use client';

import { ReactNode } from "react";
import { redirect } from 'next/navigation';

import { GetCurrentUser } from '@/components/common/guards/UserProvider';


type Props = {
    children: ReactNode,
}


export default function AuthorizedGuard({ children }: Props) {
    const currentUser: UserDTO | undefined = GetCurrentUser();
    if (currentUser == undefined) {
        redirect("/auth/signin");
    }

    return (
        children
    );
}
