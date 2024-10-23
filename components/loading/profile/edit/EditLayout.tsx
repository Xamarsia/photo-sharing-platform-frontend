
import 'server-only';

import Sidebar from './Sidebar';
import SettingPage from './SettingPage';


export default function EditLayout() {
  return (
    <div className='flex flex-grow flex-col w-full relative flex-shrink-0'>
      <div className="flex justify-center w-full">
        <div className='flex flex-row w-full max-w-6xl bg-white m-4 p-4 rounded-2xl'>

          <section className='relative hidden md:flex flex-col top-0 left-0 h-full border-r border-gray-100'>
            <div className='sticky top-20'>
              <Sidebar />
            </div>
          </section>

          <section className="flex-grow flex-shrink-0 p-2 md:p-4">
            <SettingPage />
          </section>
        </div>
      </div>
    </div>
  )
}
