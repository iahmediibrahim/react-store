import { useAuth0 } from '@auth0/auth0-react'
import { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext()
export const UserProvider = ({ children }) => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0()
  const [myUser, setMyUser] = useState(null)
  useEffect(() => {
    if (isAuthenticated) {
      setMyUser(user)

    } else {
      setMyUser(false)

    }
  }, [isAuthenticated])
  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, myUser }}>{children}</UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
