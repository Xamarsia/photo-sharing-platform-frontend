import styles from '@/styles/components/page.module.css';

import Footer from '@/components/common/footer/Footer';
import Header from '@/components/common/header/Header';
import UnauthorizedGuard from '@/components/common/guards/UnauthorizedGuard';
import AlertProvider from '@/components/common/alert/AlertProvider';
import AuthProvider from '@/components/common/AuthProvider';


export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <AuthProvider>
      <UnauthorizedGuard>
        <>
          <Header />
          <main className={`${styles['main']} z-30`}>
            <AlertProvider>
              <div className={`${styles['simple-page-layout']}`}>
                {children}
              </div>
            </AlertProvider>
          </main>
          <Footer />
        </>
      </UnauthorizedGuard>
    </AuthProvider>
  )
}
