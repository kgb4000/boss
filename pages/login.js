import { useState } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../components/Context/AuthContext'

import Link from 'next/link'
import styled from 'styled-components'
import Button from '../components/Button'
import Layout from '../components/Layout/Layout'

const LoginPage = () => {
  const router = useRouter()
  const { user, login } = useAuth()
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

  const isEnabled = inputs.email.length && inputs.name > 0

  const handleLogIn = async (e) => {
    e.preventDefault()

    // console.log(user)

    try {
      await login(inputs.email, inputs.password)
      router.push('/stem-portal')
    } catch (err) {
      console.error(err)
    }
    then(() => console.log('Woops!!'))
  }

  return (
    <>
      <Layout>
        <Login className=" login container">
          <div>
            <h1>Log in</h1>
            <form onSubmit={handleLogIn}>
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
              <SubmitButton disabled={isEnabled}>Log in!</SubmitButton>
            </form>
            <p>
              Not a STEM member? Register{' '}
              <Link href="/register">
                <a>here</a>
              </Link>
              .
            </p>
          </div>
        </Login>
      </Layout>
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
  height: 80vh;
  form {
    max-width: 300px;
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

export default LoginPage
