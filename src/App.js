import './App.css';
import Home from './component/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/navbar';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Parallaxs from './component/parallax';
import Skills from './component/skills';
import Contact from './component/contact';
function App() {
const [toggle ,setToggle] = useState(false)
  
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <BrowserRouter>
   
      <div className='appmain'>
        <div className={` fixed-left ${toggle? 'navbardiv' : 'togglenavbar'}`}>
          <Navbar setToggle={setToggle} toggle={toggle}/>
        </div>
        <div className={` ${toggle? 'maindiv' : 'maindiv2'}`}>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/projects' element={<Parallaxs/>}/> 
          <Route path='/skills' element={<Skills/>}/> 
          <Route path='/contact' element={<Contact/>}/> 
      </Routes>
         
        </div>
      </div>
          </BrowserRouter>
 
 );
}

export default App;
