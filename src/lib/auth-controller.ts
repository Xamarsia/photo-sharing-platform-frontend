import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";

export async function spspFetch(path: string | URL, init?: RequestInit): Promise<Response> {
    const cookieStore: ReadonlyRequestCookies = await cookies();
    const token: RequestCookie | undefined = cookieStore.get('token');

    return fetch(`${process.env.BACKEND_URL}${path}`, {
        ...init,
        headers: {
            Authorization: `${token?.value ? `Bearer ${token?.value}` : ''}`  ,
            ...init?.headers
        },
    });
}

export async function JSONRequest(data: any, init?: RequestInit): Promise<RequestInit> {
    return {
        ...init,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }
}
