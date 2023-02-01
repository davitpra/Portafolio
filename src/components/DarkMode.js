import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs'
import { Button } from './Button'

export const DarkMode = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  const currentTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])

  if (currentTheme === 'dark') {
    if (!mounted) return null
    return (
      <Button
        className='bg-secondary'
        onClick={() => setTheme('light')}
      >
        <BsFillSunFill size='20px' />
      </Button>
    )
  } else {
    return (
      <Button
        className='bg-gray-200'
        onClick={() => setTheme('dark')}
      >
        <BsMoonFill size='20px' />
      </Button>
    )
  }
}
