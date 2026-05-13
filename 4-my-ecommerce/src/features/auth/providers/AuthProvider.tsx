import { useEffect, useState } from "react"
import type { UserProfile } from "../models/User"
import { AuthContext } from "../contexts/AuthContext"

const STORAGE_KEY = "auth_user_profile"

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Load user from localStorage on mount
  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = localStorage.getItem(STORAGE_KEY)
        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error("Failed to load user from localStorage:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadUser();
  }, [])

  const login = async (email: string, password: string): Promise<{ success: boolean; message: string }> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Fake authentication logic
    if (email === "user@example.com" && password === "password123") {
      const userProfile: UserProfile = {
        id: "1",
        email: email,
        name: "John Doe"
      }

      // Store in state and localStorage
      setUser(userProfile)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userProfile))

      return { success: true, message: "Login successful!" }
    }

    return { success: false, message: "Invalid email or password" }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem(STORAGE_KEY)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}