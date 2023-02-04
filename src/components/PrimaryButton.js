
export const PrimaryButton = ({ children, className, onClick }) => {
  return (
    <button
      className={`w-full md:w-44 bg-primary text-white text-xl font-semibold px-6 p-2 m-3 rounded-md hover:ring-2 hover:ring-primary shadow-md traslation_animated  ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
