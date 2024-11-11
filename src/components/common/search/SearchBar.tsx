"use client";


import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react";

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

    const onSubmit = useCallback((e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (query) {
            router.push(`/search/?query=${query}`);
        }
    }, [query]);

    const onSearchChanged = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        const query: string = e.target.value;
        setQuery(query);
    }, [query]);

    return (
        <form onSubmit={onSubmit}>
            <SearchInput value={query} onChange={onSearchChanged} />
        </form>
    )
}
