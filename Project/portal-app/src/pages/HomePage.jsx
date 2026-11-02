import React from 'react'
import {FaBriefcase, FaBuilding, FaSearch, FaUsers} from "react-icons/fa";
import { Link } from 'react-router-dom';
const HomePage = () => {
  const stats=[
    {icon:FaBriefcase,label:'Jobs Posted',value:'1,345+'},
     {icon:FaBuilding,label:'Companies',value:'545+'},
      {icon:FaUsers,label:'Job Seekers',value:'10,000+'},
  ];
  const categories=[
       {name:"Technology",icon:'💻',count:245},
        {name:"Healthcare",icon:'🏥',count:120},
        {name:"Finance",icon:'💰',count:90},
        {name:"Education",icon:'🎓',count:75},
        {name:"Marketing",icon:'📈',count:60},
        {name:"Sales",icon:'🛒',count:50},
  ]
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
      {/* Stats Section */}
      <section className='py-12 bg-gray-100'>
        <div className='container  mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {stats.map((stat,index)=>(
                <div key={index} className='text-center'>
                  <stat.icon className='text-4xl text-blue-600 mx-auto mb-3'/>
                  <div className='text-3xl font-bold mb-1'>
                    {stat.value}
                  </div>
                  <div className='text-gray-600'>{stat.label}</div>
                </div>
              ))}
          </div>
        </div>

      </section>
      {/* Categories Section */}
      <section className='py-12'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Explore Job Categories</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
            {categories.map((category,index)=>(
              <div key={index} className='bg-gray-100 p-6 rounded text-center hover:bg-blue-600 hover:text-white transition'>
                <div className='text-4xl mb-4'>{category.icon}</div>
                <div className='font-bold text-lg mb-2'>{category.name}</div>
                <div className='text-gray-600'>{category.count} Jobs</div>
              </div>
            ))}
          </div>
        </div>
        </section>
        <section className='py-12 bg-blue-600 text-white'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl font-bold mb-4'>Ready to Start Your Job Search?</h2>
            <p className='text-xl mb-8'>Join thousands of job seekers who have found their dream jobs with us</p>
            <Link to="/jobs" className="bg-white text-blue-600 px-8 py-3 rounded font-bold hover:bg-gray-200">
              Browse Jobs
            </Link>
          </div>
          </section>
    


    </div>
  )
}

export default HomePage