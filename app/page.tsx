'use client'

import { signInWithGoogle, signOut } from "@/lib/firebase/auth";
import { auth, firebaseApp } from "@/lib/firebase/clientApp";
import { saveTokenToHttponlyCookies } from "@/actions/actions";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import TextButton from "@/components/buttons/TextButton";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  // const result = await (await fetch("http://api:8080/auth/foo")).text();


  useEffect(() => {
    auth.onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        saveTokenToHttponlyCookies("");
        console.log("token: empty")

      } else {
        const token = await user.getIdToken();
        setUser(user);
        saveTokenToHttponlyCookies(token);
        console.log("token: ", token)
      }
    });
  }, []);


  return (
    <main >
      <div className=" bg-red-400 min-h-20 min-w-20">
        <p>{user?.displayName}</p>
        <p>{user?.email}</p>
      </div>
      <div className="profile">
        <TextButton text="Sign In with Google" onClick={signInWithGoogle} />
        <TextButton text="Sign Out" onClick={signOut} />
      </div>
    </main>
  )
}

// import { authFetch } from "@/actions/actions";
// export default async function Page() {

//   const result = await authFetch('/test', { method: 'GET', }).then((res) => res.text());

//   // const result = await (await fetch("http://api:8080/foo")).text();

//   // const result = Cart();

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className=" bg-red-400 min-h-20 min-w-20">
//         <p>{result}</p>
//       </div>

//     </main>
//   );

// }