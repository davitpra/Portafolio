
export const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`p-2 rounded-md hover:ring-2 hover:ring-tertiary shadow-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
