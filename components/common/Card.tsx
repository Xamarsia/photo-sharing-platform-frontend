import React, { ReactNode } from "react";


type CardProps = {
    children: ReactNode,
}


export default function Card({ children }: CardProps) {
    return (
        <div className={"bg-white w-full max-w-xl m-4 px-8 py-4 sm:px-12 sm:py-8 rounded-2xl border border-gray-100"}>
            {children}
        </div>
    )
}
