"use client"
import Link from 'next/link';
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
            <div className='w-[20%] h-3/4 flex  items-center '>
                <Link href='/'>
                    <div className='mr-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path fill="#309689" d="M240.8 4.8C250.3 10.6 256 20.9 256 32l0 72 89 0c3.6-13.8 16.1-24 31-24l88 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-88 0c-14.9 0-27.4-10.2-31-24l-89 0 0 72c0 11.1-5.7 21.4-15.2 27.2s-21.2 6.4-31.1 1.4l-192-96C6.8 151.2 0 140.1 0 128s6.8-23.2 17.7-28.6l192-96c9.9-5 21.7-4.4 31.1 1.4zM288 256c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-64zM32 384l96 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm192 0l256 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32z" /></svg>
                    </div>
                </Link>
                <div className='flex flex-col'>
                    <div>
                        <p className='font-bold text-xl'>{sectionName}</p>
                    </div>
                    <div className='text-gray-500'>

                        <span>Monady </span>
                        <span className='font-light text-sm'>29 December 2024 </span>
                    </div>
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
