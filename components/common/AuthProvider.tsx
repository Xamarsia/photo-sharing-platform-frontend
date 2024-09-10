'use client';


import { auth } from "@/lib/firebase/clientApp";
import { saveTokenToHttponlyCookies } from "@/actions/actions";
import { ReactNode, useEffect } from "react";


type Props = {
    children: ReactNode,
}


export default function AuthProvider({ children }: Props) {

    useEffect(() => {
        auth.onIdTokenChanged(async (user) => {
            if (!user) {
                saveTokenToHttponlyCookies("");
                console.log("token: empty")

            } else {
                const token = await user.getIdToken();
                saveTokenToHttponlyCookies(token);
                console.log("token: ", token)
            }
        });
    }, []);


    return (
        <>
            {children}
        </>
    )
}
