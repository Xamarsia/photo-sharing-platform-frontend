
import { getCurrentUser } from "@/actions/actions";
import Image from 'next/image';


// import { signInWithGoogle, signOut } from "@/lib/firebase/auth";
// import { useState } from "react";
// import { User } from "firebase/auth";

// import TextButton from "@/components/buttons/TextButton";


// import { getCurrentUser } from "@/actions/actions";

export default async function Home() {
  const user: UserDTO | undefined = await getCurrentUser();

  return (

    <main>
      {user &&
        <div className=" bg-red-400 min-h-20 min-w-20">
          <p>{user.id}</p>
          <p>{user.state}</p>
        </div>}
      {/* <div className="profile">
            <TextButton text="Sign In with Google" onClick={signInWithGoogle} />
            <TextButton text="Sign Out" onClick={signOut} />
          </div> */}
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
