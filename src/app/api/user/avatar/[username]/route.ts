import { authFetch } from "@/lib/auth-controller";


type Props = {
    params: Promise<{ username: string }>
}


export async function GET(
    request: Request,
    { params }: Props
) {
    const username: string = (await params).username;

    const avatarResponse: Response = await authFetch(`/user/${username}/image`, { method: 'GET', });
    return avatarResponse;
}
