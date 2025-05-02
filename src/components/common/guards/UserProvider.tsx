'use client';

import { redirect } from 'next/navigation';
import { createContext, ReactNode, useContext } from 'react';


export const UserContext = createContext<UserDTO | undefined>(undefined);


export function GetCurrentUser(): UserDTO | undefined {
  return useContext(UserContext);
}


export function GetCurrentUserOrRedirect(): UserDTO {
  const currentUser: UserDTO | undefined = GetCurrentUser();
  if (!currentUser) {
    redirect("/auth/signin");
  }

  return currentUser;
}


type Props = {
  children: ReactNode,
  user: UserDTO | undefined,
}


export default function UserProvider({ children, user }: Props) {
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}
