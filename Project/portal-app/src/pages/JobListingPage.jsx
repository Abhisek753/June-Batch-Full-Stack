import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import Filter from '../components/Filter';
import JobCard from '../components/JobCard';
import { getJobs } from '../services/jobService';

const JobListingPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchItem,setSearchItem]=useState('')
  const [error, setError] = useState(null);
  const [filterJobs, setFilterJobs] = useState([]);
  const [filters, setFilters] = useState({});


  const fetchJobs=async ()=>{
    try{
     
      const data=await getJobs();
    
      setJobs(data);
      setFilterJobs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  const handleFilterChange=(newFilter)=>{
    // console.log("filter options", newFilter);
     setFilters(newFilter)
  }
  
  const applyFilters=()=>{
    let result=[...jobs];

    if(searchItem){
      result=result.filter((job)=>job.title.toLowerCase().includes(searchItem.toLowerCase())||job.company.toLowerCase().includes(searchItem.toLowerCase())||job.description.toLowerCase().includes(searchItem.toLowerCase()));
    }

    // type filter
    if(filters.type){
      result=result.filter((job)=>job.type===filters.type);
    }
    // experience filter
    if(filters.experience){
      result=result.filter((job)=>job.experience===filters.experience);
    }
    // work mode filter
    if(filters.workMode){
      result=result.filter((job)=>job.workMode===filters.workMode);
    }
    // location filter
    if(filters.location){
      result=result.filter((job)=>job.location?.includes(filters.location));
    }
    // salary filter
    if(filters.salary){
      result=result.filter((job)=>job.salary===filters.salary);
    }
    setFilterJobs(result);
  }

  useEffect(()=>{
    applyFilters();
  },[filters,jobs,searchItem]);

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
             <Filter onFilterChange={handleFilterChange} initialFilters={filters} />
            </div>
            {/* JobListing  */}
           <div className='lg:col-span-3'>
            <p className='text-gray-600'>Showing {jobs.length} jobs</p>
            {jobs?.length===0?(

              <div >
                <p>No jobs found matching your criteria</p>
              </div>
            ):(
              <div >
                {filterJobs?.map((job)=>(
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