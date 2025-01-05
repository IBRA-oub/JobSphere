"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const [connected, setConnect] = useState(false)
    const [userEmail, setUserEmail] = useState(null);
    const router = useRouter()
    useEffect(() => {
        const email = localStorage.getItem('email');
        if (email) {
            setConnect(true);
            setUserEmail(email); 
        }
    }, [])
    const handleClick =()=>{
        if(userEmail === 'brahimoubourrih@gmail.com'){
            router.push('/globalPages/dashboard/admin-dashboard')
        }else{
            router.push('/globalPages/dashboard/user-dashboard')
        }
    }

    

    return (
        <nav className="w-full h-16 bg-black text-white flex justify-around items-center ">
            <div>
                <p>
                    <Image
                        src="/images/jobLogo-remove.png"
                        alt="Logo"
                        width={90}
                        height={90}
                    />

                </p>
            </div>
            <div className="flex justify-between w-96  text-gray-400 ">
                <Link href="/" className="hover:text-white">Home </Link>
                <Link href="/globalPages/job-pages/all-job" className="hover:text-white">Jobs </Link>
                <Link href="/" className="hover:text-white">About Us </Link>
                <Link href="/" className="hover:text-white">Contact Us </Link>
            </div>
            {connected ?
                <div onClick={handleClick} className="w-32 flex justify-center cursor-pointer ">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 448 512"><path fill="#00d1ce" d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" /></svg>
                    </span>
                </div>
                :
                <div className="w-32 flex justify-between">
                    <button className="mr-4 hover:drop-shadow-2xl"> <Link href="/globalPages/auth/login">Login</Link> </button>
                    <button className="py-2 rounded-md px-5 bg-[#309689] hover:bg-[#298377] hover:shadow-sm hover:shadow-white transition duration-500 ease-in-out"><Link href="/globalPages/auth/register">Register</Link></button>
                </div>
            }

        </nav>
    )
}
