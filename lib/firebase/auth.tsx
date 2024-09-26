import {
  signOut as sOut,
  AuthCredential,
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  GoogleAuthProvider,
  reauthenticateWithCredential,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateEmail,
  User,
  UserCredential,
  deleteUser,
  verifyBeforeUpdateEmail,
  reauthenticateWithPopup,
  getAuth,
  updatePassword
} from "firebase/auth";

import { auth } from "@/lib/firebase/clientApp";
import { saveAuth } from "@/actions/user-actions";
import { saveTokenToHttponlyCookies } from "@/actions/actions";
import { FirebaseError } from "firebase/app";

export async function signInWithGoogle(): Promise<UserCredential | undefined> {
  const provider = new GoogleAuthProvider();

  try {
    const userCredential: UserCredential = await signInWithPopup(auth, provider);
    const idToken = await userCredential.user.getIdToken();
    await saveTokenToHttponlyCookies(idToken);
    return userCredential;
  } catch (error: unknown) {
    console.error("Error signing in with Google", error);
    await saveTokenToHttponlyCookies('');
  }
}

export async function signUpWithGoogle(): Promise<UserCredential | undefined> {
  const provider = new GoogleAuthProvider();

  try {
    const userCredential: UserCredential = await signInWithPopup(auth, provider);
    const idToken = await userCredential.user.getIdToken();
    await saveTokenToHttponlyCookies(idToken);
    await saveAuth();
    return userCredential;
  } catch (error: unknown) {
    await saveTokenToHttponlyCookies('');
    console.error("Error signing in with Google", error);
  }
}

export async function signUpWithEmailPassword(loginRequest: LoginRequest): Promise<UserCredential | undefined | FirebaseError> {
  try {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, loginRequest.email, loginRequest.password);
    const idToken = await userCredential.user.getIdToken();
    await saveTokenToHttponlyCookies(idToken);
    await saveAuth();
    return userCredential;
  } catch (error: unknown) {
    await saveTokenToHttponlyCookies('');
    if (error instanceof FirebaseError) {
      return error;
    }
    console.error("Error signing up with email and password", error);
  }
}

export async function signInWithEmailPassword(loginRequest: LoginRequest): Promise<UserCredential | undefined | FirebaseError> {
  try {
    const userCredential: UserCredential = await signInWithEmailAndPassword(auth, loginRequest.email, loginRequest.password);
    const idToken = await userCredential.user.getIdToken();
    await saveTokenToHttponlyCookies(idToken);
    return userCredential;
  } catch (error: unknown) {
    await saveTokenToHttponlyCookies('');
    if (error instanceof FirebaseError) {
      return error;
    }
    console.error("Error signing in with email and password", error);
  }
}

export async function deleteUserAuth(): Promise<void> {
  const currentUser: User | null = auth.currentUser;

  try {
    if (currentUser)
      deleteUser(currentUser);

  } catch (error: unknown) {
    console.error("Error delete user auth", error);
  }
}

export async function signOut(): Promise<void> {
  try {
    return auth.signOut();
  } catch (error: unknown) {
    console.error("Error signing out with Google", error);
  }
}

export async function resetPassword(email: string): Promise<void> {
  const auth = getAuth();

  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error: unknown) {
    console.error("Reset password error", error)
  }
}

export async function changePassword(newPassword: string) {
  const auth = getAuth();

  if (auth.currentUser) {
    try {
      await updatePassword(auth.currentUser, newPassword);
    } catch (error: unknown) {
      console.error("Update password error", error)
    }
  }
}

export async function reauthenticate(password: string): Promise<UserCredential | undefined | FirebaseError> {
  const auth = getAuth();
  const currentUser = auth.currentUser;

  try {
    if (currentUser && currentUser.email) {
      const credential: AuthCredential = EmailAuthProvider.credential(
        currentUser.email,
        password
      );

      const userCredential: UserCredential = await reauthenticateWithCredential(currentUser, credential);
      return userCredential;
    }
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      return error;
    }
    console.error("Reauthenticate with credential error", error);
  }
}

export async function reauthenticateWithGoogle(): Promise<UserCredential | undefined> {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const provider = new GoogleAuthProvider();

  try {
    if (currentUser) {
      const userCredential: UserCredential = await reauthenticateWithPopup(currentUser, provider);
      return userCredential;
    }
  } catch (error: unknown) {
    console.error("Reauthenticate with Google error", error);
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
  } catch (error: unknown) {
    console.error("Verify email error", error);
  }
}

export async function updateUserEmail(email: string): Promise<void> {
  const currentUser = auth.currentUser;

  try {
    if (currentUser) {
      await updateEmail(currentUser, email);
    }
  } catch (error: unknown) {
    console.error("Update email error", error);
  }
}
