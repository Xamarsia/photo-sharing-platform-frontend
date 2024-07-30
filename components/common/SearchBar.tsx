"use client";


import { ChangeEvent, FormEvent } from "react";

import TextButton from "@/components/buttons/TextButton";
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
        <form className='flex items-center mx-auto min-w-full gap-x-1' onSubmit={handleSubmit}>
            <SearchInput onChange={onSearchChanged} />
            <div className="hidden md:block">
                <TextButton type={"submit"} style={"primary"} size="small" fill="content" text={local.search} rounded="rounded-lg" />
            </div>
        </form>
    )
}
