import { useState } from 'react'
import StemNav from '../StemNav'
import StemSidebar from '../StemSidebar '
import Footer from '../../components/Footer'

const StemLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <StemNav toggle={toggle} />
      <StemSidebar isOpen={isOpen} toggle={toggle} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default StemLayout
