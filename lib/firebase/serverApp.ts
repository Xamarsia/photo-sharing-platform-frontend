import "server-only";

import { FirebaseServerApp, initializeServerApp } from "firebase/app";

import { firebaseConfig } from "@/lib/firebase/config";
import { getAuth, UserInfo } from "firebase/auth";

import { cookies } from 'next/headers';


export async function getAuthenticatedApp() {
  const firebaseServerApp: FirebaseServerApp = initializeServerApp(
    firebaseConfig,
    cookies().has('token') ? { authIdToken: cookies().get('token')?.value } : {}
  );

  const auth = getAuth(firebaseServerApp);
  await auth.authStateReady();

  return { firebaseServerApp, currentUser: auth.currentUser };
}


export async function getProvider(): Promise<string[] | undefined> {
  try {
    const authenticatedApp = await getAuthenticatedApp();
    const user = await authenticatedApp.currentUser;

    if (user) {
      let providersId: string[] = new Array();

      user.providerData.forEach((profile: UserInfo) => {
        providersId.push(profile.providerId);
      });
      return providersId;
    } else {
      throw new Error("No user is signed in");
    }
  } catch (error: unknown) {
    console.error("Get provider error", error);
  }
}


export async function getEmail(): Promise<Map<string, string> | undefined> {
  try {
    const authenticatedApp = await getAuthenticatedApp();
    const user = await authenticatedApp.currentUser;

    if (user) {
      let emails: Map<string, string> = new Map();

      user.providerData.forEach((profile: UserInfo) => {
        if (profile.email) {
          emails.set(profile.providerId, profile.email);
        }
      });

      return emails;
    } else {
      throw new Error("No user is signed in");
    }

  } catch (error: unknown) {
    console.error("Get email error", error);
  }
}


export async function refreshTokens() {

}
