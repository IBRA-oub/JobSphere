"use client"
import { register } from '@/lib/frontend/redux/features/registerSlice';
import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch, } from 'react-redux';
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


export default function page() {
    const dispatch = useDispatch()
    const router = useRouter()
    const [data, setData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await dispatch(register(data))
            console.log(response)
            
            if (response.payload.status == 201) {
               
                toast.success('registration successfully');
                router.push('/globalPages/dashboard/user-dashboard');
            }
            else if (response.payload.status == 409) {
                toast.error('Email Already Exist');
            }
            else if (response.payload.status == 500) {
                toast.error('All Input Required');
            }
            else if (response.error.message === 'Rejected') {
                toast.error('All Input Required');
            }
            else {
                toast.error('Something Wrong');
            }
        } catch (error) {
            return error
        }

    }

    return (
        <section className='relative h-[100vh] w-full shadow-2xl flex justify-center items-center'>
            <img src="/images/register.png" alt="login image" className='absolute h-[95%] w-[97%] z-0 rounded-[40px]' />
            <div className='z-10 absolute w-[95%]  h-[91.8%]  flex justify-end items-center'>
                <div className='w-1/2 h-full  rounded-3xl flex flex-col items-center shadow-2xl  bg-white'>
                    <div className='w-full flex flex-col  items-center text-center text-4xl text-white'>
                        <img src="/images/jobLogo-remove.png" alt="logo image" className='w-32 h-24' />
                        <p className='bungee mb-4 text-black'>Create Account</p>
                    </div>

                    <form onSubmit={handleSubmit} className=' h-auto flex flex-col items-center   w-[90%]  '>
                        <div className='flex w-[80%] justify-between '>
                            <div className='flex flex-col w-[48%]'>
                                <label htmlFor="" className='text-black font-base '> fullName:</label>
                                <input onChange={handleChange} name='fullName' type="text" placeholder='bahim oubourrih' className='mt-2 border-2 border-gray-300 h-11 font-light rounded-lg outline-none pl-2 text-gray-600 focus:border-[#3ec1b0] focus:border-2  ' />
                            </div>
                            <div className='flex flex-col w-[48%]'>
                                <label htmlFor="" className='text-black font-base'> Phone Number:</label>
                                <input onChange={handleChange} name='phoneNumber' type="number" placeholder='061234567' className='mt-2 font-light border-2 border-gray-300 h-11 rounded-lg outline-none pl-2 text-gray-600 focus:border-[#3ec1b0] focus:border-2' />

                            </div>
                        </div>

                        <div className='flex flex-col w-[80%] mt-6'>
                            <label htmlFor="" className='text-black font-base'> email:</label>
                            <input onChange={handleChange} name='email' type="text" placeholder='example@gmail.com' className='mt-2 h-11 border-2 border-gray-300 font-light rounded-lg outline-none pl-2 text-gray-600 focus:border-[#3ec1b0] focus:border-2' />

                        </div>
                        <div className='flex flex-col w-[80%] mt-6'>
                            <label htmlFor="" className='text-black font-base'> password:</label>
                            <input onChange={handleChange} name='password' type="password" placeholder='**********' className='mt-2 h-11 border-2 border-gray-300 font-light rounded-lg outline-none pl-2 text-gray-600 focus:border-[#3ec1b0] focus:border-2 ' />
                        </div>

                        <button className='mt-8 hover:bg- h-11 w-[80%] rounded-lg text-white  font-semibold outline-none pl-2 hover:bg-[#26796e] bg-[#346245]'>
                            Submit
                        </button>


                        <div className='w-full h-36  flex flex-col justify-center space-y-2 items-center'>
                            <div>
                                <p>or sign up with</p>
                            </div>
                            <div className='flex space-x-2'>

                                <div className='w-14 h-14 bg-gray-200 hover:border-2 hover:border-[#309689] rounded-2xl flex justify-center items-center cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 488 512"><path fill="#808080" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                                </div>
                                <div className='w-14 h-14 bg-gray-200 rounded-2xl hover:border-2 hover:border-[#309689] flex justify-center items-center cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 320 512"><path fill="#808080" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
                                </div>
                                <div className='w-14 h-14 bg-gray-200 rounded-2xl hover:border-2 hover:border-[#309689] flex justify-center items-center cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 448 512"><path fill="#808080" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                                </div>
                            </div>

                        </div>

                    </form>

                    <div className='w-[80%]  text-center h-10  text-sm font-light'>
                        <Link href="/globalPages/auth/login">

                            <span className='text-black'>
                                Have an account?
                            </span>
                            <span className='text-[#346245] pl-3 font-semibold '>
                                Log in
                            </span>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}
