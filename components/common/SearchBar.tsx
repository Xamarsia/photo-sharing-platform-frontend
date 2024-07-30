"use client";


import { ChangeEvent, FormEvent } from "react";

import SearchInput from "@/components/common/SearchInput";


type Props = {
    local: any,
}


export default function SearchBar({ local }: Props) {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    }

    const onSearchChanged = (e: ChangeEvent<HTMLInputElement>) => {
    }

    return (
        <form className='flex items-center mx-auto w-full gap-x-1' onSubmit={handleSubmit}>
            <SearchInput onChange={onSearchChanged} />
        </form>
    )
}
