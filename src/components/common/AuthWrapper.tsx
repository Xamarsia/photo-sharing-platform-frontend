'use client';

import { ReactNode } from "react";
import { GetCurrentUser } from "@/components/common/guards/UserProvider";


type Props = {
    unAuth?: ReactNode,
    auth?: ReactNode,
}


export default function AuthWrapper({ unAuth, auth }: Props) {
    const currentUser: UserDTO | undefined = GetCurrentUser();
    return currentUser ? auth : unAuth;
}
