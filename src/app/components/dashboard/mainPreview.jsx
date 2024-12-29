import React from 'react'

export default function MainPreview() {
    return (
        <section className='w-full h-full '>
            <div className={`w-[98%] h-52 bg-gray-100 rounded-md mt-4`}>
                <div className='flex justify-between items-center w-full h-8 '>

                    <div className=' bg-[#30968837] w-28 h-7 ml-2 rounded-lg'>
                        <p className='text-center font-light text-[#309688]'>
                            10 min ago
                        </p>
                    </div>
                    <div className='mr-3 cursor-pointer'>
                    </div>

                </div>
                <div className='h-24  w-full flex items-center ml-2'>

                    <div className='ml-2'>
                        <p className='text-xl font-semibold'>
                            Développeur Full Stack Javascript
                        </p>
                        <p className='text-sm'>
                            MERN satck , MNRN and MEAN
                        </p>

                    </div>


                </div>
                <div className='h-14  w-full flex justify-between items-center  mt-2 '>
                    <div className='flex items-center justify-between w-1/2 h-full text-sm ml-2'>
                        <p>
                            <span className='font-semibold'>Brahim Oubourrih </span>
                            <span className='text-gray-500'>  Apply for this job</span>
                        </p>
                    </div>
                    <div className='flex'>
                        <div className='mr-3 px-4 py-2 bg-green-300 rounded-md text-green-600 cursor-pointer hover:bg-green-400 hover:shadow-sm  transition duration-300 ease-in-out'>
                            Accept
                        </div>
                        <div className='mr-3 px-4 py-2 bg-red-300 rounded-md text-red-600 cursor-pointer hover:bg-red-400 hover:shadow-sm  transition duration-300 ease-in-out'>
                            Reject
                        </div>
                    </div>


                </div>

            </div>
        </section>
    )
}
