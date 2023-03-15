import Link from 'next/link'
import { useAuth } from './Context/AuthContext'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { useRouter } from 'next/router'

const toggle = () => {
  setIsOpen(!isOpen)
}

const StemNav = ({ toggle }) => {
  const { user, logout } = useAuth()
  const router = useRouter()
  return (
    <Nav>
      <div className="logo">
        <Link href="/stem-portal" passHref>
          <a>BOSS</a>
        </Link>
      </div>
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
      <nav>
        <ul className="nav">
          <li>
            <Link href="/stem-portal" passHref>
              <a>About STEM Portal</a>
            </Link>
          </li>
          <li>
            <Link href="/stem-college-programs" passHref>
              <a>Student Resources</a>
            </Link>
          </li>
          <li>
            <Link href="/stem-college-programs" passHref>
              <a>Parent Resources</a>
            </Link>
          </li>
          <li>
            <Link href="/stem-college-programs" passHref>
              <a>Colleges</a>
            </Link>
          </li>

          <li>
            {user ? (
              <div>
                <div
                  onClick={() => {
                    logout()
                    router.push('/login')
                  }}
                >
                  <a>Logout</a>
                </div>
              </div>
            ) : (
              <Link href="/login" passHref>
                <a>STEM Portal</a>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Nav>
  )
}

export default StemNav

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    transform: translate(-100%. 60%);
    cursor: pointer;
    align-item: center;
    color: #fff;
    font-size: 2rem;
    height: 80px;
    line-height: 80px;
    align-items: center;
  }
`

const Nav = styled.header`
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  max-width: 100%;
  margin: 0 auto;
  height: 100px;
  line-height: 100px;
  z-idex: 1000;
  background-color: #2c3e50;
  padding: 00 1.2rem;

  .logo {
    font-weight: bold;
    font-size: 2rem;

    a {
      color: #fff;
      text-decoration: none;
    }
  }

  nav {
    display: none;

    @media screen and (min-width: 1023px) {
      display: flex;
  }

  .nav {
    display: none;
    font-size: 1rem;

    @media screen and (min-width: 1023px) {
      display: flex;
      li {
        list-style-type: none;
        margin: 0 1rem;
        line-height: 80px;

        a {
          color: #fff;
          text-decoration: none;

          :hover {
            border-bottom: 4px solid #fff;
            padding-bottom: 1rem;
          }
        }
      }
    }
  }
`
