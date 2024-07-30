import { useMemo, useState } from "react";
import styles from '@/app/styles/components/profile.image.module.css';

type Props = {
    username?: string
    preview?: boolean
}

var bgColours = ['bg-gray-100, bg-red-100', 'bg-orange-100', 'bg-amber-100', 'bg-yellow-100', 'bg-lime-100', 'bg-green-100', 'bg-emerald-100', 'bg-teal-100',
    'bg-cyan-100', 'bg-sky-100', 'bg-blue-100', 'bg-indigo-100', 'bg-violet-100', 'bg-purple-100', 'bg-fuchsia-100', 'bg-pink-100', 'bg-rose-100'
];

var textColours = ['text-gray-400, text-red-400', 'text-orange-400', 'text-amber-400', 'text-yellow-400', 'text-lime-400', 'text-green-400', 'text-emerald-400', 'text-teal-400',
    'text-cyan-400', 'text-sky-400', 'text-blue-400', 'text-indigo-400', 'text-violet-400', 'text-purple-400', 'text-fuchsia-400', 'text-pink-400', 'text-rose-400'
];

var borderColours = ['border-gray-200, border-red-200', 'border-orange-200', 'border-amber-200', 'border-yellow-200', 'border-lime-200', 'border-green-200', 'border-emerald-200', 'border-teal-200',
    'border-cyan-200', 'border-sky-200', 'border-blue-200', 'border-indigo-200', 'border-violet-200', 'border-purple-200', 'border-fuchsia-200', 'border-pink-200', 'border-rose-200'
];

export default function DefaultProfileImage({ username, preview }: Props) {
    const index = useMemo(() => getColourIndex(username), [username]);

    function getColourIndex(name?: string): number {
        if (!name) {
            return 0;
        }
        var sum: number = 0;
        for (var i = 0; i < name.length; i++) {
            sum = name.charCodeAt(i);
        }
        return sum % bgColours.length;
    }


    return (
        <div className={`${styles['image-layout']}`}>
            <div className={`${preview ? styles['preview-size'] : styles['regular-size']} border relative inline-flex items-center justify-center overflow-hidden rounded-full ${borderColours[index]} ${bgColours[index]}`} >
                <span className={`font-normal ${preview ? "text-xl" : "text-9xl"} ${textColours[index]} `}>{username ? username.slice(0, 2) : "XX"}</span>
            </div>
        </div>
    )
}
