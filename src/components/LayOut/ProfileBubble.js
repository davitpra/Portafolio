import Link from 'next/link'

const ProfileBubble = () => {
  return (
    <Link
      className='md:hidden absolute top-3 left-0 lg:-left-24  rounded-full ring-2 ring-tertiary hover:ring-primary traslation_animated'
      href='/'
    >
      <div className='flex items-center'>
        {/* foto perfil */}
        <img src='./img/foto.png' alt='David Prado Profile Picture' className='w-20 h-20 rounded-full ' />
      </div>
    </Link>
  )
}

export default ProfileBubble
