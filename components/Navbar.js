/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { menuItems } from '../components/navItems'
import MenuItems from '../components/MenuItems'
import Link from 'next/link'
import { useAuth } from './Context/AuthContext'
import styled from 'styled-components'
import { FaBars, FaCaretDown } from 'react-icons/fa'
import { useRouter } from 'next/router'
import Button from './Button'
import { useState } from 'react'

const Navbar = ({ toggle }) => {
  const { user, logout } = useAuth()
  const router = useRouter()
  return (
    <Nav>
      <div className="logo">
        <Link href="/" passHref>
          <a>
            <img className="logo" src="/images/boss-color-logo.png" />
          </a>
        </Link>
      </div>
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
      <nav>
        <ul className="nav">
          {menuItems.map((menu, index) => {
            return <MenuItems items={menu} key={index} />
          })}
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
                <a>
                  <NavButton>STEM Login</NavButton>
                </a>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Nav>
  )
}

export default Navbar

const NavButton = styled(Button)`
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  margin: 0;
  a {
    color: #fff;
    text-decoration: none;

    :hover {
      border-bottom: none;
      font-weight: bold;
    }
  }
`

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
  background-color: #fff;
  padding: 00 1.2rem;
  border-bottom: 1px solid #eee;

  .logo {
    max-width: 10rem;

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

        a.text {
          color: #000;
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
