import Link from 'next/link'

export const ProfileBubble = () => {
  return (
    <Link
      className='md:hidden absolute top-4 left-4 rounded-full ring-2 ring-tertiary hover:ring-primary traslation_animated'
      href='/'
    >
      <div className='flex items-center'>
        {/* foto perfil */}
        <img src='./img/foto.png' alt='David Prado Profile Picture' className='w-20 h-20 rounded-full ' />
      </div>
    </Link>
  )
}
