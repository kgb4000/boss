import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'

const LoginPage = () => {
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
    password: '',
  })

  const handleOnChange = (e) => {
    e.persist()
    console.log(e.target.value)
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

  const handleOnSubmit = async (e) => {
    e.preventDefault()

    setStatus((prevStatus) => ({
      ...prevStatus,
      submitting: true,
    }))
  }

  return (
    <>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        backgroundHeight="70vh"
        heroText="Log in to STEM"
      />
      <Login className=" login container">
        <div>
          <h1>Log in</h1>
          <form onSubmit={handleOnSubmit}>
            <input
              id="name"
              type="text"
              required
              value={inputs.name}
              onChange={handleOnChange}
              placeholder="Name *"
            />
            <input
              id="email"
              type="email"
              required
              value={inputs.email}
              onChange={handleOnChange}
              placeholder="Email *"
            />
            <input
              id="password"
              type="password"
              required
              value={inputs.password}
              onChange={handleOnChange}
              placeholder="Password *"
            />
            <SubmitButton
              type="submit"
              disabled={status.submitting || isEnabled}
            >
              {!status.submitting
                ? !status.submitted
                  ? 'Log in!'
                  : 'Done!'
                : 'Submitting...'}
            </SubmitButton>
            {status.info.error && (
              <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && (
              <div className="success">Logged in!</div>
            )}
          </form>
          <p>
            Not a STEM member? Register{' '}
            <Link href="/register">
              <a>here</a>
            </Link>{' '}
            .
          </p>
        </div>
      </Login>
    </>
  )
}

const Login = styled.div`
  h1 {
    margin-bottom: 1rem;
  }
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  height: 100vh;
  form {
    max-width: 500px;
  }
  input {
    width: 100%;
    height: 70px;
    margin-bottom: 0.5rem;
    padding: 1rem;
    font-size: inherit;
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

export default LoginPage
