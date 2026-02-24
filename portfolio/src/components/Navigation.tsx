import { Link, useLocation } from 'react-router'

export function Navigation() {
  const location = useLocation()

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Involvements', path: '/involvements' },
  ]

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="text-xl font-medium text-white">
            Portfolio
          </Link>
          <div className="grid grid-cols-3 overflow-hidden">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`h-14 w-28 inline-flex items-center justify-center transition-colors ${
                  location.pathname === link.path
                    ? 'text-white bg-white/30'
                    : 'text-white/85 hover:text-white hover:bg-white/40'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
