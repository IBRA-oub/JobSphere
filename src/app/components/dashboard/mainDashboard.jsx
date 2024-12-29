import React from 'react'

export default function MainDashboard() {
    return (
        <section className='w-full h-full '>
            <div className='w-full h-[40%]  flex justify-center items-center '>

                <div className='w-[99%] mr-5 rounded-xl h-[90%] bg-gray-100 flex'>
                    <div className='w-1/2 h-full flex flex-col justify-center'>
                        <p className='text-5xl pl-10 font-semibold bungee'>
                            Hi , Brahim
                        </p>
                        <p className='pl-10 text-gray-400 pt-3'>
                            Ready to start your day with some insights and productivity
                        </p>

                    </div>
                    <div className='w-1/2 h-full  flex justify-center'>
                        <img src="/images/manage.png" className='h-full w-auto' alt="" />

                    </div>

                </div>

            </div>
            <div className='py-6'>
                <p className='text-xl text-gray-500'>
                    Overview
                </p>
            </div>

            <div className="grid grid-cols-2 w-full  gap-4 ">
              
                <div className="flex items-center justify-between bg-[#0054b7] text-white rounded-lg shadow-md p-6 w-full">
                    <div>
                        <p className="text-2xl font-bold">83</p>
                        <p className="text-sm">apply</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 640 512"><path fill="#ffffff" d="M128 0C110.3 0 96 14.3 96 32l0 192 96 0 0-32c0-35.3 28.7-64 64-64l224 0 0-96c0-17.7-14.3-32-32-32L128 0zM256 160c-17.7 0-32 14.3-32 32l0 32 96 0c35.3 0 64 28.7 64 64l0 128 192 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32l-320 0zm240 64l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM64 256c-17.7 0-32 14.3-32 32l0 13L187.1 415.9c1.4 1 3.1 1.6 4.9 1.6s3.5-.6 4.9-1.6L352 301l0-13c0-17.7-14.3-32-32-32L64 256zm288 84.8L216 441.6c-6.9 5.1-15.3 7.9-24 7.9s-17-2.8-24-7.9L32 340.8 32 480c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-139.2z"/></svg>
                </div>

               
                <div className="flex items-center justify-between bg-[#577ea7] text-white rounded-lg shadow-md p-6 w-[96%]">
                    <div>
                        <p className="text-2xl font-bold">10,000</p>
                        <p className="text-sm">Job</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"> <path fill="#ffffff" d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z" /></svg>
                       
                </div>

                
                <div className="flex items-center justify-between bg-[#b0eee6] text-white rounded-lg shadow-md p-6 w-full">
                    <div>
                        <p className="text-2xl font-bold">91</p>
                        <p className="text-sm">Unique Views</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5C7.305 4.5 3.48 7.4 1.5 12c1.98 4.6 5.805 7.5 10.5 7.5s8.52-2.9 10.5-7.5c-1.98-4.6-5.805-7.5-10.5-7.5zM12 15a3 3 0 100-6 3 3 0 000 6z" />
                    </svg>
                </div>

                
                <div className="flex items-center justify-between bg-[#5da7fe] text-white rounded-lg shadow-md p-6 w-[96%]">
                    <div>
                        <p className="text-2xl font-bold">126</p>
                        <p className="text-sm">Total Views</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5C7.305 4.5 3.48 7.4 1.5 12c1.98 4.6 5.805 7.5 10.5 7.5s8.52-2.9 10.5-7.5c-1.98-4.6-5.805-7.5-10.5-7.5zM12 15a3 3 0 100-6 3 3 0 000 6z" />
                    </svg>
                </div>
            </div>

        </section>
    )
}
