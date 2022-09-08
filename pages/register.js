import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Button from '../components/Button'
import HeroSection from '../components/HeroSection'

const RegisterPage = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: null,
    },
  })
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    grade: '',
    highSchool: '',
    highSchoolCity: '',
    highSchoolState: '',
    highestLevelOfScience: '',
    carrerGoals: '',
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
  }

  return (
    <>
      {/* <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        backgroundHeight="70vh"
        heroText="Register for S.T.E.M"
        subText="We empower our young boys to soar to new heights."
      /> */}
      <Login>
        <div>
          <div className="container">
            <h1>Register for STEM</h1>
            <form onSubmit={handleOnSubmit}>
              <input
                id="name"
                type="text"
                value={inputs.name}
                onChange={handleOnChange}
                placeholder="Name"
              />
              <input
                id="email"
                type="email"
                value={inputs.email}
                onChange={handleOnChange}
                placeholder="Email"
              />
              <input
                id="grade"
                type="text"
                value={inputs.grade}
                onChange={handleOnChange}
                placeholder="Grade"
              />
              <input
                id="highestLevelOfScience"
                type="text"
                value={inputs.highestLevelOfScience}
                onChange={handleOnChange}
                placeholder="Highest Level Of Science"
              />
              <input
                id="highSchool"
                type="text"
                value={inputs.highSchool}
                onChange={handleOnChange}
                placeholder="High School"
              />
              <input
                id="highSchool-city"
                type="text"
                value={inputs.highSchoolCity}
                onChange={handleOnChange}
                placeholder="High School City"
              />
              <input
                id="highSchool-state"
                type="text"
                value={inputs.highSchoolState}
                onChange={handleOnChange}
                placeholder="High School State"
              />
              <textarea
                id="carrerGoals"
                value={inputs.carrerGoals}
                onChange={handleOnChange}
                placeholder="Carrer Goals"
              ></textarea>
              <SubmitButton
                type="submit"
                disabled={status.submitting || isEnabled}
              >
                {!status.submitting
                  ? !status.submitted
                    ? 'Register!'
                    : 'Done!'
                  : 'Submitting...'}
              </SubmitButton>
              {status.info.error && (
                <div className="error">Error: {status.info.msg}</div>
              )}
              {!status.info.error && status.info.msg && (
                <div className="success">We Got Your Info!</div>
              )}
            </form>
            <p>
              Already registered? Log in{' '}
              <Link href="/login">
                <a>here</a>
              </Link>{' '}
              .
            </p>
          </div>
        </div>
      </Login>
    </>
  )
}

const Login = styled.div`
  margin-top: 4rem;
  h1 {
    margin-bottom: 1rem;
  }
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  form {
    max-width: 500px;
  }
  input {
    width: 100%;
    height: 40px;
    margin-bottom: 0.5rem;
    padding: 1rem;
    font-size: inherit;
  }

  textarea {
    height: 150px;
    padding: 1rem;
    font-size: inherit;
    width: 100%;
    margin-bottom: 0.5rem;
  }

  p {
    text-align: center;
  }
`
const SubmitButton = styled(Button)`
  width: 100%;
  margin: 0;
  margin-bottom: 1rem;
`

export default RegisterPage
