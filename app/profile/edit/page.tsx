// import { getDictionary } from "@/lib/localization";


// export default async function Home() {
//    const dict = await getDictionary('en');

//    return (
//       <div className="size-full">
//          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
//             <div className="grid grid-cols-3 gap-4 mb-4">
//                <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
//                   <p className="text-2xl text-gray-400 dark:text-gray-500">
//                      <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
//                      </svg>
//                   </p>
//                </div>
//                <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
//                   <p className="text-2xl text-gray-400 dark:text-gray-500">
//                      <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
//                      </svg>
//                   </p>
//                </div>
//                <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
//                   <p className="text-2xl text-gray-400 dark:text-gray-500">
//                      <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
//                      </svg>
//                   </p>
//                </div>
//             </div>
//             <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
//                <p className="text-2xl text-gray-400 dark:text-gray-500">
//                   <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
//                   </svg>
//                </p>
//             </div>
//             <div className="grid grid-cols-2 gap-4 mb-4">
//                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                   <p className="text-2xl text-gray-400 dark:text-gray-500">
//                      <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
//                      </svg>
//                   </p>
//                </div>
//                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                   <p className="text-2xl text-gray-400 dark:text-gray-500">
//                      <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
//                      </svg>
//                   </p>
//                </div>
//                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                   <p className="text-2xl text-gray-400 dark:text-gray-500">
//                      <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
//                      </svg>
//                   </p>
//                </div>
//                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                   <p className="text-2xl text-gray-400 dark:text-gray-500">
//                      <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
//                      </svg>
//                   </p>
//                </div>
//             </div>
//             <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
//                <p className="text-2xl text-gray-400 dark:text-gray-500">
//                   <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
//                   </svg>
//                </p>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                   <p className="text-2xl text-gray-400 dark:text-gray-500">
//                      <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
//                      </svg>
//                   </p>
//                </div>
//                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                   <p className="text-2xl text-gray-400 dark:text-gray-500">
//                      <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
//                      </svg>
//                   </p>
//                </div>
//                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                   <p className="text-2xl text-gray-400 dark:text-gray-500">
//                      <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
//                      </svg>
//                   </p>
//                </div>
//                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                   <p className="text-2xl text-gray-400 dark:text-gray-500">
//                      <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
//                      </svg>
//                   </p>
//                </div>
//                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                   <p className="text-2xl text-gray-400 dark:text-gray-500">
//                      <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
//                      </svg>
//                   </p>
//                </div>
//                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                   <p className="text-2xl text-gray-400 dark:text-gray-500">
//                      <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
//                      </svg>
//                   </p>
//                </div>
//                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                   <p className="text-2xl text-gray-400 dark:text-gray-500">
//                      <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
//                      </svg>
//                   </p>
//                </div>
//                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                   <p className="text-2xl text-gray-400 dark:text-gray-500">
//                      <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
//                      </svg>
//                   </p>
//                </div>
//                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                   <p className="text-2xl text-gray-400 dark:text-gray-500">
//                      <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
//                      </svg>
//                   </p>
//                </div>
//                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                   <p className="text-2xl text-gray-400 dark:text-gray-500">
//                      <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
//                      </svg>
//                   </p>
//                </div>
//                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                   <p className="text-2xl text-gray-400 dark:text-gray-500">
//                      <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
//                      </svg>
//                   </p>
//                </div>
//                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                   <p className="text-2xl text-gray-400 dark:text-gray-500">
//                      <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
//                      </svg>
//                   </p>
//                </div>
//                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                   <p className="text-2xl text-gray-400 dark:text-gray-500">
//                      <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
//                      </svg>
//                   </p>
//                </div>
//                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                   <p className="text-2xl text-gray-400 dark:text-gray-500">
//                      <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
//                      </svg>
//                   </p>
//                </div>
//                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                   <p className="text-2xl text-gray-400 dark:text-gray-500">
//                      <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
//                      </svg>
//                   </p>
//                </div>
//                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                   <p className="text-2xl text-gray-400 dark:text-gray-500">
//                      <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
//                      </svg>
//                   </p>
//                </div>
//             </div>
//          </div>
//       </div>
//    )
// }


"use client";


import Modal from '@/components/common/Modal';
import { useState } from 'react';
import TextButton from '@/components/buttons/TextButton';

export default function Home() {
   const [openModal, setModal] = useState(false);

   const handleModal = () => {
      setModal(!openModal)
   }

   return (
      <div className="flex flex-col items-center justify-between p-24">
         <TextButton
            style='primary'
            text='Open Modal'
            onClick={handleModal} />

         {openModal && <Modal title={'Open Modal'} onClose={handleModal} >
            <div>
               <p className='text-sm font-medium text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quod quis eaque aliquam necessitatibus vel eligendi laboriosam optio quisquam sunt.</p>
               <TextButton style="primary" type="button" text="Test" fill="parent" />
            </div>
         </Modal>}
      </div>
   )
}