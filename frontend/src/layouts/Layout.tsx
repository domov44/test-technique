import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Outlet } from 'react-router-dom'

export function Layout() {
  const { logout } = useAuth()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-end items-center p-4">
        <span className="mr-4 font-medium">Hello Luke</span>
        <Button className='cursor-pointer' onClick={logout} variant="destructive" size="sm">
          Logout
        </Button>
      </header>
      <main className="flex-grow p-6">
        <Outlet />
      </main>
    </div>
  )
}