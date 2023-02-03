
export const Border = ({ children, className }) => {
  return (
    // container
    <section className='flex justify-center mt-10 mb-10'>
      {/* card */}
      <div className={`w-full flex justify-center rounded-lg shadow-xl py-5 ring-1 ring-tertiary dark:ring-primary dark:shadow-primary ${className}`}>
        {children}
      </div>
    </section>
  )
}
