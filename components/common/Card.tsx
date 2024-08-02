import React, { ReactNode } from "react";


type CardProps = {
    children: ReactNode,
}


export default function Card({ children }: CardProps) {
    return (
        <div className={"bg-white w-full m-8 max-w-xl p-6 sm:p-10"}>
            {children}
        </div>
    )
}
