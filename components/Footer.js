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
            <h3>Boss Programs</h3>
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
        <p>Boss Programs &copy; {new Date().getFullYear()}</p>
        <p>ESP Education & Leadership Institute.</p>
        <p>All rights reserved.</p>
      </LowerFooter>
    </>
  )
}

const FooterGuts = styled.footer`
  font-size: 1rem;
  border-top: 1px solid #ddd;
  padding: 5rem 1.2rem;
  margin: 0 auto;
  margin-top: 2rem;

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
      grid-template-columns: repeat(4, 1fr);
      justify-content: space-between;
    }
  }
`

const LowerFooter = styled.div`
  font-size: 1rem;
  background-color: #ecf0f1;
  margin-top: 3rem;
  padding: 3rem 0;
  text-align: center;

  p {
    margin-bottom: 1rem;
  }
`

const FooterButton = styled(Button)`
  margin: 0;
`

const Address = styled.div``

const Contact = styled.div`
  margin-top: 2rem;

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
margin-top: 2rem;
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
