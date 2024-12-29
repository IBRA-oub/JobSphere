export default function HeroSection() {
    return (
        <section className="relative w-full h-[85vh] flex justify-center ">
            <img src="/images/findJob.jpg" className='absolute  w-full h-full z-0' alt="" />
            <div className='z-10 absolute w-full h-full bg-[#1a1a1a4c] flex justify-center items-center'>

                <div className="w-[60%] h-[60%] flex flex-col justify-center items-center">

                    <div >
                        <p className="text-white text-6xl font-semibold">
                            Find Your Dream Job Today!
                        </p>

                    </div>
                    <div>
                        <p className="text-white font-light mt-4">
                            Connecting Talent with Opportunity: Your Gateway to Career Success
                        </p>
                    </div>
                    <div className="flex items-center bg-white rounded-md shadow-md w-[80%] h-16 max-w-4xl mx-auto mt-10">

                        <input
                            type="text"
                            placeholder="Job Title or Company"
                            className="flex-1 px-4 py-2 border-r border-gray-200 focus:outline-none"
                        />


                        <div className="relative border-r border-gray-200">
                            <select
                                className="px-4 py-2 text-gray-500 focus:outline-none w-full"
                            >
                                <option>Select Location</option>
                                <option>New York</option>
                                <option>Los Angeles</option>
                                <option>San Francisco</option>
                            </select>
                        </div>


                        <div className="relative border-r border-gray-200">
                            <select
                                className="text-gray-500 px-4 py-2 focus:outline-none w-full"
                            >
                                <option>Select Category</option>
                                <option>Technology</option>
                                <option>Design</option>
                                <option>Marketing</option>
                            </select>
                        </div>


                        <button className="bg-[#309689] hover:bg-[#298377] h-16 text-white px-4 py-2 flex items-center space-x-2 rounded-r-md">
                            <span>Search Job</span>
                            <span className="material-icons">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                            </span>

                        </button>
                    </div>

                    <div className=" w-[70%] h-20 mt-20 flex justify-around items-center">
                        <div className="flex">
                            <div className="bg-[#309689] h-14 w-14 rounded-full flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"> <path fill="#ffffff" d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z" /></svg>
                            </div>
                            <div className="flex flex-col justify-center ml-2 text-white">
                                <p className="font-semibold">
                                    20,300
                                </p>
                                <p className="font-light">
                                    Jobs
                                </p>

                            </div>

                        </div>
                        <div className="flex">
                            <div className="bg-[#309689] h-14 w-14 rounded-full flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 640 512"><path fill="#ffffff" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>                            </div>
                            <div className="flex flex-col justify-center ml-2 text-white">
                                <p className="font-semibold">
                                    10,250
                                </p>
                                <p className="font-light">
                                    Candidates
                                </p>

                            </div>

                        </div>
                        <div className="flex">
                            <div className="bg-[#309689] h-14 w-14 rounded-full flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 384 512"><path fill="#ffffff" d="M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"/></svg>
                            </div>
                            <div className="flex flex-col justify-center ml-2 text-white">
                                <p className="font-semibold">
                                    18,400
                                </p>
                                <p className="font-light">
                                    Companies
                                </p>

                            </div>

                        </div>

                    </div>


                </div>

            </div>
        </section>
    )
}