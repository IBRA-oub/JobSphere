import React from 'react'
import JobCard from '../home/jobCard'

export default function FilterSection() {
    return (
        <>
            <div className=' w-[90%] flex  flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
                {/* filter options */}

                <div className='min-w-60 bg-[#EBF5F4] rounded-lg'>
                    <div className=' border borber-gray-300 pl-5 py-3 mt-6 block sm:block'>
                        <p className='mb-3 text-sm font-medium'>
                            SEARCH BY JOB TITLE
                        </p>

                        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                            <input type="text" className='outline-none w-[90%] h-8 rounded-md  pl-2' placeholder='job title..' />
                        </div>

                        <p className='my-3 text-sm font-medium'>
                            LOCATION
                        </p>

                        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                            <select className='outline-none w-[90%] h-8 rounded-md  pl-2'>
                            <option value="">Agadir</option>
                            <option value="">Casablanca</option>
                            <option value="">Marrakech</option>
                            <option value="">Rabat</option>
                            <option value="">Tangie</option>
                            </select>
                        </div>
                    </div>
                    {/* categories filter */}

                    <div className=' border borber-gray-300 pl-5 py-3 mt-6 block sm:block'>
                        <p className='mb-3 text-sm font-medium'>
                            CATEGORIES
                        </p>

                        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                            <p className='flex gap-2'>
                                <input type="checkbox" className='w-3' value={'Commerce'} />Commerce

                            </p>
                            <p className='flex gap-2'>
                                <input type="checkbox" className='w-3' value={'Telecomunications'} />Telecomunications

                            </p>
                            <p className='flex gap-2'>
                                <input type="checkbox" className='w-3' value={'IT'} />IT
                            </p>
                            <p className='flex gap-2'>
                                <input type="checkbox" className='w-3' value={'HotelTourism'} />Hotel & Tourism
                            </p>
                            <p className='flex gap-2'>
                                <input type="checkbox" className='w-3' value={'Education'} />Education
                            </p>
                            <p className='flex gap-2'>
                                <input type="checkbox" className='w-3' value={'FinancialServices'} />Financial Services
                            </p>

                        </div>
                    </div>

                    {/* job type filter*/}


                    <div className=' border borber-gray-300 pl-5 py-3 my-5 block'>
                        <p className='mb-3 text-sm font-medium'>
                            JOB TYPE
                        </p>

                        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                            <p className='flex gap-2'>
                                <input type="checkbox" className=' w-3' value={'FullTime'} />Full Time
                            </p>
                            <p className='flex gap-2'>
                                <input type="checkbox" className='w-3' value={'Hybrid'} />Hybrid

                            </p>
                            <p className='flex gap-2'>
                                <input type="checkbox" className='w-3' value={'Remot'} />Remot

                            </p>

                        </div>
                    </div>
                </div>
                {/* right side */}
                <div className='flex-1'>

                    <div className='flex justify-between text-base sm:text-2xl mb-4'>

                        <div className='text-sm text-gray-500'>
                            Showing 6-6 of 10 results
                        </div>
                        {/* job sort */}

                        <div className='border-2 border-[#298377] hover:border-[#37af9f] py-2 px-7 rounded-md text-sm  flex cursor-pointer'>
                            <p className='text-[#298377] hover:text-[#37af9f] mr-1'>Sort by : latest</p>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#298377" d="M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" /></svg>
                            </span>

                        </div>

                    </div>

                    {/* Map jobs */}

                    <div className=''>
                        <JobCard width={'100%'}/>
                        <JobCard width={'100%'}/>
                        <JobCard width={'100%'}/>
                        <JobCard width={'100%'}/>

                    </div>

                </div>
            </div>
        </>
    )
}
