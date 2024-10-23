import 'server-only';

// import Profile from '@/components/profile/Profile';
// import PostsPreviewGridInfiniteLoading from '@/components/common/infinite-loading/PostsPreviewGridInfiniteLoading';




// export default async function Profile() {
//     return (
//         <div className="flex flex-grow flex-shrink justify-center lg:m-4">
//             <div className="flex flex-col items-center gap-4 max-w-7xl">
//                 <Profile local={dict} profile={profile} />
//                 <PostsPreviewGridInfiniteLoading username={params.username} />
//             </div>
//         </div>
//     );
// }



import Button from '@/components/loading/common/Button';
import StatsInfo from '@/components/loading/profile/StatsInfo';
import ProfileImage from '@/components/loading/profile/ProfileImage';
import Description from '@/components/loading/common/Description';


export default function Profile() {
    return (
        <div className="flex flex-col items-center gap-4 w-11/12 max-w-lg ">
            <ProfileImage />
            <div className='flex flex-col items-center'>
                <div className="h-3 bg-gray-200 rounded-full mb-2.5 w-48" />
                <div className="h-3 bg-gray-200 rounded-full mb-2.5 w-32" />
            </div>
            <Description />
            <StatsInfo />
            <div className="flex flex-row items-center basis-1/3 my-4">
                <Button />
            </div>
        </div>
    )
}

