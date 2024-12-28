"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className='relative h-[100vh] w-full bg-[#020202] flex'>
      <img src="/images/office.jpg" alt="login image" className='absolute h-full w-full z-0' />
      <div className='z-10 absolute w-full h-full  flex justify-center items-center'>
        <div className='w-[30%] h-[70%] bg-[#0303037b] backdrop-blur-md shadow-2xl  rounded-3xl'>
          <div className='w-full flex flex-col  items-center text-center mt-7 text-4xl text-white'>
            <p className='bungee mb-2'>Welcome</p>
            <p className='h-1 border-b-2 w-[70%]  rounded-lg'></p>
          </div>
          <form action="" className='h-96 flex flex-col items-center  w-full  mt-10'>
            <div className='flex flex-col w-[80%]'>
              <label htmlFor="" className='text-white font-light'>Your email:</label>
              <div className='flex items-center w-full h-12 rounded-lg bg-white hover:border-[#3ec1b0] hover:ring hover:ring-[#3ec1b0] '>
                <input type="email" className=' w-[95%] h-11 rounded-lg outline-none pl-2 text-gray-600 ' />
                <span className='h-4 w-7 flex justify-center cursor-pointer '>
                  <svg xmlns="http://www.w3.org/2000/svg" height="20" width="25" viewBox="0 0 576 512"><path fill="#80808097" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 256l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16L80 384c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" /></svg>
                </span>
              </div>
            </div>
            <div className='flex flex-col w-[80%] mt-6'>
              <label htmlFor="" className='text-white font-light'>Your password:</label>

              <div className='flex items-center w-full h-12 rounded-lg bg-white hover:border-[#3ec1b0] hover:ring hover:ring-[#3ec1b0] '>
                <input type={showPassword ? "text" : "password"} className=' w-[95%] h-11 rounded-lg outline-none pl-2 text-gray-600  ' />
                <span className='h-4 w-7 flex justify-center cursor-pointer ' onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="25" viewBox="0 0 640 512"><path fill="#80808097" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" /></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="22.5" viewBox="0 0 576 512"><path fill="#80808097" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" /></svg>
                  )}
                </span>
              </div>

            </div>

            <button className='mt-8 hover:bg- h-11 w-[80%] rounded-lg text-white font-semibold outline-none pl-2 hover:bg-[#3ec1b0] bg-[#309689]'>
              Submit
            </button>
            <div className='w-[80%] text-end  text-sm font-light'>
              <Link href="/pages/auth/register">
                <span className='text-white'>
                  haven't account?
                </span>
                <span className='text-[#c7fdf7] '>
                  Register
                </span>
              </Link>
            </div>

            <div className='w-full h-28  flex justify-center space-x-2 items-center'>

              <div className='w-14 h-14 bg-white hover:border-2 hover:border-[#309689] rounded-2xl flex justify-center items-center cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 488 512"><path fill="#808080" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
              </div>
              <div className='w-14 h-14 bg-white rounded-2xl hover:border-2 hover:border-[#309689] flex justify-center items-center cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 320 512"><path fill="#808080" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
              </div>
              <div className='w-14 h-14 bg-white rounded-2xl hover:border-2 hover:border-[#309689] flex justify-center items-center cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 448 512"><path fill="#808080" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
              </div>
            </div>
          </form>

        </div>
      </div >
    </section >
  )
}
