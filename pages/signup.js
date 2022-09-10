import { useState } from 'react'
import { useAuth } from '../components/Context/AuthContext'
import { useRouter } from 'next/router'

import Link from 'next/link'
import styled from 'styled-components'
import Button from '../components/Button'
import Layout from '../components/Layout/Layout'

const SignupPage = () => {
  const { user, signup } = useAuth()
  const router = useRouter()

  const [inputs, setInputs] = useState({
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
  }

  const handleSignIn = async (e) => {
    e.preventDefault()

    console.log(inputs)

    try {
      await signup(inputs.email, inputs.password)
      router.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Layout>
        <Signup className=" login container">
          <div>
            <h1>Sign up</h1>
            <form onSubmit={handleSignIn}>
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
              <SubmitButton type="submit">Signup</SubmitButton>
            </form>
            <p>
              Not a STEM member? Register{' '}
              <Link href="/register">
                <a>here</a>
              </Link>{' '}
              .
            </p>
          </div>
        </Signup>
      </Layout>
    </>
  )
}

const Signup = styled.div`
  h1 {
    margin-bottom: 1rem;
  }
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  height: 80vh;
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

  p {
    text-align: center;
  }
`

const SubmitButton = styled(Button)`
  width: 100%;
  margin: 0;
  margin-bottom: 1rem;
`

export default SignupPage
