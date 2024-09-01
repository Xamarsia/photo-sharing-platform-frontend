import { authFetch } from "@/lib/auth-controller";


export async function GET(
    request: Request,
    { params }: { params: { postId: number } }
) {
    const postId = params.postId;

    const avatarResponse = await authFetch(`/post/${postId}/image`, { method: 'GET', });
    return avatarResponse;
}
