export const SkillList = ({ children, className }) => {
  return (
    <ul className={`flex justify-start item-center ${className}`}>
      {children}
    </ul>
  )
}
