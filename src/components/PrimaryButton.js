
export const PrimaryButton = ({ children, className, onClick }) => {
  return (
    <button
      className={`w-full md:w-40 bg-primary text-white px-6 p-2 m-3 rounded-md hover:ring-2 hover:ring-tertiary shadow-md traslation_animated font-semibold ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
