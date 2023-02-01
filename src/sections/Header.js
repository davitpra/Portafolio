import Link from "next/link"
const navigation = [
  {label: 'Home', path: '/'},
  {label: 'About', path: '/about'}
]

export const Header = () => {
  return (
    <header className="h-16 flex items-center justify-between">
      <ul className="flex gap-4">
        {navigation.map(nav => 
          <Link 
            href={nav.path} 
            key={nav} 
            className="font-semibold text-gray-400 hover:text-gray-500"
          >
            {nav.label}
          </Link>
        )}
      </ul>
      <button>Icon</button>
    </header>
  )
}
