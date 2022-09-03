import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Button from '../components/Button'
import HeroSection from '../components/HeroSection'

import React from 'react'

const BossApplication = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: null,
    },
  })

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    nickName: '',
    homePhone: '',
    mobilePhone: '',
    email: '',
    streetAddress: '',
    zipCode: '',
    school: '',
    grade: '',
    dateOfBirth: '',
    howDidYouHearAboutUs: '',
    homePhone: '',
    emergencyContactFirstName: '',
    emergencyContactLastName: '',
    relationship: '',
    emergencyContactMobilePhone: '',
  })

  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }

  const isEnabled = inputs.email.length && inputs.name > 0

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: {
          error: false,
          msg: msg,
        },
      })
      setInputs({
        name: '',
        email: '',
        website: '',
      })
    } else {
      setStatus({
        info: {
          error: true,
          msg: msg,
        },
      })
    }
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()

    setStatus((prevStatus) => ({
      ...prevStatus,
      submitting: true,
    }))

    const endpoint =
      'https://gjkpiayn2a.execute-api.us-east-1.amazonaws.com/production/freeminiseoaudit'

    const body = JSON.stringify({
      name: inputs.name,
      email: inputs.email,
      website: inputs.website,
    })

    console.log(body)

    const res = await fetch(endpoint, {
      method: 'POST',
      body,
    })

    const text = await res.text()
    handleResponse(res.status, text)
  }
  return (
    <>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        backgroundHeight="80vh"
        heroText="Boss Program Application"
      />
      <Application>
        <section>
          <div className="container">
            <h2>Fill Out the Form and Join Boss Programs Today!</h2>
            <p>
              We’re delivering year-round and multi-year programming around our
              6 BOSS Pillars including{' '}
              <Link href="/stem">
                <a>S.T.E.M focused academic enrichment</a>
              </Link>
              , career pathways, financial literacy, leadership, life skills,
              networking, noncognitive skills and personal development.
            </p>
            <h2>Enter Your Personal Information</h2>
            <form>
              <input
                type="text"
                value={inputs.firstName}
                onChange={handleOnChange}
                placeholder="First Name"
              />
              <input
                type="text"
                value={inputs.lastName}
                onChange={handleOnChange}
                placeholder="Last Name"
              />
              <input
                type="text"
                value={inputs.nickName}
                onChange={handleOnChange}
                placeholder="Nick Name"
              />
              <input type="text" placeholder="Home Phone" />
              <input type="text" placeholder="Mobile Phone" />
              <input
                type="email"
                value={inputs.email}
                onChange={handleOnChange}
                placeholder="Email"
              />
              <input type="text" placeholder="Street Address" />
              <input type="text" placeholder="State" />
              <input type="text" placeholder="Zip Code" />
              <input type="text" placeholder="School" />
              <input type="text" placeholder="Grade" />
              <input type="text" placeholder="Date of Birth" />
              <textarea placeholder="How did you hear about the program?"></textarea>
              <h4>Person to contact in case of emergency</h4>
              <input
                type="text"
                value={inputs.emergencyContactFirstName}
                onChange={handleOnChange}
                placeholder="First Name"
              />
              <input
                type="text"
                value={inputs.emergencyContactLastName}
                onChange={handleOnChange}
                placeholder="Last Name"
              />
              <input type="text" placeholder="Relationship" />
              <input type="text" placeholder="Mobile Phone" />
              <h4>References</h4>
              <p>
                Please provide a letter of reference from a school
                administrator, teacher, coach or counselor who can attest to
                your character and commitment to developing “whole”, positioned
                and prepared to live a life of purpose.
              </p>
              <input
                type="file"
                value={inputs.file}
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />
              <h4>Participation Agreement</h4>
              <p>
                By submitting this application, I affirm that the facts set
                forth in my application for participating are true and complete.
                Thank you for completing this application form and for your
                interest in participating in our Boss program. All the
                information recorded above is considered confidential.
              </p>
              <h4>Parent name/consent (if under 18):</h4>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="Date of Birth" />
              <Button>Send</Button>
            </form>
          </div>
        </section>
      </Application>
    </>
  )
}

export default BossApplication

const Application = styled.div`
  input {
    width: 100%;
    height: 70px;
    padding: 1rem;
    font-size: inherit;
    margin-bottom: 1rem;
  }
  textarea {
    width: 100%;
    height: 200px;
    font-size: inherit;
    padding: 1rem;
  }

  h4 {
    margin: 2rem 0;
  }
`
