"use client"

import { ChangeEvent, FormEvent } from "react";
import TextButton from "@/components/buttons/TextButton";
import styles from '@/app/styles/components/search.bar.module.css';
import SearchInput from "@/components/common/SearchInput";

export default function SearchBar() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    }

    const onSearchChanged = (e: ChangeEvent<HTMLInputElement>) => {
    }

    return (
        <form className={`${styles['search-bar']}`} onSubmit={handleSubmit}>
            <SearchInput onChange={onSearchChanged} />
            <TextButton type={"submit"} style={"primary-button"} size="small" text="Search" rounded="rounded-lg" />
        </form>
    )
}


