import { authFetch } from "@/lib/auth-controller";


export async function GET(
    request: Request,
    { params }: { params: { postId: number } }
) {
    const postId: number = params.postId;

    const avatarResponse: Response = await authFetch(`/post/${postId}/image`, { method: 'GET', });
    return avatarResponse;
}
