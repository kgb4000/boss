import React from 'react'
import { useAuth } from '../Context/AuthContext'
import { useRouter } from 'next/router'

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarItem,
  SidebarLink,
  SidebarMenu,
  SidebarLinkA,
  SidebarBtnWrap,
  SidebarBtnLink,
  SidebarBtnLinkA,
} from './SidebarElements'

const Sibebar = ({ isOpen, toggle }) => {
  const { user, logout } = useAuth()
  const router = useRouter()
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarItem>
              <SidebarLink href="/about">
                <SidebarLinkA>About</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="/boss-program">
                <SidebarLinkA>Boss Programs</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="/news">
                <SidebarLinkA>News & Events</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="/stem">
                <SidebarLinkA>STEM</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="/donate">
                <SidebarLinkA>Donate</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="/contact">
                <SidebarLinkA>Contact us</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              {user ? (
                <div>
                  <div
                    onClick={() => {
                      logout()
                      router.push('/login')
                    }}
                  >
                    <SidebarLinkA>Logout</SidebarLinkA>
                  </div>
                </div>
              ) : (
                <SidebarLink href="/login" passHref>
                  <SidebarLinkA>STEM Portal</SidebarLinkA>
                </SidebarLink>
              )}
            </SidebarItem>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sibebar
