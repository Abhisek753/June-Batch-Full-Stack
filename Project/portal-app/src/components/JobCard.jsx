import React from 'react'
import { FaBriefcase, FaClock } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const JobCard = ({job}) => {
 const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  return (
    <div className='bg-white  rounded border-gray-300 p-6'>
        <div className='flex  justify-between' >
            <div className='flex gap-4'>
            {job.companyLogo && (
                <img src={job.companyLogo} alt={job.company} className='w-16 h-16 rounded'/>
            )}
            <div>
                <Link to={`/jobs/${job.id}`} className='hover:underline'>
                   <h3 className='text-xl font-semibold hover:text-blue-600 mb-1'>{job.title}</h3>
                </Link>
                <p className='text-gray-600 mb-3'>{job.company}</p>
                <div className='flex flex-wrap gap-4 text-sm text-gray-600 mb-3'>
                    <div className='flex items-center gap-1'>
                        <FaBriefcase/><span>{job.experience}</span>
                    </div>
                     <div className='flex items-center gap-1'>
                        <FaBriefcase/><span>{job.salaryMin}-{job.salaryMax}</span>
                    </div>
                     <div className='flex items-center gap-1'>
                        <FaBriefcase/><span>{job.location}</span>
                    </div>
                </div>
                {/* Tags */}
                <div>
                    <span>{job.type}</span>
                    <span>job.workMode</span>
                    {job.category&& (
                        <span>{job.category}</span>
                    )}
                </div>
                {/* description */}

                {job.description&& (
                    <p className='text-gray-600 text-sm'>{job.description}</p>
                )}
            </div>
           

        </div>
         <div className='flex text-center gap-1 text-sm text-gray-500'>
                <FaClock className='text-gray-500 mt-1'/>
                <span>{formatDate(job.postedDate)}</span>
         </div>

        </div>
        <div className='border-t border-gray-300 mt-4 pt-4 flex justify-between items-center'>
            <div className='flex flex-wrap gap-2 mt-4'>
                {job.skills && job.skills.map((skill, index) => (
                    <span key={index} className='bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs mr-2 mb-2'>{skill}</span>
                ))}
            </div>
        </div>

    </div>
  )
}

export default JobCard