"use client"
import ApplyedJob from '@/app/components/dashboard/applyedJob'
import TopNav from '@/app/components/dashboard/topNav'
import { getApplication } from '@/lib/frontend/redux/features/getApplicationSlice'
import { getApplicationSelectors } from '@/lib/frontend/redux/selectors/getApplicationSelectors'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function page() {
    // dispatch application
    const { application } = useSelector(getApplicationSelectors);
    const allApplication = application.application
    const dispatch = useDispatch();
    console.log('user dahsboard', allApplication)
    useEffect(() => {
        dispatch(getApplication());
    }, [dispatch]);

    return (
        <section className='w-full min-h-screen  flex flex-col items-center'>
            <div className='h-auto w-[98%] border-b  '>
                <TopNav sectionName={'Apply'} />
            </div>

            <div className='w-[98%] h-auto  grid grid-cols-1 md:grid-cols-2 gap-5 mt-9 '>
                {allApplication?.map((item,index)=>(   
                <div key={index}>
                    <ApplyedJob status={item?.status} jobTitle={item?.jobTitle} jobSubTitle={item?.jobSubTitle} jobType={item?.jobType}  jobCategory={item?.jobCategory}    jobExperience={item?.jobExperience}   jobOfferedSalary={item?.jobOfferedSalary}  jobLocation={item?.jobLocation}   />
                </div>
                ))}
            </div>

        </section>
    )
}
