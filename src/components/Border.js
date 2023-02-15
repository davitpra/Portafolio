
function Border ({ children, className = 'h-full' }) {
  return (
    <section className='border relative h-auto'>
      <div className={`absolute w-full bg-fourthy dark:bg-darkPrimary -z-20 ${className}`} />
      <div className='p-8'>
        {children}
      </div>

    </section>
  )
}

export default Border
