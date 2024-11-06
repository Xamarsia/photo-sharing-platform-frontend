import { authFetch } from "@/lib/auth-controller";

type Params = Promise<{
    username: string
}>

export async function GET(
    request: Request,
    props: { params: Params }
) {

    const params = await props.params;
    const username: string = params.username;

    const avatarResponse: Response = await authFetch(`/user/${username}/profile/image`, { method: 'GET', });
    return avatarResponse;
}
