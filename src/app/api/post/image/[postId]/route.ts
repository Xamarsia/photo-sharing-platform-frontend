import { spspFetch } from "@/lib/auth-controller";


type Props = {
    params: Promise<{ postId: number }>
}


export async function GET(
    request: Request,
    { params }: Props
) {
    const postId: number = (await params).postId;

    const avatarResponse: Response = await spspFetch(`/post/${postId}/image`, { method: 'GET', });
    return avatarResponse;
}
