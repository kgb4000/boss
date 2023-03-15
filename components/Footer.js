/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Button from '../components/Button'

const Footer = () => {
  return (
    <>
      <FooterGuts>
        <div className="flex">
          <Address>
            <img
              src="images/boss-logo-white.png"
              className="logo"
              alt="BOSS Logo"
            />
            <p>info@bossprograms.org</p>
            <a href="tel:562619-8460">(562) 619-8460</a>
          </Address>
          <Contact>
            <h3>Address</h3>
            <address>
              <p>7941 E. Cramer Street,</p>
              <p>Long Beach, CA 90808</p>
            </address>
          </Contact>
          <Menu>
            <h3>Menu</h3>
            <ul className="footer-menu">
              <li>
                <Link href="/about">
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/boss-program">
                  <a>Our Programs</a>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <a>News & Events</a>
                </Link>
              </li>
              <li>
                <Link href="/donate" passHref>
                  <a>Donate</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" passHref>
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </Menu>
          <Contact>
            <h3>Join BOSS</h3>
            <p>Fill out the application and get started today.</p>
            <div className="footer-btn">
              <a
                href="https://bossprograms.app.neoncrm.com/forms/student-application"
                target="_blank"
                rel="noreferrer"
              >
                <FooterButton>Join BOSS Today!</FooterButton>
              </a>
            </div>
          </Contact>
        </div>
        <LowerFooter>
          <p>BOSS &copy; {new Date().getFullYear()}. All rights reserved.</p>
          <p>
            <small>
              Made by{' '}
              <Link href="https://bowieseo.com">
                <a>Bowie SEO</a>
              </Link>
            </small>
          </p>
        </LowerFooter>
      </FooterGuts>
    </>
  )
}

const FooterGuts = styled.footer`
  .flex {
    padding: 0 1.2rem;
  }
  background-image: linear-gradient(
      to bottom,
      rgb(37, 38, 56),
      rgba(37, 38, 56, 0.37)
    ),
    url('images/long-beach-background.webp');
  background-position: center;
  background-size: cover;
  padding: 2rem 0;
  left: 0px;
  top: 0px;
  right: 0px;
  width: 100%;
  height: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  .logo {
    max-width: 200px;
    margin: 0;
    margin-bottom: 1rem;
  }
  font-size: 1.2rem;
  border-top: 1px solid #ddd;
  margin: 0 auto;
  margin-top: 2rem;
  background-color: #2c3e50;
  color: #fff;

  a {
    color: #fff;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    .flex {
      display: grid;
      max-width: 80%;
      margin: 0 auto;
      grid-template-columns: repeat(2, 1fr);
      justify-content: space-between;
    }
  }

  @media (min-width: 1400px) {
    .flex {
      display: grid;
      max-width: 80%;
      margin: 0 auto;
      grid-template-columns: repeat(4, 1fr);
      justify-content: space-between;
      padding-top: 6rem;
      padding-bottom: 6rem;
    }
  }
`

const LowerFooter = styled.div`
  font-size: 1rem;
  text-align: center;

  p {
    margin-bottom: 0;
  }
`

const FooterButton = styled(Button)`
  margin: 0;
`

const Address = styled.div`
  margin-bottom: 4rem;
`

const Contact = styled.div`
  margin-bottom: 4rem;

  input {
    display: block;
    height: 70px;
    margin-bottom: 0.5rem;
    width: 100%;
    padding: 1rem;
    font-size: inherit;
  }
  input[type='submit'] {
    padding: 0;
  }

  @media (min-width: 970px) {
    margin-top: 0;
  }

  @media (min-width: 1400px) {
    margin-top: 0;
  }
`

const Menu = styled.nav`
margin-bottom: 4rem;
  ul {
    margin-top: 2rem;
    padding: 0;
  }
  .footer-menu {
    list-style-type: none;

    li {
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 768px) {
    margin-top: 0;
    }
  }

  
`

export default Footer
