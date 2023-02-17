import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { GiMountainClimbing, GiMountains } from 'react-icons/gi'
import { MdDraw } from 'react-icons/md'
import Border from '../Border'

export const ProfileHobbies = () => {
  // estado para sabe si el button ya fue renderizado
  const [mounted, setMounted] = useState(false)
  // variables para obtener el theme del navegador
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  let iconColor

  if (mounted) {
    // condicional para cambiar el estado darkMode
    theme === 'dark'
      ? iconColor = '#ffffff'
      : iconColor = '#374151'
  }

  const hobbies = [
    { Icon: GiMountainClimbing, label: 'Climbing' },
    { Icon: GiMountains, label: 'Alpinism' },
    { Icon: MdDraw, label: 'Design' }
  ]
  return (
    <Border>
      <h4 className='text-xl text-primary font-bold'>Hobbies</h4>
      <div className='flex justify-between'>
        {hobbies.map(hobbie =>
          <div className='flex flex-col items-center my-6' key={hobbie.label}>
            <hobbie.Icon size={60} fill={iconColor} />
            <p className='text-sm'>{hobbie.label}</p>
          </div>
        )}
      </div>
    </Border>
  )
}
