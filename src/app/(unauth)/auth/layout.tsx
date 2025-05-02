import UnauthorizedGuard from "@/components/common/guards/UnauthorizedGuard"


export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className='flex flex-grow flex-shrink justify-center items-center m-4'>
      <UnauthorizedGuard>
        {children}
      </UnauthorizedGuard>
    </div>
  )
}
