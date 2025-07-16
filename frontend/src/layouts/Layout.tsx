import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Outlet, useNavigate } from 'react-router-dom'
import { ROUTES } from '@/routes/routes'
import { LucideLogOut } from 'lucide-react'

export function Layout() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto flex justify-between items-center p-4">
          <div
            onClick={() => navigate(ROUTES.HOME)}
            role="button"
            tabIndex={0}
            className="w-12 h-12 bg-gray-300 rounded-md animate-pulse cursor-pointer flex items-center justify-center select-none"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') navigate(ROUTES.HOME)
            }}
            aria-label="Home"
          >
            <div className="w-6 h-6 bg-gray-400 rounded-sm" />
          </div>
          <div className="flex items-center">
            <span className="mr-4 font-medium">Hello Luke</span>
            <Button onClick={logout} variant="destructive" size="sm" className='cursor-pointer'>
              <LucideLogOut size={16} />
              Logout
            </Button>
          </div>
        </div>
      </header>
      <main className="flex p-4 w-full items-center justify-center">
        <div className='flex flex-col max-w-4xl items-center justify-center w-fit w-full'>
          <Outlet />
        </div>
      </main>
    </div>
  )
}
