
export const Title = ({ children, className }) => {
  return (
    <h1
      className={`text-4xl font-semibold dark:text-primary ${className}`}
    >
      {children}
    </h1>
  )
}
