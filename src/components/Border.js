import { BsCheckCircleFill } from 'react-icons/bs'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export const Border = ({ children, className, message = 'left' }) => {
  // estado para sabe si el button ya fue renderizado
  const [mounted, setMounted] = useState(false)

  // variables para obtener el theme del navegador
  const { theme } = useTheme()

  let checkcolor
  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted) {
    // condicional para cambiar el estado darkMode
    theme === 'dark'
      ? checkcolor = '#374151'
      : checkcolor = '#3b82f6'
  }

  let position
  message === 'left'
    ? position = ''
    : position = 'flex-row-reverse'

  return (
    // container
    <section className={`relative flex mt-3 mb-3 justify-start ${position}`}>
      <div className='mx-8 flex justify-center'>
        <BsCheckCircleFill size={25} fill={checkcolor} className='absolute bottom-0' />
      </div>
      {/* card */}
      <div className={`w-auto px-8 flex shadow-lg shadow-secondary py-5 bg-message dark:bg-secondary dark:shadow-none ${className}`}>
        {children}
      </div>

    </section>
  )
}
