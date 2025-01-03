"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function TopNav({ sectionName }) {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('fullName');
        localStorage.removeItem('email');
        document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        router.push('/');
    }
    return (
        <section className='w-full h-full bg-white flex justify-between items-center'>
            <div className='w-[20%] h-3/4 '>
                <div>
                    <p className='font-bold text-xl'>{sectionName}</p>
                </div>
                <div className='text-gray-500'>

                    <span>Monady </span>
                    <span className='font-light text-sm'>29 December 2024 </span>
                </div>

            </div>
            <div className='w-[40%] h-full  flex items-center justify-end mr-5'>
                <div className='w-11 h-11 bg-[#58dbca78] rounded-xl mr-5 flex items-center justify-center'>
                    <p className='bungee text-xl'>
                        B B
                    </p>

                </div>
                <div className="relative inline-block text-left">
                    <div
                        className="flex items-center cursor-pointer group"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <p className="mr-3">Brahim Oubourrih</p>
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20"
                                width="12.5"
                                viewBox="0 0 320 512"
                                className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"
                                    }`}
                            >
                                <path
                                    fill="#000000"
                                    d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                                />
                            </svg>
                        </span>
                    </div>

                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-gray-100 rounded-md shadow-lg z-10">
                            <ul className="py-2">
                                <li className="px-4 py-2 hover:bg-gray-100 text-gray-400 hover:text-black cursor-pointer">Profile</li>
                                <li onClick={logout} className="px-4 py-2 hover:bg-gray-100 text-gray-400 hover:text-black cursor-pointer">Log Out</li>
                            </ul>
                        </div>
                    )}
                </div>


            </div>

        </section>
    )
}
