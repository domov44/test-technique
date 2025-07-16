import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Outlet, useNavigate } from 'react-router-dom'
import { ROUTES } from '@/routes/routes'

export function Layout() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-4 border-b border-gray-200">
        <div
          onClick={() => navigate(ROUTES.HOME)}
          role="button"
          tabIndex={0}
          className="w-12 h-12 bg-gray-300 rounded-md animate-pulse cursor-pointer flex items-center justify-center select-none"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') navigate('/')
          }}
          aria-label="Home"
        >
          <div className="w-6 h-6 bg-gray-400 rounded-sm" />
        </div>
        <div className="flex items-center">
          <span className="mr-4 font-medium">Hello Luke</span>
          <Button className="cursor-pointer" onClick={logout} variant="destructive" size="sm">
            Logout
          </Button>
        </div>
      </header>
      <main className="flex-grow p-6">
        <Outlet />
      </main>
    </div>
  )
}