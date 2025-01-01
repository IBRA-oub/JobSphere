"use client"
import React, { useEffect, useState } from 'react'
import JobCard from '../home/jobCard'
import { useDispatch, useSelector } from 'react-redux';
import { jobSelectors } from '@/lib/frontend/redux/selectors/jobSelectors';
import { getJobs } from '@/lib/frontend/redux/features/jobSlice';

export default function FilterSection() {
    // dispatch data
    const jobs = useSelector(jobSelectors)
    const allJobs = jobs.jobs;
    const dispatch = useDispatch();

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 4;


    useEffect(() => {
        dispatch(getJobs());
    }, [dispatch]);




    // ------------------filter-------------------
    const [category, setCategory] = useState([]);
    const [jobType, setJobType] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCity, setSelectedCity] = useState('');
    const [filteredJobs, setFilteredJobs] = useState([]);

    // -----------------sort by latest--------------------

    const sortByLastest = () => {
        const recentJobs = [...allJobs]
            .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
        setFilteredJobs(recentJobs)
        setCurrentPage(1);
    }

    // ------------- filter category---------------------
    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prevCategory => prevCategory.filter(item => item !== e.target.value))
        }
        else {
            setCategory(prevCategory => [...prevCategory, e.target.value])
        }
    }

    //  ---------------- filter by job type---------------------
    const toggleJobType = (e) => {
        if (jobType.includes(e.target.value)) {
            setJobType(prevJobType => prevJobType.filter(item => item !== e.target.value))
        }
        else {
            setJobType(prevJobType => [...prevJobType, e.target.value])
        }
    }

    //  -------------- filter function---------------

    const applyFilters = () => {
        let jobCopy = [...allJobs];

        if (searchTerm) {
            jobCopy = jobCopy.filter((job) =>
                job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        if (category.length > 0) {
            jobCopy = jobCopy.filter((item) => {
                if (category.includes(item.jobCategory)) {
                    return true
                }
            })
        }
        if (jobType.length > 0) {
            jobCopy = jobCopy.filter((item) => {
                if (jobType.includes(item.jobType)) {
                    return true
                }
            })
        }
        if (selectedCity) {
            console.log('hey')
            jobCopy = jobCopy.filter((item) =>
                item.jobLocation === selectedCity
            );
        }

        setFilteredJobs(jobCopy);
        setCurrentPage(1);

    }

    useEffect(() => {
        applyFilters();
    }, [category, selectedCity, jobType, searchTerm, allJobs]);

    const cities = [...new Set(allJobs?.map((job) => job.jobLocation))];

    // pagination logique
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = filteredJobs?.slice(indexOfFirstJob, indexOfLastJob);

    const totalPages = Math.ceil(filteredJobs?.length / jobsPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className=' w-[90%] flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
                {/* filter options */}
                <div className='min-w-60 bg-[#EBF5F4] rounded-lg'>
                    <div className=' border borber-gray-300 pl-5 py-3 mt-6 block sm:block'>
                        <p className='mb-3 text-sm font-medium'>
                            SEARCH BY JOB TITLE
                        </p>

                        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" className='outline-none w-[90%] h-8 rounded-md  pl-2' placeholder='job title..' />
                        </div>

                        <p className='my-3 text-sm font-medium'>
                            LOCATION
                        </p>

                        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                            <select className="outline-none w-[90%] h-8 rounded-md pl-2" onChange={(e) => setSelectedCity(e.target.value)}>
                                <option value="">Select a city</option>
                                {cities.map((city, index) => (
                                    <option key={index} value={city}>
                                        {city}
                                    </option>
                                ))}
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
                                <input onChange={toggleCategory} type="checkbox" className='w-3' value={'Marketing and Communication'} />Marketing & Communication

                            </p>
                            <p className='flex gap-2'>
                                <input onChange={toggleCategory} type="checkbox" className='w-3' value={'Telecomunications'} />Telecomunications

                            </p>
                            <p className='flex gap-2'>
                                <input onChange={toggleCategory} type="checkbox" className='w-3' value={'IT and Technology'} />IT & Technology
                            </p>
                            <p className='flex gap-2'>
                                <input onChange={toggleCategory} type="checkbox" className='w-3' value={'Hospitality and Food Services'} />Hospitality & Food Services
                            </p>
                            <p className='flex gap-2'>
                                <input onChange={toggleCategory} type="checkbox" className='w-3' value={'Education'} />Education
                            </p>
                            <p className='flex gap-2'>
                                <input onChange={toggleCategory} type="checkbox" className='w-3' value={'Finance and Accounting'} />Financial Services
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
                                <input onChange={toggleJobType} type="checkbox" className=' w-3' value={'Full-time'} />Full-Time
                            </p>
                            <p className='flex gap-2'>
                                <input onChange={toggleJobType} type="checkbox" className='w-3' value={'Hybrid'} />Hybrid

                            </p>
                            <p className='flex gap-2'>
                                <input onChange={toggleJobType} type="checkbox" className='w-3' value={'Freelance'} />Freelance

                            </p>

                        </div>
                    </div>
                </div>

                {/* Right side (job listings) */}
                <div className='flex-1'>
                    <div className='flex justify-between text-base sm:text-2xl mb-4'>
                        <div className='text-sm text-gray-500'>
                            Showing {indexOfFirstJob + 1}-{Math.min(indexOfLastJob, allJobs.length)} of {allJobs.length} results
                        </div>
                        {/* job sort */}
                        <div onClick={sortByLastest} className='border-2 border-[#298377] hover:border-[#37af9f] py-2 px-7 rounded-md text-sm flex cursor-pointer'>
                            <p className='text-[#298377] hover:text-[#37af9f] mr-1'>Sort by : latest</p>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#298377" d="M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" /></svg>
                            </span>
                        </div>
                    </div>

                    {/* Map jobs */}
                    {currentJobs?.map((job, index) => (
                        <div key={index} className=''>
                            <JobCard width={'100%'} job={job} />
                        </div>
                    ))}

                    {/* Pagination controls */}
                    <div className='flex justify-center mt-6'>
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className='px-4 py-2 bg-[#309688] text-white rounded-md mx-2 disabled:bg-gray-300'>
                            Previous
                        </button>
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                className={`px-4 py-2 mx-1 rounded-md ${currentPage === index + 1 ? 'bg-[#309688] text-white' : 'bg-gray-200'}`}>
                                {index + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className='px-4 py-2 bg-[#309688] text-white rounded-md mx-2 disabled:bg-gray-300'>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
