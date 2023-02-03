
export const Border = ({ children, className }) => {
  return (
    // container
    <section className='flex justify-center mt-10 mb-10'>
      {/* card */}
      <div className={`w-full flex justify-center rounded-lg shadow-lg py-5 ring-1 ring-tertiary dark:ring-white dark:shadow-white dark:bg-darkPrimary ${className}`}>
        {children}
      </div>
    </section>
  )
}
