
function Border ({ children, height = 'h-full', className = 'h-full' }) {
  return (
    <section className={`border h-auto relative ${className}`}>
      <div className={`absolute w-full bg-fourthy dark:bg-darkPrimary -z-20 ${height}`} />
      <div className='p-8'>
        {children}
      </div>
    </section>
  )
}

export default Border
