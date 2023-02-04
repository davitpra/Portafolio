import { Border } from '@/components/Border'

export const Message = ({ children, message, className }) => {
  return (
    <Border message={message} className={className}>
      <p className='text-white text-left text-3xl'>{children}</p>
    </Border>
  )
}
