'use client';


import { auth } from "@/lib/firebase/clientApp";
import { saveTokenToHttpOnlyCookies } from "@/actions/actions";
import { ReactNode, useEffect } from "react";


type Props = {
    children: ReactNode,
}


export default function AuthProvider({ children }: Props) {

    useEffect(() => {
        auth.onIdTokenChanged(async (user) => {
            if (!user) {
                saveTokenToHttpOnlyCookies("");
                console.log("token: empty")

            } else {
                const token: string = await user.getIdToken();
                saveTokenToHttpOnlyCookies(token);
                console.log("token: ", token)
            }
        });
    }, []);


    return children;
}
