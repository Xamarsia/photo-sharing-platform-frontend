import 'server-only';


import styles from '@/app/styles/components/page.module.css';

import Card from '@/components/common/Card';
import SigninForm from '@/components/loading/SigninForm';
import Header from '@/components/loading/common/header/Header';
import AuthHeader from '@/components/loading/common/header/AuthHeader';
import Footer from '@/components/loading/common/Footer';
import Post from '@/components/loading/post/Post';
import ManagePost from '@/components/loading/post/ManagePost';
import Profile from '@/components/loading/profile/Profile';
import PostsPreviewGrid from '@/components/loading/post/PostsPreviewGrid';
import Sidebar from '@/components/loading/profile/edit/Sidebar';
import EditLayout from '@/components/loading/profile/edit/EditLayout';

export default function SigninPage() {
    return (

        // <Header />
        // <AuthHeader />


        // <div className={`${styles['simple-page-layout']}`}>
        //     <Card>
        //         <SigninForm />
        //     </Card>
        // </div>

        // <Footer/>ss


        // <Post />

        // <ManagePost />



        // // Profile
        // <div className="flex flex-grow flex-shrink justify-center lg:m-4">
        //     <div className="flex  flex-grow flex-col items-center gap-4 max-w-7xl">
        //         <Profile />
        //         <PostsPreviewGrid />
        //     </div>
        // </div>

        // <Sidebar />
        // <EditLayout />

        <div className='flex m-4 flex-grow flex-shrink justify-center items-center'>
        <ul className='flex flex-col gap-4'>
            <li>
                <Post />
            </li>
            <li>
                <Post />
            </li>
            <li>
                <Post />
            </li>
            <li>
                <Post />
            </li>
            <li>
                <Post />
            </li>
            <li>
                <Post />
            </li>
            <li>
                <Post />
            </li>
            <li>
                <Post />
            </li>
        </ul>
    </div>


    );
}
