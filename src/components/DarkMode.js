import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs'
import { Button } from './Button'

export const DarkMode = () => {
  // estado para sabe si el button ya fue renderizado
  const [mounted, setMounted] = useState(false)
  // variables para obtener el theme del navegador
  const { systemTheme, theme, setTheme } = useTheme()
  const [darkMode, setDarkMode] = useState()

  // efecto para hacer el primer pintado
  useEffect(() => {
    setMounted(true)
    setDarkMode(
      theme === 'system'
        ? systemTheme
        : theme
    )
  }, [])

  // condicional para cambiar el estado darkMode
  if (darkMode === 'dark') {
    if (!mounted) return null
    return (
      <Button
        className='bg-secondary'
        onClick={() => {
          setTheme('light')
          setDarkMode('light')
        }}
      >
        <BsFillSunFill size='20px' />
      </Button>
    )
  } else {
    return (
      <Button
        className='bg-fourthy'
        onClick={() => {
          setTheme('dark')
          setDarkMode('dark')
        }}
      >
        <BsMoonFill size='20px' />
      </Button>
    )
  }
}
