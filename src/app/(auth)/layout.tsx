import AuthorizedGuard from "@/components/common/guards/AuthorizedGuard"


export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <AuthorizedGuard>
      {children}
    </AuthorizedGuard>
  )
}
