import ProfilePreview from "@/components/profile/ProfilePreview";


type Props = {
    users: Array<UserDTO>
}

export default function ProfilePreviewsList({ users }: Props) { 

    return (
        <ul className="flex flex-col w-full gap-1">
            {users.map(user => (
                <li key={user.id}>
                    <ProfilePreview user={user} />
                </li>
            ))}
        </ul>
    )
}
