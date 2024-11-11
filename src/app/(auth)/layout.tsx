import Footer from '@/components/common/footer/Footer';
import UnauthorizedGuard from '@/components/common/guards/UnauthorizedGuard';
import AlertProvider from '@/components/common/alert/AlertProvider';
import AuthProvider from '@/components/common/AuthProvider';
import UnAuthHeader from '@/components/common/header/UnAuthHeader';


export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <AuthProvider>
      <UnauthorizedGuard>
        <UnAuthHeader />
        <main className='flex flex-grow relative flex-shrink-0 bg-gray-50 mt-20 z-30'>
          <AlertProvider>
            <div className='flex flex-grow flex-shrink justify-center items-center m-4'>
              {children}
            </div>
          </AlertProvider>
        </main>
        <Footer />
      </UnauthorizedGuard>
    </AuthProvider>
  )
}
