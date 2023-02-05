import Link from 'next/link'

const ProfileBubble = () => {
  return (
    <Link
      className='absolute top-3 left-0 lg:-left-24  rounded-full ring-2 ring-tertiary hover:ring-primary'
      href='/profile'
    >
      <div className='relative flex items-center'>
        {/* Componente Perfil */}
        {/* cirulo conectado */}
        <span className='absolute text-green-500 right-0 bottom-0'>
          <svg width='20' height='20'>
            <circle cx='8' cy='8' r='8' fill='currentColor' />
          </svg>
        </span>
        {/* foto perfil */}
        <img src='./img/foto.png' alt='David Prado Profile Picture' className='w-20 h-20 rounded-full ' />
      </div>
    </Link>
  )
}

export default ProfileBubble
