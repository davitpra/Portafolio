
export const SecondaryButton = ({ children, className, onClick }) => {
  return (
    <button
      className={`w-full md:w-44 bg-darkPrimary dark:bg-fourthy text-white dark:text-black text-xl font-semibold px-6 p-2 m-3 rounded-md shadow-md hover:ring-2 hover:ring-fourthy traslation_animated hover:shadow-xl ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
