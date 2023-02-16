
function Border ({ children, height = 'h-full', className, padding = 'p-8' }) {
  return (
    <section className={`border relative ${className}`}>
      <div className={`absolute w-full bg-fourthy dark:bg-darkPrimary -z-20 ${height}`} />
      <div className={padding}>
        {children}
      </div>
    </section>
  )
}

export default Border
