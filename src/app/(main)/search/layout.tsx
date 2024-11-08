export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className='flex flex-grow flex-col w-full relative flex-shrink-0'>
      <div className="flex flex-auto justify-center w-full">
        <div className='flex w-full max-w-6xl bg-white m-4 p-4 rounded-2xl'>
          <section className="flex flex-col flex-grow flex-shrink-0 p-2 md:p-4 items-center"> //are you sure that you need so much layers??
            {children}
          </section>
        </div>
      </div>
    </div>
  )
}
