import styles from '@/styles/components/page.module.css';

export default async function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className={`${styles['simple-page-layout']}`}>
      {children}
    </div>
  )
}
