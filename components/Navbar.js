import Link from 'next/link'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <div className="logo">
        <Link href="/" passHref>
          <a>BOSS</a>
        </Link>
      </div>
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
      <nav>
        <ul className="nav">
          <li>
            <Link href="/about" passHref>
              <a>About us</a>
            </Link>
          </li>
          <li>
            <Link href="/boss-program" passHref>
              <a>Our Programs</a>
            </Link>
          </li>
          <li>Gallery</li>
          <li>
            <Link href="/news" passHref>
              <a>News & Events</a>
            </Link>
          </li>
          <li>
            <Link href="/stem" passHref>
              <a>STEM</a>
            </Link>
          </li>
          <li>
            <Link href="/donate" passHref>
              <a>Donate</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </Nav>
  )
}

export default Navbar

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
  background-color: rgba(0, 0, 0, 0.8);
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
