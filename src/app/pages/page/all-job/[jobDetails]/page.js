import JobDetails from '@/app/components/allJob/jobDetails';
import React from 'react'

export default function page({params}) {
  const jobId = params.jobDetails;
  return (
    <>
      <JobDetails jobId={jobId}/>
    </>
  )
}
