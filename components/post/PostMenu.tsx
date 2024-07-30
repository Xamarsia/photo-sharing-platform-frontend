"use client";


import Link from 'next/link';
import { useState } from 'react';

import { UserState } from '@/constants';
import { getProfileImagePreview } from '@/lib/profile-controller';

import Text from '@/components/common/Text';
import PostDropdown from '@/components/post/PostDropdown';
import DropdownButton from '@/components/buttons/DropdownButton';


type Props = {
    local: any,
    detailedPost: DetailedPostDTO,
}

export default function PostMenuComponent({ local, detailedPost }: Props) {
    const [post] = useState<PostDTO>(detailedPost.postDTO);
    const [postAuthor] = useState<UserPreviewDTO>(detailedPost.authorDTO);
    const [isUserPostOwner] = useState<boolean>(postAuthor.state == UserState.Current);

    const profileImagePreview = getProfileImagePreview(detailedPost.authorDTO);

    return (
        <div className='flex justify-around items-center space-x-4'>
            <Link href={`/${post.username}`}>{profileImagePreview}</Link>
            <div className="flex-1 flex flex-row gap-4 m-auto ">
                <Text style='main-info' size='small' text={postAuthor.fullName} />
                <Text style='secondary-info' size='small' text={'@' + postAuthor.username} />
                <Text style='secondary-info' size='extra-small' text={'\u2022' + post.createdDate} />
            </div>
            <PostDropdown>
                <DropdownButton style='secondary' size='base' text={local.goToPost} />
                {isUserPostOwner
                    ? <>
                        <DropdownButton style='secondary' size='base' text={local.editPost} />
                        <DropdownButton style='delete' size='base' text={local.deletePost} />

                    </>
                    :
                    <> {postAuthor.state == UserState.Unfollowed
                        ? <DropdownButton style='primary' size='base' text={local.follow} />
                        : <DropdownButton style='delete' size='base' text={local.unfollow} />
                    } </>
                }
            </PostDropdown>
        </div>
    )
}
