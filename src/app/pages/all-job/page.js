import FilterSection from '@/app/components/allJob/filterSection'
import { Section } from 'lucide-react'
import React from 'react'

export default function page() {
    return (
        <section>
            <div className='h-44 w-full bg-black text-white flex justify-center items-center'>
                <p className="text-8xl font-bold text-white drop-shadow-[0_0px_10px_rgba(59,130,246,2)]">
                    Jobs
                </p>
            </div>
            <div className='w-full flex justify-center '>
                <FilterSection />
            </div>
        </section>
    )
}
