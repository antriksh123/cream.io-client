import { useContext, useState } from 'react'
import Button from "../tailwind/Button";
import LandingPageImg from "./../images/landing_img.jpg";
import Logo from "./../svg/logo.svg";
import AuthContext from '../contexts/AuthContext';
import Modal from '../tailwind/Modal'
import axios from 'axios'

function Home() {
  const [openModal, setOpenModal] = useState(false)
  const [callId, setCallId] = useState(null)
  const {userData, setUserData} = useContext(AuthContext)

  const logout = e => {
    setUserData({ token: undefined, user: undefined })
    localStorage.setItem('auth-token', '')
  }

  const createNewCall = async e => {
    const callRes = await axios.post("/api/create-call", {adminId: userData.user.id})
    setCallId(callRes.data.savedCall._id)
    setOpenModal(prev => !prev)
  }

  return (
    <div className="w-full h-screen container mx-auto p-6">
      {openModal ? <Modal callId={callId} setOpenModal={setOpenModal} /> : null}
      <div className="w-full flex items-center justify-between">
        <a
          className="flex items-center text-red-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl dark:text-red-200"
          href="/"
        >
        <img src={Logo} alt=""/>{" "}
          CREAM.IO
        </a>
      </div>

      <div class="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/* Left Col */}
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-red-500 font-bold leading-tight text-center md:text-left slide-in-bottom-h1 dark:text-red-400">
            Cream.io
          </h1>
          <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle text-gray-500 dark:text-gray-200">
            Making video chatting more accessible for all in these trying times.
          </p>

          {!userData.token ? <Button
            text="Join Now"
            bgColor="red"
            ringColor="red"
            textColor="white"
            routeTo="/signup"
          /> 
          : 
          <div className="flex">
            <button
              onClick={e => createNewCall(e)}
              className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:bg-red-400 mx-4">
              Start New Call
            </button>
            <button
              onClick={logout}
              className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-400 mx-4">
              Logout
            </button>
          </div>}
        </div>

        {/* Right Col */}
        <div class="w-full xl:w-3/5 py-6 overflow-y-hidden">
          <img
            class="w-5/6 mx-auto lg:mr-0 slide-in-bottom"
            src={LandingPageImg}
          />
        </div>

        {/* Footer */}
        <div class="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
          <a class="text-gray-500 no-underline hover:no-underline" href="#">
            &copy; Cream.io 2020
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
