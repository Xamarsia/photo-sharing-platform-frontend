import ProfilePreview from "@/components/profile/ProfilePreview"


type UsersProps = {
    users: Array<UserPreviewDTO>
}

export default function Profiles({ users }: UsersProps) {

    return (
        <ul className="w-full">
            {users.map(user => (
                <li key={user.id}>
                    <ProfilePreview user={user} />
                </li>
            ))}
        </ul>
    )
}
