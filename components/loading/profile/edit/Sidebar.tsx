import 'server-only';


export default function Sidebar() {
    return (
        <nav className="flex flex-col p-2 md:p-4 gap-0.5">
            <div className={`flex px-3 rounded-lg h-10 w-full min-w-56 bg-gray-200  `} />
            <div className={`flex px-3 rounded-lg h-10 w-full min-w-56 bg-gray-200  `} />
            <div className={`flex px-3 rounded-lg h-10 w-full min-w-56 bg-gray-200  `} />
            <div className={`flex px-3 rounded-lg h-10 w-full min-w-56 bg-gray-200  `} />
            <div className={`flex px-3 rounded-lg h-10 w-full min-w-56 bg-gray-200  `} />
        </nav>
    )
}
