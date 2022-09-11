import React, { useState, createContext, useContext, useEffect } from 'react'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth } from '../../firebase'

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  console.log(user)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      } else {
        setUser(null)
      }
      console.log(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  // const signup = (email, passowrd) => {
  //   return createUserWithEmailAndPassword(auth, email, passowrd)
  // }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = async () => {
    setUser(null)
    await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}
