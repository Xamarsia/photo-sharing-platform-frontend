export default async function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className='flex flex-grow flex-shrink justify-center items-center m-4'>
      {children}
    </div>
  )
}
