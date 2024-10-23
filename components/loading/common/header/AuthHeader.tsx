import 'server-only';


import Title from '@/components/loading/common/Title';
import Button from '@/components/loading/common/Button';
import SearchBar from '@/components/loading/common/SearchBar';


import styles from '@/app/styles/components/profile.image.module.css';

export default function AuthHeader() {
    return (
        <header className="flex-shrink-0 z-10 fixed top-0 bg-white w-full border-y border-gray-100 h-20">
            <div className="flex items-center justify-between h-full px-4 md:px-8 gap-2 md:gap-4">
                <Title />
                <div className={`grow max-w-[580px] block `}>
                    <SearchBar />
                </div>
                <div className="flex flex-row items-center gap-2 md:gap-4">
                    <>
                        <div className='md:block hidden h-full'>
                            <Button />
                        </div>
                        <div className="md:block">
                            <div className={`${styles['image-layout']}`}>
                                <div className={`${styles['preview-size']} border relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-200`} />
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </header>
    )
}
