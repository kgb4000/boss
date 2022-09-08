import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import HeroSection from '../components/HeroSection'
const contact = () => {
  return (
    <ContactUs>
      <HeroSection
        backgroundImage="images/headers/contact-us-cover-img.jpg"
        backgroundHeight="70vh"
        heroText="Contact BOSS"
        subText="Contact us to see how you can help."
      />
      <section>
        <div className="container">
          <div className="contact-method">
            <h3>Email Address</h3>
            <p>eglenn@bossprograms.org</p>
          </div>
          <div className="contact-method">
            <h3>Phone</h3>
            <p>1(562)619-8460</p>
          </div>
          <div className="contact-method">
            <h3>Address</h3>
            <p>7941 E. Cramer Street, Long Beach, CA 90808</p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="phone" placeholder="Phone" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <SendButton>Send Message</SendButton>
          </form>
        </div>
      </section>
    </ContactUs>
  )
}

const ContactUs = styled.div`
  .contact-method {
    padding: 35px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  }

  input {
    min-height: 40px;
    line-height: 40px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 0px 0px 0px 0px;
    margin: 0px 0px 30px 0px;
    padding: 1rem;
    font: inherit;
  }

  textarea {
    height: 200px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 0px 0px 0px 0px;
    padding: 1rem;
    font: inherit;
  }
`

const SendButton = styled(Button)`
  border-radius: 1px;
`

export default contact
