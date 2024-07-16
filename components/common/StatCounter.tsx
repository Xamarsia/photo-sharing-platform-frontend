"use client";

import TextButton from "@/components/buttons/TextButton";

import textStyles from '@/app/styles/components/text.module.css';


type StatCounterProps = {
    text: string;
    count: number;
    unclickable?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


export default function StatCounter({ text, count, unclickable, onClick }: StatCounterProps) {
    return (
        <div className="flex gap-4">
            <TextButton text={text} type="button" padding={false} onClick={onClick} disabled={unclickable} style={"transparent-button"} size={"extra-large"} />
            <p className={`${textStyles["secondary-info"]} ${textStyles['large']} m-auto`}>{count}</p>
        </div>
    )
}
