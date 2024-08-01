"use client";


import Text from '@/components/common/Text';
import Link from '@/components/common/Link';


type Props = {
    text: string,
    count: number,
    unclickable?: boolean,
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void,
}


export default function StatCounter({ text, count, unclickable, onClick }: Props) {
    return (
        <div className="flex gap-1 md:gap-2">
            {unclickable
                ? <Text style="secondary-info" size='large' text={text} />
                : <Link text={text} style='secondary' onClick={onClick} />
            }
            <Text style='secondary-info' size='large' text={count.toString()} />
        </div>
    )
}
