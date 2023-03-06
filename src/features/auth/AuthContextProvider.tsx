import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  ProviderId,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  UserCredential,
} from 'firebase/auth'
import React, { FC } from 'react'
import { fAuth } from '../../firebase/firebase.client'

interface IContext {
  createWithEmailAndPassword: (email: string, password: string, name: string) => Promise<void>
  loginWithEmailAndPassword: (email: string, password: string) => Promise<UserCredential>
  loginWithOauthPopup: (provider: string) => Promise<UserCredential>
  logOut: () => void
  isAuthenticated: boolean | null
  user?: any
}

interface IProps {
  children: React.ReactNode
}

export const ALLOWED_OAUTH_PROVIDERS: Record<string, any> = {
  [ProviderId.GOOGLE]: new GoogleAuthProvider(),
  [ProviderId.GITHUB]: new GithubAuthProvider(),
}

const context = React.createContext<IContext>({
  isAuthenticated: null,
  loginWithEmailAndPassword: () => Promise.reject({}),
  loginWithOauthPopup: () => Promise.reject({}),
  createWithEmailAndPassword: () => Promise.reject({}),
  logOut: () => void 0,
})

export const useAuthContext = (): IContext => React.useContext<IContext>(context)

export const AuthContextProvider: FC<IProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<IContext['isAuthenticated']>(null)
  const [user, setUser] = React.useState<any>(null)
  const [auth] = React.useState(fAuth)

  React.useEffect(() => {
    if (!auth) return

    auth.setPersistence(browserLocalPersistence)
    auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user)
        setIsAuthenticated(true)
      } else {
        setUser(null)
        setIsAuthenticated(false)
      }
    })
  }, [auth])

  const createWithEmailAndPassword = async (email: string, password: string, name: string): Promise<void> => {
    await createUserWithEmailAndPassword(auth, email, password)
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: name,
      })
    }
  }

  const loginWithEmailAndPassword = async (email: string, password: string): Promise<UserCredential> => {
    return await signInWithEmailAndPassword(auth, email, password)
  }

  const loginWithOauthPopup = async (providerId: string): Promise<UserCredential> => {
    return await signInWithPopup(auth, ALLOWED_OAUTH_PROVIDERS[providerId])
  }

  const logOut = (): Promise<void> => signOut(auth)

  return (
    <context.Provider
      value={{
        createWithEmailAndPassword,
        loginWithEmailAndPassword,
        loginWithOauthPopup,
        logOut,
        isAuthenticated,
        user,
      }}
    >
      {children}
    </context.Provider>
  )
}
