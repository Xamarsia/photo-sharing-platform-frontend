"use client";


import StatCounter from "@/components/common/StatCounter";


type StatsInfoProps = {
    local: any;
    profile: ProfileDTO;
}


export default function StatsInfo({ local, profile }: StatsInfoProps) {
    return (
        <div className="flex flex-row w-full justify-around gap-8">
            <StatCounter text={local.posts} count={profile.postsCount} unclickable />
            <StatCounter text={local.followers} count={profile.followersCount} />
            <StatCounter text={local.followings} count={profile.followingsCount} />
        </div>
    )
}
