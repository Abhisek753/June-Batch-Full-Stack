import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import Filter from '../components/Filter';
import JobCard from '../components/JobCard';

const JobListingPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchItem,setSearchItem]=useState('')
  const [error, setError] = useState(null);
  const [filterJobs, setFilterJobs] = useState([]);
  const [filter, setFilter] = useState({});


  const fetchJobs=async ()=>{
    try{
      const response=await fetch('  http://localhost:3000/jobs');
      if(!response.ok){
        throw new Error('Failed to fetch jobs');
      }
      const data=await response.json();
      console.log(data);
      setJobs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchJobs();
  },[])

  return (
  
      <div className='bg-gray-100 py-8'>
        <div className='container mx-auto px-4'>
          <div className='mb-8'>
            <h1 className='text-3xl font-bold mb-4'>Find Your Perfect Job</h1>
            <div className='bg-white rounded border border-gray-300 p-4 flex items-center gap-3'>
              <FaSearch className='text-gray-400 text-xl'/>
              <input type='text' placeholder='Search by job title,company,or desctiption....' value={searchItem} onChange={(e)=>setSearchItem(e.target.value)} className='w-full outline-none text-gray-700'/>
            </div>
          </div>
          {/* Main content */}
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
           {/* Filter Bar */}
            <div>
             <Filter/>
            </div>
            {/* JobListing  */}
           <div className='lg:col-span-3'>
            <p className='text-gray-600'>Showing {jobs.length} jobs</p>
            {jobs.length===0?(

              <div >
                <p>No jobs found matching your criteria</p>
              </div>
            ):(
              <div >
                {jobs.map((job)=>(
                   <div className='mb-2' key={job.id}>
                    <JobCard job={job}/>
                   </div>
                ))}
              </div>
            )}
           </div>
          </div>
        </div>
      </div>


     
  
  )
}

export default JobListingPage