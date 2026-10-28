import React from 'react'
import {FaSearch} from "react-icons/fa";
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div>
      {/* Hero section */}
      <section className='bg-blue-600 text-white py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center'>
            <h1 className='font-bold mb-6 text-4xl'>Find Your Dream Job Today</h1>
            <p className='text-xl mb-8'>Connect with top companies and discover opportunity that match your skills</p>
            <div className='bg-white rounded p-2 flex flex-col gap-2'>
              <div className='flex-1 flex items-center px-4 border border-gray-300 rounded'>
                <FaSearch className='text-gray-400 mr-4 '/>
                <input className='w-full py-3 outline-none text-gray-700' placeholder='Job title, keyword, or company'/>
              </div>
              <Link to="/jobs" className="bg-blue-600 text-white px-8 py-3 rounded "> Search Jobs</Link>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default HomePage