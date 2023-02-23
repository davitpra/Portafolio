import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export const DarkModeMenu = ({ children }) => {
  // variables para obtener el theme del navegador
  const { systemTheme, theme, setTheme } = useTheme()
  const [darkMode, setDarkMode] = useState()

  // efecto para hacer el primer pintado
  useEffect(() => {
    setDarkMode(
      theme === 'system'
        ? systemTheme
        : theme
    )
  }, [])

  // condicional para cambiar el estado darkMode
  if (darkMode === 'dark') {
    return (
      <button
        onClick={() => {
          setTheme('light')
          setDarkMode('light')
        }}
      >
        <li className='ml-4 text-2xl my-6'>Light Mode</li>
      </button>
    )
  } else {
    return (
      <button
        onClick={() => {
          setTheme('dark')
          setDarkMode('dark')
        }}
      >
        <li className='ml-4 text-2xl my-6'>Dark Mode</li>
      </button>
    )
  }
}
