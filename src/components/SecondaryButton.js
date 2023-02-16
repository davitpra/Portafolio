
export const SecondaryButton = ({ children, className, onClick }) => {
  return (
    <button
      className={`w-full bg-darkPrimary dark:bg-fourthy text-white dark:text-black text-xl font-semibold px-6 p-2 rounded-md shadow-md hover:ring-2 hover:ring-fourthy traslation_animated hover:shadow-xl ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
