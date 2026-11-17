import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import Home from "./components/Home";
import About from "./components/About";
function App() {
  const value = useContext(ThemeContext);
  console.log("data from theme context", value);

  return (
    <>
      <Navbar />
      <h2>App Component</h2>
      <CounterOne />
      <br />
      <hr />
      <CounterTwo />
      <hr />
      <Home />
      <hr />
      <About />
    </>
  );
}

export default App;
