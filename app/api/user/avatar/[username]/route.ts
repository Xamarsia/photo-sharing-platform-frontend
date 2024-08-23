import { authFetch } from "@/lib/auth-controller";


export async function GET(
    request: Request,
    { params }: { params: { username: string } }
) {
    const username = params.username;

    const avatarResponse = await authFetch(`/user/${username}/profile/image`, { method: 'GET', });
    return avatarResponse;
}
