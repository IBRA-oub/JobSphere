import ApplyedJob from '@/app/components/dashboard/applyedJob'
import TopNav from '@/app/components/dashboard/topNav'
import React from 'react'

export default function page() {
    return (
        <section className='w-full min-h-screen  flex flex-col items-center'>
            <div className='h-auto w-[98%] border-b  '>
                <TopNav sectionName={'Apply'} />
            </div>

            <div className='w-[98%] h-auto  grid grid-cols-1 md:grid-cols-2 gap-5 mt-9 '>
                <ApplyedJob/>
                <ApplyedJob/>
                <ApplyedJob/>
            </div>

        </section>
    )
}
