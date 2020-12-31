import React, { useState } from "react";
import Checkbox from "../tailwind/Checkbox";
import Input from '../tailwind/Input'
import SubmitButton from "../tailwind/SumitButton";
import Logo from "./../svg/logo.svg";
import { Link, useHistory } from 'react-router-dom'
import ErrorAlert from "../tailwind/ErrorAlert";
import axios from 'axios'

function Signup() {
  const history = useHistory()

  const [username, setUsername] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [passwordConfirmation, setPasswordConfirmation] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setLoading(true)
      const newUser = {username, email, password, passwordConfirmation}
      const registerRes = await axios.post(
        '/signup',
        newUser
      )
      history.push('/signin')
    }
    catch (err) {
      setError(err.response.data)
    }

    setLoading(false)
  }

  return (
    <>
      <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
            <img src={Logo} className="mx-auto h-14 w-auto" alt="Cream.io Logo"/>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-200">
              Sign up today
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
              Or {" "}
              <Link to="/signin" class="font-medium text-red-600 hover:text-red-500 dark:text-red-400">
                sign in to your account
              </Link>
            </p>
          </div>
          {error && <ErrorAlert text={error.msg} />}
          <form class="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div class="rounded-md shadow-sm -space-y-px">
            <div>
                <label for="username" class="sr-only">Username</label>
                <Input id="username" name="username" type="text" ringColor="red" widthFull="w-full" value={username} onChangeFunc={e => setUsername(e.target.value)} roundedDirection="t" placeholder="Username" />
              </div>
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <Input id="email-address" name="email" type="name" ringColor="red" widthFull="w-full" value={email} onChangeFunc={e => setEmail(e.target.value)} placeholder="Email address" />
              </div>
              <div>
                <label for="password" class="sr-only">Password</label>
                <Input id="password" widthFull="w-full" name="password" ringColor="red" value={password} onChangeFunc={e => setPassword(e.target.value)} type="password" placeholder="Password" />
              </div>
              <div>
                <label for="passwordConfirmation" class="sr-only">Password Confirmation</label>
                <Input id="passwordConfirmation" widthFull="w-full" name="passwordConfirmation" ringColor="red" value={passwordConfirmation} onChangeFunc={e => setPasswordConfirmation(e.target.value)} roundedDirection="b" type="password" placeholder="Password Confirmation" />
              </div>
            </div>

            <div class="flex items-center justify-between">
              <Checkbox id="remember_me" name="remember_me" text="Remember Me" />
            </div>

            <div>
              <SubmitButton
                text="Sign Up"
                bgColor="red"
                ringColor="red"
                textColor="white"
                widthFull="w-full"
                disabled={loading}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup;
