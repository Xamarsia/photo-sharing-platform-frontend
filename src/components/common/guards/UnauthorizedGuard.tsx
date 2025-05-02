'use client';


import { GetCurrentUser } from '@/components/common/guards/UserProvider';
import { redirect } from 'next/navigation';
import { ReactNode } from "react";


type Props = {
    children: ReactNode,
}


export default function UnauthorizedGuard({ children }: Props) {
    const currentUser: UserDTO | undefined = GetCurrentUser();
    if (currentUser != undefined) {
        redirect("/");
    }

    return (
        children
    );
}
