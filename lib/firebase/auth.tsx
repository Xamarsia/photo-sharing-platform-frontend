import { signOut as sOut, AuthCredential, createUserWithEmailAndPassword, EmailAuthProvider, GoogleAuthProvider, reauthenticateWithCredential, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateEmail, User, UserCredential, deleteUser, verifyBeforeUpdateEmail, reauthenticateWithPopup, getAuth } from "firebase/auth";

import { auth } from "@/lib/firebase/clientApp";
import { saveAuth } from "@/actions/user-actions";
import { saveTokenToHttponlyCookies } from "@/actions/actions";


export async function signInWithGoogle(): Promise<UserCredential | undefined> {
  const provider = new GoogleAuthProvider();

  try {
    const userCredential: UserCredential = await signInWithPopup(auth, provider);
    const idToken = await userCredential.user.getIdToken();
    saveTokenToHttponlyCookies(idToken);
    return userCredential;
  } catch (error) {
    console.error("Error signing in with Google", error);
    saveTokenToHttponlyCookies('');
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
    // TODO Add unicue email and week password error handling
    // https://firebase.google.com/docs/auth/flutter/password-auth
    return false;
  }
}

export async function signInWithEmailPassword(loginRequest: LoginRequest): Promise<UserCredential | undefined> {
  try {
    const userCredential: UserCredential = await signInWithEmailAndPassword(auth, loginRequest.email, loginRequest.password);
    const idToken = await userCredential.user.getIdToken();
    saveTokenToHttponlyCookies(idToken);

    return userCredential;
  } catch (error) {
    saveTokenToHttponlyCookies('');
    console.error("Error signing in with Google", error);

  }
}

export async function deleteUserAuth(): Promise<void> {
  const currentUser: User | null = auth.currentUser;

  try {
    if (currentUser)
      deleteUser(currentUser);

  } catch (error) {
    console.error("Error delete user auth", error);
  }
}

export async function signOut(): Promise<void> {
  try {
    return auth.signOut();
  } catch (error) {
    console.error("Error signing out with Google", error);
  }
}

export async function resetPassword(email: string): Promise<void> {
  const auth = getAuth();

  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.error("Reset password error", error)
  }
}


export async function reauthenticate(password: string): Promise<UserCredential | undefined> {
  const currentUser = auth.currentUser;

  try {
    if (currentUser && currentUser.email) {
      const credential: AuthCredential = EmailAuthProvider.credential(
        currentUser.email,
        password
      );

      const userCredential: UserCredential = await reauthenticateWithCredential(currentUser, credential);
      const idToken = await userCredential.user.getIdToken();
      saveTokenToHttponlyCookies(idToken);
      return userCredential;
    }
  } catch (error) {
    console.error("Reauthenticate with credential error", error);
    saveTokenToHttponlyCookies('');
  }
}

export async function reauthenticateWithGoogle(): Promise<UserCredential | undefined> {
  const currentUser = auth.currentUser;
  const provider = new GoogleAuthProvider();
  try {
    if (currentUser) {
      const userCredential: UserCredential = await reauthenticateWithPopup(currentUser, provider);
      const idToken = await userCredential.user.getIdToken();
      saveTokenToHttponlyCookies(idToken);
      return userCredential;
    }
  } catch (error) {
    console.error("Reauthenticate with Google error", error);
    saveTokenToHttponlyCookies('');
  }
}

export async function verifyEmail(newEmail: string): Promise<void> {
  const currentUser = auth.currentUser;
  try {
    if (currentUser) {
      await verifyBeforeUpdateEmail(currentUser, newEmail);
      await sOut(auth);
      window.location.reload();
    }
  } catch (error) {
    console.error("Verify email error", error);
  }
}

export async function updateUserEmail(email: string): Promise<void> {
  const currentUser = auth.currentUser;

  try {
    if (currentUser) {
      await updateEmail(currentUser, email);
    }
  } catch (error) {
    console.error("Update email error", error);
  }
}
