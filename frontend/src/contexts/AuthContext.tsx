import { createContext, useContext, useState, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

interface AuthContextType {
  token: string | null
  login: (username: string, password: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('authToken'))
  const navigate = useNavigate()

  const login = async (username: string, password: string) => {
    const basicToken = btoa(`${username}:${password}`)

    const res = await fetch('/api/people', {
      headers: { Authorization: `Basic ${basicToken}` },
    })

    if (!res.ok) throw new Error('Unauthorized')

    setToken(basicToken)
    localStorage.setItem('authToken', basicToken)
    toast.success(`Welcome, ${username}`)
    navigate('/')
  }

  const logout = () => {
    setToken(null)
    localStorage.removeItem('authToken')
    toast.success('You have been logged out.')
    navigate('/login')
  }

  const value = {
    token,
    login,
    logout,
    isAuthenticated: !!token,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}