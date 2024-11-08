import { getSidebarItems } from '@/actions/actions';

import Sidebar from '@/components/common/sidebar/Sidebar';


export default async function EditProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const sidebarItems = await getSidebarItems();

  return (
    <div className='flex flex-grow flex-col w-full relative flex-shrink-0'>
      <div className="flex flex-auto justify-center w-full">
        <div className='flex flex-row w-full max-w-6xl bg-white m-4 p-4 rounded-2xl'> //3 divs???

          <section className='relative hidden md:flex flex-col top-0 left-0 h-full border-r border-gray-100'>
            <div className='sticky top-20'>
              <Sidebar items={sidebarItems} />
            </div>
          </section>

          <section className="flex-grow flex-shrink-0 p-2 md:p-4">
            {children}
          </section>

        </div>
      </div>
    </div>
  )
}
