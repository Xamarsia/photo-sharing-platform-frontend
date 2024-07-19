"use client";


import Text from '@/components/common/Text';
import TextButton from "@/components/buttons/TextButton";


type Props = {
    text: string,
    count: number,
    unclickable?: boolean,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}


export default function StatCounter({ text, count, unclickable, onClick }: Props) {
    return (
        <div className="flex gap-4">
            <TextButton text={text} type="button" padding={false} onClick={onClick} disabled={unclickable} style={"transparent-button"} size={"extra-large"} />
            <div className='m-auto'>
                <Text style='secondary-info' size='large' text={count.toString()} />
            </div>
        </div>
    )
}
