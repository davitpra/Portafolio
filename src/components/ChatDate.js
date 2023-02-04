export const ChatDate = ({ children, className }) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className='w-auto bg-secondary px-6 p-2 rounded-full'>
        <p className='text-white font-medium text-2xl'>
          {children}
        </p>
      </div>
    </div>
  )
}
