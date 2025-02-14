import {Routes,Route}from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navigation from "./pages/Navigation";
import Welcome from "./pages/Welcome";
import Landing from "./pages/Landing";
function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path ="/" element ={<Home/>}/>
        <Route path ="/About" element ={<About/>}/>
        <Route path ="/Login" element ={<Login/>}/>
        <Route path ="/Landing"element={<Landing/>}/>
      </Routes>
    </div>
  );
}
export default App;
