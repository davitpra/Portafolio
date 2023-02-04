
export const Title = ({ title, className }) => {
  return (
    <h2
      className={`text-4xl font-bold text-black dark:text-white ${className}`}
    >
      {title}
    </h2>
  )
}
