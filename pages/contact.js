import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import HeroSection from '../components/HeroSection'
const contact = () => {
  return (
    <ContactUs>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        backgroundHeight="70vh"
        heroText="Contact Boss Programs"
        subText="Leveraging the power of sports to empower our young boys to soar."
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
    max-height: 130px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 0px 0px 0px 0px;
    margin: 0px 0px 30px 0px;
    padding: 5px 10px 5px 10px;
  }

  textarea {
    height: 200px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 0px 0px 0px 0px;
    padding: 1rem;
  }
`

const SendButton = styled(Button)`
  border-radius: 1px;
`

export default contact
