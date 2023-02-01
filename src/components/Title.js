
export const Title = ({ title, className }) => {
  return (
    <h2
      className={`m-5 text-4xl text-primary font-bold  ${className}`}
    >
      {title}
    </h2>
  )
}
