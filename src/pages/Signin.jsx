import React, { useContext, useState } from "react";
import Checkbox from "../tailwind/Checkbox";
import Input from '../tailwind/Input'
import SubmitButton from "../tailwind/SumitButton";
import Logo from "./../svg/logo.svg";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import AuthContext from '../contexts/AuthContext';
import ErrorAlert from "../tailwind/ErrorAlert";

function Signin() {
  const history = useHistory()

  const {userData, setUserData} = useContext(AuthContext)

  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [error, setError] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      setError(null)
      const loginRes = await axios.post("/api/login", {username, password})
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user
      })
      localStorage.setItem('auth-token', loginRes.data.token)
      history.push('/')
    }
    catch (err) {
      setError(err.response.data)
    }
  }

  return (
    <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <img src={Logo} className="mx-auto h-14 w-auto" alt="Cream.io Logo"/>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-200">
            Sign in to your account
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
            Or {" "}
            <Link to="/signup" class="font-medium text-red-600 hover:text-red-500 dark:text-red-400">
                sign up today
            </Link>
          </p>
        </div>
        {error && <ErrorAlert text={error.msg} />}
        <form class="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="username" class="sr-only">Username</label>
              <Input id="username" name="username" type="text" ringColor="red" widthFull="w-full" roundedDirection="t" value={username} onChangeFunc={e => setUsername(e.target.value)} placeholder="Username" />
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <Input id="password" widthFull="w-full" name="password" type="password" ringColor="red" roundedDirection="b" type="password" value={password} onChangeFunc={e => setPassword(e.target.value)} placeholder="Password" />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <Checkbox id="remember_me" name="remember_me" text="Remember Me" />

            <div class="text-sm">
              <a href="#" class="font-medium text-red-600 hover:text-red-500 dark:text-red-400">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <SubmitButton
              text="Sign In"
              bgColor="red"
              ringColor="red"
              textColor="white"
              widthFull="w-full"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signin;
