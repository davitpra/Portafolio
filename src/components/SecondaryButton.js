
export const SecondaryButton = ({ children, className, onClick }) => {
  return (
    <button
      className={`w-full md:w-40 bg-fourthy text-black font-semibold px-6 p-2 m-3 rounded-md shadow-md hover:ring-2 hover:ring-fourthy traslation_animated  ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
