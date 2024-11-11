import Footer from '@/components/common/footer/Footer';
import AuthHeader from '@/components/common/header/AuthHeader';
import AuthProvider from '@/components/common/AuthProvider';
import AlertProvider from '@/components/common/alert/AlertProvider';
import AuthorizedGuard from '@/components/common/guards/AuthorizedGuard';
import FixedRoundCreatePostButton from '@/components/buttons/FixedRoundCreatePostButton';


export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <AuthProvider>
      <AuthorizedGuard>
        <AuthHeader />
        <main className='flex flex-grow justify-center relative flex-shrink-0 bg-gray-50 mt-20'>
          <AlertProvider>
            {children}
          </AlertProvider>
          <FixedRoundCreatePostButton />
        </main>
        <Footer />
      </AuthorizedGuard>
    </AuthProvider>
  )
}