const API_URL="http://localhost:3000"

export const getJobs=async()=>{
     try{
      const url=`${API_URL}/jobs`
      const response=await fetch(url);
      if(!response.ok){
        throw new Error('Failed to fetch jobs');
      }
      return await response.json();
     
    } catch (err) {
    console.log("Error in fetching jobs",err);
    throw err
    } 
}