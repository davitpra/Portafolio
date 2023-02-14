export const SkillList = ({ children, className }) => {
  return (
    <ul className={`flex justify-center items-start ${className}`}>
      {children}
    </ul>
  )
}
