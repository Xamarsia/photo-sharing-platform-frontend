import 'server-only';


import Title from '@/components/loading/common/Title';
import Button from '@/components/loading/common/Button';


export default function Header() {
    return (
        <header className="flex-shrink-0 z-10 fixed top-0 bg-white w-full border-y border-gray-100 h-20">
            <div className="flex items-center justify-between h-full px-4 md:px-8 gap-2 md:gap-4">
                <Title />
                <div className="flex flex-row items-center gap-2 md:gap-4">
                    <Button />
                    <Button />
                </div>
            </div>
        </header>
    )
}
