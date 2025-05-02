import { ReactNode } from "react";

import { getCurrentUser } from "@/actions/actions";
import UserProvider from '@/components/common/guards/UserProvider';


type Props = {
    children: ReactNode,
}


export default async function UserGuard({ children }: Props) {
    const user: UserDTO | undefined = await getCurrentUser();

    return (
        <UserProvider user={user}>
            {children}
        </UserProvider>
    );
}