'use server'

import { authFetch } from '@/lib/auth-controller';
import { cookies } from 'next/headers';

export async function saveTokenToHttponlyCookies(token: string) {
  cookies().set({
    name: 'token',
    value: token,
    httpOnly: true,
    path: '/',
    sameSite: 'none',
    secure: true
  })
}

export async function getCurrentUser(): Promise<UserDTO | undefined> {
  const res: Response = await authFetch('/user', { method: 'GET', });
  if (!res.ok) {
    return undefined;
  }
  const user: UserDTO = await res.json();
  return user;
}
