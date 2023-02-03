
export const Title = ({ title, className }) => {
  return (
    <h2
      className={`text-4xl text-primary font-bold dark:text-white ${className}`}
    >
      {title}
    </h2>
  )
}
