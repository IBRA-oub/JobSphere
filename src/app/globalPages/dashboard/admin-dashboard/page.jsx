import MainDashboard from '@/app/components/dashboard/mainDashboard'
import Sidebar from '@/app/components/dashboard/sidebar'
import TopNav from '@/app/components/dashboard/topNav'
import React from 'react'

export default function page() {
  return (
    <>
      <section className='w-full min-h-screen  flex justify-between'>
        <div className='h-auto w-[20%] flex justify-center items-center '>
          <Sidebar />
        </div>
        <div className='h-auto w-[78%] bg-white '>
          <div className='w-full h-[10%] '>
            <TopNav sectionName={'Dashboard'} />
          </div>
          <div className='w-full h-[90%] '>
            <MainDashboard />
          </div>

        </div>

      </section>


    </>
  )
}
