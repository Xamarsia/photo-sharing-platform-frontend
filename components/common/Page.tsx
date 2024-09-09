'use client';


import { auth } from "@/lib/firebase/clientApp";
import { saveTokenToHttponlyCookies } from "@/actions/actions";
import { ReactNode, useEffect } from "react";


type Props = {
    children: ReactNode,
}


export default function Page({ children }: Props) {

    useEffect(() => {
        auth.onIdTokenChanged(async (user) => {
            if (!user) {
                saveTokenToHttponlyCookies("");

            } else {
                const token = await user.getIdToken();
                saveTokenToHttponlyCookies(token);
            }
        });
    }, []);


    return (
        <>
            {children}
        </>
    )
}
