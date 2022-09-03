import React from 'react'

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

const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

const Sibebar = ({ isOpen, toggle }) => {
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
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sibebar
