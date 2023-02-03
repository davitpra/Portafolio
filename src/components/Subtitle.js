
export const Subtitle = ({ subtitle, className }) => {
  return (
    <h3
      className={`dark:text-white ${className}`}
    >
      {subtitle}
    </h3>
  )
}
