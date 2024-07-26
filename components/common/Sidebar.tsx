"use client";


import DropdownButton from "../buttons/DropdownButton";


type Props = {
    local: any,
}


export default function Sidebar({ local }: Props) {

    return (
        <nav className="flex flex-col justify-around px-4 py-4 ">
            <DropdownButton style='secondary' size='base' text={local.goToPost} />
            <DropdownButton style='secondary' size='base' text={local.goToPost} />
            <DropdownButton style='secondary' size='base' text={local.goToPost} />
        </nav>
    )
}
