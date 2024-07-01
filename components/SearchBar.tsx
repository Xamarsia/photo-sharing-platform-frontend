"use client"

import { ChangeEvent, FormEvent } from "react";
import Button from "./Button";
import styles from '@/app/styles/components/search.bar.module.css'
import SearchInput from "./SearchInput";

export default function SearchBar() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    }

    const onSearchChanged = (e: ChangeEvent<HTMLInputElement>) => {
    }

    return (
        <form className={`${styles['search-bar']}`} onSubmit={handleSubmit}>
            <SearchInput onChange={onSearchChanged} />
            <Button type={"submit"} style={"primary-button"} size="small" text="Search" rounded="rounded-lg" />
        </form>
    )
}


