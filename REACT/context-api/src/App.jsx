
import { useContext } from 'react';
import './App.css'
import { ThemeContext } from './context/ThemeContext';
import Navbar from './components/Navbar';
function App() {
 const value=useContext(ThemeContext);
console.log("data from theme context",value);

  return (
 <>
 <Navbar/>
 <h2>App Component</h2>
 <button onClick={()=>value.toggleTheme()}>Change Theme</button>
 </>
     
    

  )
}

export default App
