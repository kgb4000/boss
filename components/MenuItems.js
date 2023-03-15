import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Dropdown from '../components/Dropdown'

const MenuItems = ({ items }) => {
  let ref = useRef()
  const [dropdown, setDropdown] = useState(false)
  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false)
      }
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [dropdown])
  return (
    <li className="menu-items" ref={ref}>
      {items.submenu ? (
        <>
          <a
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{' '}
          </a>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <Link href={items.url} passHref>
          {items.title}
        </Link>
      )}
    </li>
  )
}

export default MenuItems
