import { authFetch } from "@/lib/auth-controller";


type Params = Promise<{
    postId: number
}>


export async function GET(
    request: Request,
    props: { params: Params }
) {
    const params = await props.params;
    const postId: number = params.postId;

    const avatarResponse: Response = await authFetch(`/post/${postId}/image`, { method: 'GET', });
    return avatarResponse;
}
