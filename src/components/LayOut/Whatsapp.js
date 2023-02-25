import ReactWhatsapp from 'react-whatsapp'

export function Whatsapp ({ children, className }) {
  return (
    <ReactWhatsapp
      number='+593998366616'
      message='Hi David! I saw your profile and I have some questions'
      className={className}
    >
      {children}
    </ReactWhatsapp>
  )
}
