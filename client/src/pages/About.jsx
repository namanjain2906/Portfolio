import React from 'react'
import AppFramedContent from '../components/AppFramedContent'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Memoji from '../assets/Dummy.png'

const About = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-dvh w-full flex items-center justify-center p-0 ">
      <AppFramedContent
        safeArea={{ top: 3, right: 4, bottom: 3, left: 4 }}
        heightClass="h-[95dvh] max-h-[900px]"
        className="max-w-[430px]"
      >
          <div className="absolute p-2 pt-4  max-md:p-5 inset-0 overflow-y-auto scrollbar-hide">
          {/* Header */}
          <div className="flex items-center justify-between p-4 pb-2">
            <button 
              onClick={() => navigate(-1)}
              className="text-white text-xl hover:text-gray-300 transition-colors"
            >
              <FaArrowLeft />
            </button>
            <h1 className="text-white text-lg font-semibold">About Me</h1>
            <div className="w-6"></div> {/* Spacer for centering */}
          </div>

          {/* Content */}
          <div className="px-6 py-4">
            {/* Name */}
            <h2 className="text-white text-xl font-bold  mb-6">
              NAMAN JAIN
            </h2>

            {/* Avatar */}
            <div className="flex justify-center mb-6">
              <div className="w-48 h-48 rounded-3xl bg-linear-to-br from-gray-700 to-gray-600 overflow-hidden flex items-center justify-center">
                <img 
                  src={Memoji} 
                  alt="Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info Cards */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 mb-6 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-blue-400 text-sm font-medium">AGE</span>
                <span className="text-white text-sm font-semibold">19</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-400 text-sm font-medium">LOCATION</span>
                <span className="text-white text-sm font-semibold">MORADABAD</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-400 text-sm font-medium">EDUCATION</span>
                <span className="text-white text-sm font-semibold">B. TECH</span>
              </div>
            </div>

            {/* Bio */}
            <div className="text-gray-300 text-sm leading-relaxed">
              <p>
                I’m a web developer skilled in MERN stack (MongoDB, Express.js, React, Node.js). I’m comfortable working with databases like MongoDB and MySQL and enjoy coding in Python and Java to create all sorts of projects. I’m curious, love solving problems, and get a kick out of turning ideas into real, user-friendly solutions while always learning something new in the tech world.
              </p>
            </div>
          </div>
        </div>
      </AppFramedContent>
    </div>
  )
}

export default About