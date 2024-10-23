import 'server-only';


import Link from '@/components/loading/common/Link';


export default function Footer() {
    return (
        <footer className="bg-white w-full z-5 border-t border-gray-100 flex-shrink-0 h-24 md:h-16">
            <div className="flex flex-col items-center justify-center gap-2 h-full md:justify-between md:flex-row md:px-8">
                <span className={`w-64`}>
                    <Link />
                </span>
                <ul className="flex flex-wrap items-center gap-2 sm:gap-4 md:gap-8">
                    <li className='w-12'>
                        <Link />
                    </li>
                    <li className='w-20'>
                        <Link />
                    </li>
                    <li className='w-16'>
                        <Link />
                    </li>
                </ul>
            </div>
        </footer>
    )
}
