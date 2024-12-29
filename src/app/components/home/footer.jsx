import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-black text-white py-16 mt-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
           
            <div className="space-y-4">
              <div className="flex items-center gap-2">
               <img src="/images/jobLogo-remove.png"
                alt="Logo"
                className='w-28 h-16'
                />
                
              </div>
              <p className="text-gray-400 pr-4">
                Quis enim pellentesque viverra tellus eget malesuada facilisis. Congue nibh vivamus aliquet nunc mauris d...
              </p>
            </div>
  
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">For Candidates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">For Employers</a></li>
              </ul>
            </div>
  
           
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Job Categories</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Telecomunications</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hotels & Tourism</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Construction</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Education</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Financial Services</a></li>
              </ul>
            </div>
  
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Newsletter</h3>
              <p className="text-gray-400">
                Eu nunc pretium vitae platea. Non netus elementum vulputate
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent w-full h-10 pl-2 border-gray-800 text-white placeholder:text-gray-500"
                />
                <button className="w-full py-2 rounded-md bg-teal-500 hover:bg-teal-600 text-white">
                  Subscribe now
                </button>
              </div>
            </div>
          </div>
  
         
          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © Copyright Job sphere 2024
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
}
