
import './App.css'
import Profile from './components/Profile';
import UserContext from './context/UserContext'

function App() {
  const name="Abhisek";
  const data={
id:"1",
name:"Arjun",
age:24

  }


  return (
  <UserContext.Provider value={data}>
    <h3>My application</h3>
    <Profile/>
     
    
  </UserContext.Provider>
  )
}

export default App
