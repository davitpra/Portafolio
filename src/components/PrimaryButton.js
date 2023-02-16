
export const PrimaryButton = ({ children, className, onClick }) => {
  return (
    <button
      className={`w-full bg-primary text-white text-xl font-semibold px-6 p-2 rounded-md hover:ring-2 hover:ring-primary shadow-md traslation_animated hover:shadow-xl my-4 md:my-0 md:mx-4 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
