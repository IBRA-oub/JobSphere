import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
    return (
        <div className=' w-[90%] h-[95%] bg-[#3cb9a826] rounded-xl flex flex-col items-center'>
            <div className='w-full h-16  flex justify-center items-center'>
                <img src="/images/jobLogo-remove.png" alt="logo image" className='w-24 h-16' />
            </div>

            <div className='w-[90%] h-40  mt-10'>
                <Link href="/globalPages/dashboard/admin-dashboard">
                    <div className='mt-10 ml-1 flex items-center cursor-pointer hover:bg-[#3cb9a843] bg-[#3cb9a821] rounded-xl text-gray-500 hover:text-black py-5 pl-5'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#878787" d="M24 32C10.7 32 0 42.7 0 56L0 456c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24L64 56c0-13.3-10.7-24-24-24L24 32zm88 0c-8.8 0-16 7.2-16 16l0 416c0 8.8 7.2 16 16 16s16-7.2 16-16l0-416c0-8.8-7.2-16-16-16zm72 0c-13.3 0-24 10.7-24 24l0 400c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-400c0-13.3-10.7-24-24-24l-16 0zm96 0c-13.3 0-24 10.7-24 24l0 400c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-400c0-13.3-10.7-24-24-24l-16 0zM448 56l0 400c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-400c0-13.3-10.7-24-24-24l-16 0c-13.3 0-24 10.7-24 24zm-64-8l0 416c0 8.8 7.2 16 16 16s16-7.2 16-16l0-416c0-8.8-7.2-16-16-16s-16 7.2-16 16z" /></svg>
                        </span>
                        <p className='pl-4 text-xl   '>Dashboard</p>
                    </div>
                </Link>
                <Link href="/globalPages/dashboard/admin-preview">
                <div className='mt-5 ml-1 flex items-center cursor-pointer hover:bg-[#3cb9a843] bg-[#3cb9a821] rounded-xl text-gray-500 hover:text-black py-5 pl-5'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="22.5" viewBox="0 0 576 512"><path fill="#8f8f8f" d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 47-92.8 37.1c-21.3 8.5-35.2 29.1-35.2 52c0 56.6 18.9 148 94.2 208.3c-9 4.8-19.3 7.6-30.2 7.6L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zm39.1 97.7c5.7-2.3 12.1-2.3 17.8 0l120 48C570 277.4 576 286.2 576 296c0 63.3-25.9 168.8-134.8 214.2c-5.9 2.5-12.6 2.5-18.5 0C313.9 464.8 288 359.3 288 296c0-9.8 6-18.6 15.1-22.3l120-48zM527.4 312L432 273.8l0 187.8c68.2-33 91.5-99 95.4-149.7z" /></svg>
                    </span>
                    <p className='pl-4 text-xl '>Preview</p>
                </div>
                </Link>
            </div>

            <div className='w-full h-96  mt-16'>
                <img src="/images/upgrad.png" alt="upgrade image" className='h-full w-full' />

            </div>





        </div>
    )
}
