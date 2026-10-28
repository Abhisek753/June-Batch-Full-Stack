import React from 'react'
import {Link} from "react-router-dom"
import { FaBriefcase, FaBuilding, FaSignOutAlt, FaUser } from "react-icons/fa";
const Navbar = () => {
  let user={role:"company",name:"Abhisek"}
  // let user;
  return (
    <nav className='bg-white border-b border-gray-300'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link  className="flex items-center gap-2 text-blue-600 font-bold text-xl" to="/">
            <FaBriefcase className='text-2xl' />
          <span>JobPortal</span>
          </Link>
          <div className='flex items-center gap-8'>
            <Link to="/jobs">Find Jobs</Link>
             {user?.role=='company'&& 
              <Link className='flex items-center text-gray-700 gap-1' to="/company/dashboard"><FaBuilding/> <span>Dashboard</span></Link>
             }
              {user?.role=='jobseeker'&& 
              <Link to="/myapplications" className=''><span>My Application</span></Link>
             }
             

          </div>
          <div className='flex items-center gap-4'>
            {user?(
           <>
              <span className='flex items-center gap-2 text-gray-700'><FaUser/><span>{user?.name}</span><button className='flex items-center gap-2 text-gray-700'><FaSignOutAlt/><span>Logout</span></button></span>
              
           </>
            ):(
              <>
              <Link to="/login" className='flex items-center gap-2 text-gray-700'><FaUser/><span>Sign In</span></Link>
              </>
            )}
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar