import 'server-only';


export default function StatsInfo() {
    return (
        <div className="flex flex-row w-full justify-around gap-8">
            <div className="flex gap-1 md:gap-2">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5 w-20" />
                <div className="h-2 bg-gray-200 rounded-full mb-2.5 w-4 " />
            </div>
            <div className="flex gap-1 md:gap-2">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5 w-28" />
                <div className="h-2 bg-gray-200 rounded-full mb-2.5 w-4 " />
            </div>
            <div className="flex gap-1 md:gap-2">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5 w-24" />
                <div className="h-2 bg-gray-200 rounded-full mb-2.5 w-4 " />
            </div>
        </div>
    )
}
