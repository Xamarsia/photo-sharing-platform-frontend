import { authFetch } from "@/lib/auth-controller";


export async function GET(
    request: Request,
    { params }: { params: { username: string } }
) {
    const username: string = params.username;

    const avatarResponse: Response = await authFetch(`/user/${username}/profile/image`, { method: 'GET', });
    return avatarResponse;
}
