"use client";


import { ChangeEvent, FormEvent, useState } from "react";

import SearchInput from "@/components/common/SearchInput";
import { useRouter } from "next/navigation";


type Props = {
    local: any,
}


export default function SearchBar({ local }: Props) {
    const [query, setQuery] = useState<string>();
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query) {
            router.push(`/search/?query=${query}`);
        }
    };

    const onSearchChanged = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const query = e.target.value;
        setQuery(query);
    };

    return (
        <form onSubmit={handleSubmit}>
            <SearchInput local={local} onChange={onSearchChanged} />
        </form>
    )
}
