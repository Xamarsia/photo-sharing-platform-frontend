import { getSidebarItems } from '@/actions/actions';

import Sidebar from '@/components/common/sidebar/Sidebar';


export default async function EditProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const sidebarItems = await getSidebarItems();

  return (
    <div className='flex flex-row w-full max-w-6xl bg-white m-4 p-4 rounded-2xl'>
      <section className='sticky top-20 hidden md:flex flex-col border-r border-gray-100'>
        <Sidebar items={sidebarItems} />
      </section>

      <section className="flex-grow p-2 md:p-4">
        {children}
      </section>
    </div>
  )
}
