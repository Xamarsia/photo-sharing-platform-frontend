import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, UserCredential } from "firebase/auth";

import { auth } from "@/lib/firebase/clientApp";
import { saveAuth } from "@/actions/user-actions";
import { saveTokenToHttponlyCookies } from "@/actions/actions";


export async function signInWithGoogle(): Promise<boolean> {
  const provider = new GoogleAuthProvider();

  try {
    const userCredential: UserCredential = await signInWithPopup(auth, provider);
    const idToken = await userCredential.user.getIdToken();
    saveTokenToHttponlyCookies(idToken);
    return true
  } catch (error) {
    console.error("Error signing in with Google", error);
    saveTokenToHttponlyCookies('');
    return false;
  }
}

export async function signUpWithGoogle(): Promise<boolean> {
  const provider = new GoogleAuthProvider();

  try {
    const userCredential: UserCredential = await signInWithPopup(auth, provider);
    const idToken = await userCredential.user.getIdToken();
    saveTokenToHttponlyCookies(idToken);
    return saveAuth();
  } catch (error) {
    saveTokenToHttponlyCookies('');
    console.error("Error signing in with Google", error);
    return false;
  }
}

export async function signUpWithEmailPassword(loginRequest: LoginRequest): Promise<boolean> {
  try {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, loginRequest.email, loginRequest.password);
    const idToken = await userCredential.user.getIdToken();
    console.log("idToken: ", idToken)
    saveTokenToHttponlyCookies(idToken);
    return saveAuth();
  } catch (error) {
    saveTokenToHttponlyCookies('');
    console.log("idToken: empty")
    console.error("Error signing in with Google", error);
    return false;
  }
}

export async function signInWithEmailPassword(loginRequest: LoginRequest): Promise<boolean> {
  try {
    const userCredential: UserCredential = await signInWithEmailAndPassword(auth, loginRequest.email, loginRequest.password);
    const idToken = await userCredential.user.getIdToken();
    saveTokenToHttponlyCookies(idToken);

    return true;
  } catch (error) {
    saveTokenToHttponlyCookies('');
    console.error("Error signing in with Google", error);
    return false;
  }
}

export async function signOut(): Promise<void> {
  try {
    return auth.signOut();
  } catch (error) {
    console.error("Error signing out with Google", error);
  }
}
