'use server'

import { ProviderID } from '@/constants';
import { authFetch } from '@/lib/auth-controller';
import { getEmail, getProvider } from '@/lib/firebase/serverApp';

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

export async function getSidebarItems(local: any): Promise<Array<SidebarItemInfo>> {
  const provider = await getProvider();
  const email = await getEmail();

  let items: Array<SidebarItemInfo> = [
    { href: "/profile/edit/info", title: local.userInfo },
    { href: "/profile/edit/image", title: local.profileImage },
    { href: "/profile/edit/username", title: local.username },
    { href: "/profile/edit/delete", title: local.deleteAccount },
  ];

  if (provider && provider.includes(ProviderID.EmailAuthProvider)) {
    items.push({ href: "/profile/edit/password", title: local.password });
  }

  if (email && email.get(ProviderID.EmailAuthProvider)) {
    items.push({ href: "/profile/edit/email", title: local.email },);
  }

  return items;
}
