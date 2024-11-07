"use client";


import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import SearchInput from "@/components/common/search/SearchInput";
import { usePathname, useRouter } from "next/navigation";


export default function SearchBar() {
    const [query, setQuery] = useState<string>('');
    const router = useRouter();
    const pathname: string = usePathname();

    // Clear search string value if not on search page
    useEffect(() => {
        if (query && !pathname.includes('/search')) {
            setQuery('');
        }
    }, [pathname]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query) {
            router.push(`/search/?query=${query}`);
        }
    };

    const onSearchChanged = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const query: string = e.target.value;
        setQuery(query);
    };

    return (
        <form onSubmit={handleSubmit}>
            <SearchInput value={query} onChange={onSearchChanged} />
        </form>
    )
}
