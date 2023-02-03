export const SkillList = ({ children, className }) => {
  return (
    <ul className={`flex justify-center item-center ${className}`}>
      {children}
    </ul>
  )
}
