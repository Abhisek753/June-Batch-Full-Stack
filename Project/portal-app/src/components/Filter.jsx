import React, { useState } from 'react'
import { FaFilter, FaTimes } from 'react-icons/fa'
import Select from "react-select"
import { EXPERIENCE_LEVELS, JOB_TYPES, SALARY_RANGE, WORK_MODES } from '../utils/constants'
const Filter = ({onFilterChange,initialFilters={}}) => {
  const [filters,setFilters]=useState({
    type:initialFilters.type||'',
    experience:initialFilters.experience || '',
    workMode:initialFilters.workMode ||'',
    location:initialFilters.location || '',
    salary:initialFilters.salary||'',
    category:initialFilters.category||''
  })
  
  const jobTypeOptions=JOB_TYPES?.map(type=>({value:type,label:type}));
 const experienceOptions=EXPERIENCE_LEVELS?.map(level=>({value:level,label:level}));
  const workModeOptions=WORK_MODES?.map(mode=>({value:mode,label:mode}));
   const salaryOptions=SALARY_RANGE?.map(salary=>({value:salary.value,label:salary.label}));
   const locationOptions=[
   {value:'Bangalore',label:'Bangalore'},
    {value:'Mumbai',label:'Mumbai'},
    {value:'Delhi',label:'Delhi'},
    {value:'Chennai',label:'Chennai'},
    {value:'Kolkata',label:'Kolkata'},
    {value:'Pune',label:'Pune'},
    {value:'Hyderabad',label:'Hyderabad'},
   ]

   const handleFilterChange=(filterName,value)=>{
    const newFilters={...filters,[filterName]:value};
    setFilters(newFilters);
    onFilterChange(newFilters);
   }
   const clearFilter=()=>{
    const emptyFilters={
      type:'',
      experience:'',
      workMode:'',
      location:'',
      salary:'',
      category:''
    };
    setFilters(emptyFilters);
    onFilterChange(emptyFilters);
   }
  const hasActiveFilters=true;
  return (
    <div className='bg-white rounded border-gray-300 p-6'>
      <div className='flex justify-between items-center mb-4'>
        <div className='flex items-center gap-2'>
          <FaFilter className='text-blue-600'/>
          <h3 className='text-lg font-semibold'>Filters</h3>
        </div>
        {hasActiveFilters&&(
          <button onClick={clearFilter}  className='cursor-pointer text-sm text-red-600 flex items-center gap-1'> 
            <FaTimes/>
            Clear All</button>
        )}
      </div>
      {/* Job Types */}
      <div className='mb-4'>
        <label>Job Type</label>
        <Select options={jobTypeOptions} onChange={(option)=>handleFilterChange('type', option?.value)} value={jobTypeOptions.find((option) => option.value === filters.type)} placeholder="Select job type" className="text-sm"/>
      </div>
      {/* Experience */}
      <div className='mb-4'>
        <label>Experience Level</label>
        <Select onChange={(option)=>handleFilterChange('experience', option?.value)} options={experienceOptions} value={experienceOptions.find((option) => option.value === filters.experience)} placeholder="Select experience level" className="text-sm"/>
      </div>
      {/* //  Work Mode  */}
      <div className='mb-4'>  
      <label>Work Mode</label>
        <Select onChange={(option)=>handleFilterChange('workMode', option?.value)} options={workModeOptions} value={workModeOptions.find((option) => option.value === filters.workMode)} placeholder="Select work mode" className="text-sm"/>
      </div>  
      {/* //  Salary Range  */}
      <div className='mb-4'>  
      <label>Salary Range</label>
        <Select onChange={(option)=>handleFilterChange('salary', option?.value)} options={salaryOptions} value={salaryOptions.find((option) => option.value === filters.salary)} placeholder="Select salary range" className="text-sm"/>
      </div>  
      {/* //  Location  */}
      <div className='mb-4'>  
      <label>Location</label>
        <Select onChange={(option)=>handleFilterChange('location', option?.value)} options={locationOptions} value={locationOptions.find((option) => option.value === filters.location)} placeholder="Select location" className="text-sm"/>
      </div>  

    </div>
     
  )
}

export default Filter