import 'server-only';

type Props = {
    fill?: 'content' | 'parent',
}

export default function Button({ fill = "content" }: Props) {
    return (
        <div>
            <div className={`h-10 px-4 rounded-xl w-24 bg-gray-100 
                ${fill == 'parent' ? 'w-full' : ''}`} />
        </div>
    )
}
