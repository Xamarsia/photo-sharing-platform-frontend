import 'server-only';

export default function SearchBar() {
    return (
        <div className='relative w-full'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 size-4' />
            <div className={`bg-gray-200 border border-gray-100 appearance-none outline-none w-full ps-10 rounded-xl h-10`} />
        </div>
    )
}
