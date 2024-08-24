import loading from '@/public/loading.svg';

import Image from 'next/image';

export default function Loader() {
    return (
        <div className="flex items-center justify-center size-36 animate-spin">
            <Image src={loading} alt="icon" className={`size-14`} />
        </div>
    );
};
