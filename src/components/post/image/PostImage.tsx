import Image from 'next/image';


type Props = {
    postId: number
}


export default function PostImage({ postId }: Props) {

    return (
        <div className='my-3 sm:my-4'>
            <Image className={`size-full object-cover object-center rounded-xl`}
                priority={true} quality={60}
                width="400" height="400" alt="Post image"
                src={`/api/post/image/${postId}`}
            />
        </div>
    );
}
