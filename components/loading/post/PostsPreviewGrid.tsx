import 'server-only';


export default function PostsPreviewGrid() {
    return (
        <ul className='flex flex-grow size-full flex-wrap content-start gap-0.5 md:gap-1'>
            <li className='flex-1 basis-3/12'>
                <div className='w-full aspect-square rounded-md bg-gray-200' />
            </li>
            <li className='flex-1 basis-3/12'>
                <div className='w-full aspect-square rounded-md bg-gray-200' />
            </li>
            <li className='flex-1 basis-3/12'>
                <div className='w-full aspect-square rounded-md bg-gray-200' />
            </li>

            <li className='flex-1 basis-3/12'>
                <div className='w-full aspect-square rounded-md bg-gray-200' />
            </li>
            <li className='flex-1 basis-3/12'>
                <div className='w-full aspect-square rounded-md bg-gray-200' />
            </li>
            <li className='flex-1 basis-3/12'>
                <div className='w-full aspect-square rounded-md bg-gray-200' />
            </li>
        </ul>
    )
}

