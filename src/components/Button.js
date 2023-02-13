
export const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`p-2 rounded-md hover:ring-2 hover:ring-tertiary shadow-md hover:shadow-xl traslation_animated  ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
