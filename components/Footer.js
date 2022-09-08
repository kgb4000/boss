import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Button from '../components/Button'

const Footer = () => {
  return (
    <>
      <FooterGuts>
        <div className="flex">
          <img src="images/ESP-logo.jpg" className="logo" />
          <Address>
            <h3>BOSS</h3>
            <p>ESP Education & Leadership Institute</p>
            <p>info@bossprograms.org</p>
            <a href="tel:562619-8460">(562) 619-8460</a>
          </Address>
          <Contact>
            <h3>Address</h3>
            <address>
              <p>7941 E. Cramer Street,</p>
              <p>Long Beach, CA</p>
              <p> 90808</p>
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
              <li>News & Events</li>
              <li>Donate</li>
              <li>Privacy Policy</li>
            </ul>
          </Menu>
          <Contact>
            <h3>Join Boss</h3>
            <p>Fill out the application and get started today..</p>
            <div className="footer-btn">
              <Link href="/boss-application" passHref>
                <a>
                  <FooterButton>Join Boss Today!</FooterButton>
                </a>
              </Link>
            </div>
          </Contact>
        </div>
      </FooterGuts>
      <LowerFooter>
        <p>BOSS &copy; {new Date().getFullYear()}. All rights reserved.</p>
        {/* <p>ESP Education & Leadership Institute.</p> */}
        <p></p>
      </LowerFooter>
    </>
  )
}

const FooterGuts = styled.footer`
  .logo {
    max-width: 200px;
    margin-bottom: 4rem;
  }
  font-size: 1.2rem;
  border-top: 1px solid #ddd;
  padding: 5rem 1.2rem;
  margin: 0 auto;
  margin-top: 2rem;
  background-color: #2c3e50;
  color: #fff;

  a {
    color: #fff;
    text-decoration: none;
  }

  @media (min-width: 970px) {
    .flex {
      display: grid;
      max-width: 90%;
      margin: 0 auto;
      grid-template-columns: repeat(2, 1fr);
      justify-content: space-between;
    }
  }

  @media (min-width: 1400px) {
    .flex {
      display: grid;
      max-width: 90%;
      margin: 0 auto;
      grid-template-columns: repeat(5, 1fr);
      justify-content: space-between;
    }
  }
`

const LowerFooter = styled.div`
  font-size: 1rem;
  background-color: #ecf0f1;
  padding: 2rem 0;
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
