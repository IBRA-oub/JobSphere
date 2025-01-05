"use client"
import { application } from "@/lib/frontend/redux/features/applicationSlice";
import { getJobs } from "@/lib/frontend/redux/features/jobSlice";
import { jobSelectors } from "@/lib/frontend/redux/selectors/jobSelectors";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function PopUpApply({ jobId, onClose }) {
    // get data for job
    const [job, setJob] = useState(null);
    const jobs = useSelector(jobSelectors)
    const allJobs = jobs.jobs;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobs());
        dispatch(application());
    }, [dispatch]);

    useEffect(() => {
        if (allJobs.length > 0) {
            const job = allJobs.find((job) => job._id === jobId);
            setJob(job);
        }
    }, [allJobs, jobId]);

    // apply logique

    const [data, setData] = useState({
        fullName: '',
        email: '',
        portfolioURL: '',
        coverLetter: '',
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const allData = {
                ...data,
                jobTitle: job?.jobTitle,
                jobSubTitle: job?.jobSubTitle,
                jobType: job?.jobType,
                jobCategory: job?.jobCategory,
                jobExperience: job?.jobExperience,
                jobDegree: job?.jobDegree,
                jobOfferedSalary: job?.jobOfferedSalary,
                jobLocation: job?.jobLocation,
                jobDescription: job?.jobDescription,
                jobKeyResponsibilities: job?.jobKeyResponsibilities,
                jobProfessionalSkills: job?.jobProfessionalSkills,
                jobCompanyName: job?.jobCompanyName,
                rhEmail: 'brahimoubourrih@gmail.com.com',
            }

            const response = await dispatch(application(allData))
            
            if(response.payload.message === 'You have already applied for this job.'){
                toast.error('You have already applied for this job');
                onClose()
            }else if(response.payload.message === 'An error occurred during Application.'){
                toast.error('All input required');
            }
            else{
                toast.success('Apply successfully , check your dashboard');
                onClose()
            }


        } catch (error) {
            return error
        }

    }

    return (
        <div className="fixed inset-0 bg-[#00000025] backdrop-blur-sm shadow-2xl flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[50%]">
                <h2 className="text-2xl font-semibold mb-4">Apply for this Job</h2>
                <p className="mb-4">Fill out the form to apply for this position.</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Full Name <span className="text-red-600">*</span></label>
                        <input
                            type="text"
                            name="fullName"
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#309688]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Email <span className="text-red-600">* </span><span className="text-gray-400 font-light text-[13px]"> Please enter the same email you used to log in</span></label>
                        <input
                            name="email"
                            onChange={handleChange}
                            type="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#309688]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Portfolio URL <span className="text-red-600">*</span></label>
                        <input
                            name="portfolioURL"
                            onChange={handleChange}
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#309688]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Cover Letter</label>
                        <textarea
                            rows="4"
                            name="coverLetter"
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#309688]"
                        ></textarea>
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-[#309688] text-white rounded-md hover:bg-[#25756a]"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

