import React from 'react'

export default function ApplyedJob() {
    return (
        <div className={`w-full h-52 bg-gray-100 rounded-md mt-4`}>
            <div className='flex justify-between items-center w-full h-8 '>

                <div className=' bg-[#acacac37] w-32 h-7 ml-2 rounded-lg'>
                    <p className='text-center font-light text-[#309688]'>

                        Status:  <span className='font-semibold'>Pending</span>
                    </p>
                </div>
                <div className='mr-3 cursor-pointer'>
                    <p>
                        <span className='font-semibold'>You  </span>
                        <span className='text-gray-500'>  applied for this job</span>
                    </p>
                </div>

            </div>
            <div className='h-24  w-full mt-3 flex items-center ml-2'>
                <div className='w-16 h-16 bg-[#309688] rounded-full'>

                </div>
                <div className='ml-2'>
                    <p className='text-xl font-semibold'>
                        Développeur Full Stack Javascript
                    </p>
                    <p className='text-sm'>
                        MERN satck , MNRN and MEAN
                    </p>

                </div>


            </div>
            <div className='h-14   w-full flex justify-between  items-center  mt-2 '>
                <div className='flex items-center justify-between w-3/4 h-full text-sm ml-2'>

                    <div className='flex  items-center'>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 512 512"> <path fill="#309688" d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z" /></svg>

                        </p>
                        <p className='text-gray-500 ml-3'>
                            Consultant
                        </p>
                    </div>
                    <div className='flex items-center'>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 512 512"><path fill="#309688" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                        </p>
                        <p className='text-gray-500 ml-3'>
                            Full time
                        </p>
                    </div>
                    <div className='flex items-center'>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 512 512"><path fill="#309688" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>

                        </p>
                        <p className='text-gray-500 ml-3'>
                            $40000 - $420000
                        </p>
                    </div>
                    <div className='flex items-center'>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 384 512"><path fill="#309688" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                        </p>
                        <p className='text-gray-500 ml-3'>
                            New-York, USA
                        </p>
                    </div>

                </div>
                <div className='mr-3 px-4 py-2 bg-red-300 rounded-md text-red-600 cursor-pointer hover:bg-red-400 hover:shadow-sm  transition duration-300 ease-in-out'>
                    Cancel
                </div>

            </div>

        </div>
    )
}
