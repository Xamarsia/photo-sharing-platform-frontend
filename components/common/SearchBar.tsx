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
        <form onSubmit={handleSubmit}>
            <SearchInput local={local} onChange={onSearchChanged} />
        </form>
    )
}
