"use client"
import { getJobs } from '@/lib/frontend/redux/features/jobSlice';
import { jobSelectors } from '@/lib/frontend/redux/selectors/jobSelectors';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../home/footer';
import Link from 'next/link';

export default function JobDetails({ jobId }) {
    const [jobDetail, setJobDetail] = useState(null);

    const jobs = useSelector(jobSelectors)
    const allJobs = jobs.jobs;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobs());
    }, [dispatch]);

    useEffect(() => {
        if (allJobs.length > 0) {
            const job = allJobs.find((job) => job._id === jobId);
            setJobDetail(job);
        }
    }, [allJobs, jobId]);

    const jobResponsibilies = jobDetail?.jobKeyResponsibilities?.split(',')
    const jobSkills = jobDetail?.jobProfessionalSkills?.split(',')

    if (!jobDetail) {
        return (
            <div class="flex items-center justify-center min-h-screen bg-gray-100">
                <div class="text-center">
                
                    <div class="animate-bounce mb-4 ">
                        <img src="/images/job-not-found.png" className='w-auto h-52' alt="" />
                    </div>

                    
                    <h1 class="text-3xl font-bold text-gray-700 mb-2">Job Not Found</h1>
                    <p class="text-gray-500 mb-4">We couldn't find the job you were looking for.</p>

                  
                    <Link href='/pages/page/all-job' class="px-6 py-2 text-white bg-[#309688] rounded-full hover:bg-[#3bb7a7] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out">
                        Go Back
                    </Link>
                </div>
            </div>

        )
    }


    return (
        <>
            <section className='min-h-[150vh]'>
                <div className='h-44 w-full bg-black text-white flex justify-center items-center'>
                    <p className="text-8xl font-bold text-white drop-shadow-[0_0px_10px_rgba(48,150,137,2)]">
                        Jobs Details
                    </p>
                </div>
                <div className='w-full mt-10 flex flex-col space-y-10 items-center '>

                    <div className='flex justify-between items-center w-[90%] h-8 '>

                        <div className=' bg-[#30968837] w-40 h-7 ml-2 rounded-lg'>
                            <p className='text-center font-light text-[#309688]'>
                                {new Date(jobDetail?.updatedAt).toLocaleString()}
                            </p>
                        </div>
                        <div className='mr-3 cursor-pointer'>
                        </div>

                    </div>
                    <div className='flex justify-between items-center w-[90%] h-8 mt-5 '>

                        <div className='h-24  w-full mt-3 flex items-center ml-2'>
                            <div className='w-16 h-16 bg-[#309688] rounded-full'>

                            </div>
                            <div className='ml-2'>
                                <p className='text-xl font-semibold'>
                                    {jobDetail?.jobTitle}
                                </p>
                                <p className='text-sm'>
                                    {jobDetail?.jobSubTitle}
                                </p>

                            </div>


                        </div>
                        <div className='mr-3 w-52 text-center px-4 py-2 bg-[#309688] rounded-md text-white cursor-pointer hover:bg-[#25756a] hover:shadow-sm  transition duration-300 ease-in-out'>
                            Apply Job
                        </div>

                    </div>
                    <div className='w-[90%]  flex space-x-7  h-16'>

                        <div className='w-[72%]  flex flex-col space-y-5 '>
                            <div className='w-full '>
                                <div>
                                    <p className='pl-3 text-gray-900 text-xl font-semibold'>Job Description</p>
                                </div>
                                <div className='pl-3 mt-3 font-light'>
                                    <p>
                                        {jobDetail?.jobDescription}
                                    </p>
                                </div>
                            </div>

                            <div className='w-full '>
                                <div>
                                    <p className='pl-3 text-gray-900 text-xl font-semibold'>Key Responsibilities</p>
                                </div>
                                <div className='pl-3 mt-3 font-light'>

                                    {jobResponsibilies?.map((responsibility, index) => (
                                        <p key={index}>- {responsibility}</p>
                                    ))}
                                </div>
                            </div>


                            <div className='w-full '>
                                <div>
                                    <p className='pl-3 text-gray-900 text-xl font-semibold'>Professional Skills</p>
                                </div>
                                <div className='pl-3 mt-3 font-light'>
                                    {jobSkills?.map((skill, index) => (
                                        <p key={index} className='flex items-center space-x-2'>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path fill="#2eff77" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                                            </span>
                                            <span>
                                                {skill}
                                            </span>
                                        </p>
                                    ))}


                                </div>
                            </div>


                        </div>



                        <div className='w-full md:w-[26%] flex flex-col h-[100vh] bg-[#30968850] rounded-lg p-4 space-y-7'>
                            <h2 className='font-semibold text-lg'>Job Overview</h2>
                            <div className='flex pl-6 items-center space-x-4 mt-5'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 448 512"><path fill="#309688" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg>
                                </div>
                                <div>
                                    <p>Job Title</p>
                                    <p className='text-[12px] font-light text-gray-700'>{jobDetail?.jobTitle}</p>
                                </div>
                            </div>
                            <div className='flex pl-6 items-center space-x-4 mt-5'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 384 512"><path fill="#309688" d="M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z" /></svg>
                                </div>
                                <div>
                                    <p>Company</p>
                                    <p className='text-[12px] font-light text-gray-700'>{jobDetail?.jobCompanyName}</p>
                                </div>
                            </div>

                            <div className='flex pl-6 items-center space-x-4 mt-5'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><path fill="#309688" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                                </div>
                                <div>
                                    <p>Job Type</p>
                                    <p className='text-[12px] font-light text-gray-700'>{jobDetail?.jobType}</p>
                                </div>
                            </div>


                            <div className='flex pl-6 items-center space-x-4 mt-5'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"> <path fill="#309688" d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z" /></svg>

                                </div>
                                <div>
                                    <p>Category</p>
                                    <p className='text-[12px] font-light text-gray-700'>{jobDetail?.jobCategory}</p>
                                </div>
                            </div>


                            <div className='flex pl-6 items-center space-x-4 mt-5'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 640 512"><path fill="#309688" d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8 512 128l-.7 0-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48 0 224 28.2 0 91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16L0 352c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-224-80 0zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128l0 224c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-208c0-8.8-7.2-16-16-16l-80 0zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" /></svg>
                                </div>
                                <div>
                                    <p>Experience</p>
                                    <p className='text-[12px] font-light text-gray-700'>{jobDetail?.jobExperience}</p>
                                </div>
                            </div>


                            <div className='flex pl-6 items-center space-x-4 mt-5'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 640 512"><path fill="#309688" d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" /></svg>
                                </div>
                                <div>
                                    <p>Degree</p>
                                    <p className='text-[12px] font-light text-gray-700'>{jobDetail?.jobDegree}</p>
                                </div>
                            </div>


                            <div className='flex pl-6 items-center space-x-4 mt-5'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><path fill="#309688" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>

                                </div>
                                <div>
                                    <p>offered Salary</p>
                                    <p className='text-[12px] font-light text-gray-700'>{jobDetail?.jobOfferedSalary}</p>
                                </div>
                            </div>


                            <div className='flex pl-6 items-center space-x-4 mt-5'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 384 512"><path fill="#309688" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>

                                </div>
                                <div>
                                    <p>Location</p>
                                    <p className='text-[12px] font-light text-gray-700'>{jobDetail?.jobLocation}</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </section>
            <Footer />
        </>
    )
}
