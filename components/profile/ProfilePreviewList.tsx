import ProfilePreview from "@/components/profile/ProfilePreview"


type Props = {
    local: any,
    users: Array<UserDTO>
}

export default function ProfilePreviewList({local, users }: Props) {

    return (
        <ul className="flex flex-col w-full gap-1">
            {users.map(user => (
                <li key={user.id}>
                    <ProfilePreview local={local} user={user} />
                </li>
            ))}
        </ul>
    )
}
