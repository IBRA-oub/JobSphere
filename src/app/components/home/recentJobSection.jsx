import React from 'react'
import JobCard from './jobCard'

export default function RecentJobSection() {
    return (
        <section className='mt-10 w-full  flex justify-center'>
            <div className='w-[95%] h-full '>
                <div>
                    <p className='text-5xl font-semibold pb-2'>
                        Recent Jobs Available
                    </p>
                    <div className='flex justify-between items-center w-full h-10 '>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, dolor.
                        </p>
                        <p className='text-[#309689] flex justify-center items-center cursor-pointer hover:border-2 hover:border-[#309689] px-3 py-1 rounded-md'>
                           <span>
                            view all
                            </span> 
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 448 512"><path fill="#309689" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                            </span>
                        </p>

                    </div>
                </div>
                <div className='flex flex-col  items-center w-full mt-5'>
                <JobCard width={'90%'}/>
                <JobCard width={'90%'}/>
                <JobCard width={'90%'}/>
                </div>
            </div>


        </section>
    )
}
