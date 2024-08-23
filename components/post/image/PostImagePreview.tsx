import Image from 'next/image';


type Props = {
    postId: number
}


export default function PostImagePreview({ postId }: Props) {
    return (
        <div className={`relative aspect-square`}>
            <Image className={`size-full object-center rounded-md object-cover`}
                src={`/api/post/image/${postId}`}
                width="400" height="400" alt="Post image" />
        </div>
    );
}
