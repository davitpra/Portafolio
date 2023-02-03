
export const SecondaryButton = ({ children, className, onClick }) => {
  return (
    <button
      className={`w-40 bg-tertiary text-black font-semibold px-6 p-2 m-3 rounded-md shadow-md hover:ring-2 hover:ring-fourthy dark:bg-fourthy  traslation_animated  ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
