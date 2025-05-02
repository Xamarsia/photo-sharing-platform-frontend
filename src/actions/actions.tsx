'use server'

import { ProviderID } from '@/constants';
import { spspFetch } from '@/lib/auth-controller';
import { getEmail, getProvider } from '@/lib/firebase/serverApp';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

import { cookies } from 'next/headers';
import { getTranslations } from 'next-intl/server';

export async function saveTokenToHttpOnlyCookies(token: string): Promise<void> {
  const cookieStore: ReadonlyRequestCookies = await cookies();
  cookieStore.set({
    name: 'token',
    value: token,
    httpOnly: true,
    path: '/',
    sameSite: 'none',
    secure: true
  });
}

export async function getCurrentUser(): Promise<UserDTO | undefined> {
  const res: Response = await spspFetch('/user', { method: 'GET', });
  if (!res.ok) {
    return undefined;
  }
  const user: UserDTO = await res.json();
  return user;
}

export async function getSidebarItems(): Promise<Array<SidebarItemInfo>> {
  const provider: string[] | undefined = await getProvider();
  const email: Map<string, string> | undefined = await getEmail();
  const t = await getTranslations('form');

  let items: Array<SidebarItemInfo> = [
    { href: "/profile/edit/info", title: t('userInfo') },
    { href: "/profile/edit/image", title: t('profileImage') },
    { href: "/profile/edit/username", title: t('username') },
  ];

  if (provider && provider.includes(ProviderID.EmailAuthProvider)) {
    items.push({ href: "/profile/edit/password", title: t('password') });
  }

  if (email && email.get(ProviderID.EmailAuthProvider)) {
    items.push({ href: "/profile/edit/email", title: t('email') });
  }

  items.push({ href: "/profile/edit/delete", title: t('deleteAccount') });
  return items;
}
