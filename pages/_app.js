import { useState } from 'react'
import '../styles/globals.scss'
import { AuthContextProvider } from '../components/Context/AuthContext'
import ProtectedRoutes from '../components/ProtectedRoutes'
import { useRouter } from 'next/router'

const noAuthRequired = [
  '/',
  '/athlete-advisory-board',
  '/board-of-directors',
  '/boss-application',
  '/boss-program',
  '/team',
  '/testimonials',
  '/register',
  '/about',
  '/contact',
  '/donate',
  '/stem',
  '/login',
  '/register',
  '/privacy-policy',
  '/news',
]

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <AuthContextProvider>
        {noAuthRequired.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoutes>
            <Component {...pageProps} />
          </ProtectedRoutes>
        )}
      </AuthContextProvider>
    </>
  )
}

export default MyApp
