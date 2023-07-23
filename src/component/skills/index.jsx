import React from 'react'
import { utils } from '../utils/utils'
import { Parallax,ParallaxLayer } from '@react-spring/parallax'
import reactpic from '../Images/logo512.png'
import mobile from '../Images/mobileapp.svg'
import sql from '../Images/mobileapp.svg'
const Skills = () => {
  return (
<>  
                <div className="row skillsmain"  style={{backgroundColor:utils.secondarycolor}}>
                   
                    <div className="col-12 my-3">
                      <div className="row">
                      <div className="col-md-6">
                      <p className='text-white border text-center  rounded p-2' data-aos='zoom-in'>SCROLL BELOW ME TO SEE DETAILS</p>
                      <Parallax  pages={3}>
                   <ParallaxLayer offset={0} >
                   <div class="container mt-5 mb-3" data-aos='fade-out'>
   
        <div class="col-md-4" >
            <div class="bluryeffect card p-3 mb-2" style={{background:'transparent',color:'white',boxShadow:`0px 0px 15px ${utils.fifthcolor}`}}>
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                        <div class="icon"> <img src={reactpic} height={50} alt="" /></div>
                        <div class="ms-2 c-details">
                            <h6 class="mb-0">Mern Stack</h6> <span>Experience : 1.5 Year</span>
                        </div>
                    </div>
                  <div>Level : <div class="badge"> <span>Pro</span> </div></div>
                </div>
                <div class="mt-5">
                    <h3 class="heading">Intermediate Mern Stack<br/>Developer</h3>
                    <div class="mt-5">
                        <div class="progress" style={{backgroundColor:utils.secondarycolor}}>
                            <div class="progress-bar"  role="progressbar" style={{width: "80%",backgroundColor:utils.fifthcolor}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="mt-3"> <span class="text1">Solid Grip on React</span> </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>

                   </ParallaxLayer>
                   <ParallaxLayer  offset={0.8} speed={0.6}>
                   {/* <div className="card" style={{width: "34rem",background:'transparent',marginLeft:'2%',color:'white',boxShadow:`0px 0px 15px ${utils.fifthcolor}`}}>
  <div className="card-body">
    <h5 className="card-title ">Card title</h5>
    <h6 className="card-subtitle text-white mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button  className="card-link">Card link</button>
    <button  className="card-link">Another link</button>
  </div>
</div>                 */}  <div class="container mt-5 mb-3">
   
<div class="col-md-4">
            <div class="bluryeffect card p-3 mb-2" style={{background:'transparent',color:'white',boxShadow:`0px 0px 15px ${utils.fifthcolor}`}}>
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                        <div class="icon"> <img src={mobile} height={50}  alt="mobile app" />  </div>
                        <div class="ms-2 c-details">
                            <h6 class="mb-0">Mobile App development</h6> <span>Experience : 1 year</span>
                        </div>
                    </div>
                    <div class=""> <span>intermediate</span> </div>
                </div>
                <div class="mt-5">
                    <h3 class="heading">React Native : JS </h3>
                    <div className="mt-5">
                        <div class="progress" style={{backgroundColor:utils.secondarycolor}}>
                            <div class="progress-bar" style={{width: "80%",backgroundColor:utils.fifthcolor}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="mt-3"></div>
                    </div>
                    <h3 class="heading">Flutter : Dart</h3>
                    <div className="mt-5">
                        <div class="progress" style={{backgroundColor:utils.secondarycolor}}>
                            <div class="progress-bar" style={{width: "65%",backgroundColor:utils.fifthcolor}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="mt-3"> <span class="text1">Worked on both <span class="text2">solid grip on react native</span></span> </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
                   </ParallaxLayer>
                   <ParallaxLayer  offset={1} speed={0.5}>
                   {/* <div className="card" style={{width: "34rem",background:'transparent',marginLeft:'2%',color:'white',boxShadow:`0px 0px 15px ${utils.fifthcolor}`}}>
  <div className="card-body">
    <h5 className="card-title ">Card title</h5>
    <h6 className="card-subtitle text-white mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button  className="card-link">Card link</button>
    <button  className="card-link">Another link</button>
  </div>
</div>                 */}
           <div class="container mt-5 mb-3" data-aos='fade-out'>
   
   <div class="col-md-4" >
       <div class="bluryeffect card p-3 mb-2" style={{background:'transparent',color:'white',boxShadow:`0px 0px 15px ${utils.fifthcolor}`}}>
           <div class="d-flex justify-content-between">
               <div class="d-flex flex-row align-items-center">
                   <div class="icon text-dark"> <svg width="30" height="30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.5 17.344 12 21l4-2.25 2.5-1.406"></path>
  <path d="M20 15V7.5l-6.25-3.516"></path>
  <path d="M10.25 3.984 4 7.5V15"></path>
  <path d="M10.5 9.375 9 10.25v3.5l1.5.875 1.5.875 1.5-.875 1.5-.875v-3.5l-1.5-.875L12 8.5l-1.5.875Z"></path>
  <path d="M12 8.5V5"></path>
  <path d="m15 13.5 3.5 2"></path>
  <path d="m9 13.5-3.5 2"></path>
  <path d="M12 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
  <path d="M4 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
  <path d="M20 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
</svg></div>
                   <div class="ms-2 c-details">
                       <h6 class="mb-0">Blockchain</h6> <span>Experience : Starter</span>
                   </div>
               </div>
             <div>Level : <div class="badge"> <span>Beginner</span> </div></div>
           </div>
           <div class="mt-5">
               <h3 class="heading">Blockchain : MERN + Solidity<br/>Developer</h3>
               <div class="mt-5">
                   <div class="progress" style={{backgroundColor:utils.secondarycolor}}>
                       <div class="progress-bar"  role="progressbar" style={{width: "80%",backgroundColor:utils.fifthcolor}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                   </div>
                   <div class="mt-3"> <span class="text1">Great Going with Blockchain</span> </div>
               </div>
           </div>
       </div>
   </div>
   
   
</div>
                   </ParallaxLayer>
                   <ParallaxLayer  offset={1.9} speed={1}>
                   <div class="container mt-5 mb-3" data-aos='fade-out'>
   
   <div class="col-md-4" >
       <div class="bluryeffect card p-3 mb-2" style={{background:'transparent',color:'white',boxShadow:`0px 0px 15px ${utils.fifthcolor}`}}>
           <div class="d-flex justify-content-between">
               <div class="d-flex flex-row align-items-center">
                   <div class="icon text-dark"> <svg width="30" height="30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M22 5.5V19c0 1.657-4.477 3-10 3S2 20.657 2 19V5.5"></path>
  <path d="M22 14.5c0 1.657-4.477 3-10 3s-10-1.343-10-3"></path>
  <path d="M22 10c0 1.657-4.477 3-10 3S2 11.657 2 10"></path>
  <path d="M12 8c5.523 0 10-1.343 10-3s-4.477-3-10-3S2 3.343 2 5s4.477 3 10 3Z"></path>
</svg></div>
                   <div class="ms-2 c-details">
                       <h6 class="mb-0">SQL (Structure Query Language)</h6> <span>Experience : 1.5 Year</span>
                   </div>
               </div>
             <div>Level : <div class="badge"> <span>Pro</span> </div></div>
           </div>
           <div class="mt-5">
               <h3 class="heading">Worked with SQL using MS SQL server<br/><br/>Developed React app using SQL server</h3>
               <div class="mt-5">
                   <div class="progress" style={{backgroundColor:utils.secondarycolor}}>
                       <div class="progress-bar"  role="progressbar" style={{width: "85%",backgroundColor:utils.fifthcolor}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                   </div>
                   <div class="mt-3"> <span class="text1">Solid Grip on SQL</span> </div>
               </div>
           </div>
       </div>
   </div>
   
   
</div>              
                   </ParallaxLayer>
                      </Parallax>
                      </div>
                      <div className="col-md-5 d-none d-md-none d-lg-block">
                      <p className='text-white border text-center  rounded p-2'>SCROLL BELOW ME TO SEE DETAILS</p>
                      <Parallax  pages={2}>
                   <ParallaxLayer offset={0}>
                   <div className="card" style={{width: "34rem",background:'transparent',marginLeft:'2%',color:'white',boxShadow:`0px 0px 15px ${utils.fifthcolor}`}}>
  <div className="card-body">
    <h5 className="card-title ">E-Commerce</h5>
    
    <p className="card-text">Recently I have worked and develop a complate E-Commerce website using react as frontend UI and SQL Server as backend database. The whole source code is present in my public repository Link below</p>
    <button  className="card-link btn btn-outline-warning"><a href="https://github.com/Ali-Burhan/reactBlog" target='_blank' style={{textDecoration:'none',color:'white'}}> Go to repo </a></button>
  </div>
</div>  
                   </ParallaxLayer>
                   <ParallaxLayer  offset={0.5} speed={1}>
                   <div className="card" style={{width: "34rem",background:'transparent',marginLeft:'2%',color:'white',boxShadow:`0px 0px 15px ${utils.fifthcolor}`}}>
  <div className="card-body">
    <h5 className="card-title ">DAPP Project</h5>
    <p className="card-text">I'm exploring Blockchain technology currently. I have also worked on a DAPP project a very beginner's project TODO List. The whole source code is in the repository. Link below</p>
    <button  className="card-link btn btn-outline-warning"> <a href="https://github.com/Ali-Burhan/web3.0-chatapp" target='_blank' style={{textDecoration:'none',color:'white'}}> Go to repo</a></button>
  </div>
</div>                
                   </ParallaxLayer>
                   <ParallaxLayer  offset={0.9} speed={0.5}>
                   <div className="card" style={{width: "34rem",background:'transparent',marginLeft:'2%',color:'white',boxShadow:`0px 0px 15px ${utils.fifthcolor}`}}>
  <div className="card-body">
    <h5 className="card-title ">Flutter App</h5>
    <p className="card-text">I worked about 6 month on Flutter technology. A cross platform technology to build android, IOS ,Window,Mac and linux app with one code. Created a medical app in flutter Doctor appointment the app is not currently on my repo but soon it will. </p>
  </div>
</div>   
                           
                   </ParallaxLayer>
                   <ParallaxLayer  offset={1} speed={0.5}>
                   <div className="card" style={{width: "34rem",background:'transparent',marginLeft:'2%',color:'white',boxShadow:`0px 0px 15px ${utils.fifthcolor}`}}>
  <div className="card-body">
    <h5 className="card-title ">ASP .net</h5>
    <p className="card-text">I worked a very little on ASP .net technology a well known technology and a big platform. I worked on a accounting app. The source code is also in my repo.</p>
    <button  className="card-link btn btn-outline-warning"> <a href="https://github.com/Ali-Burhan/.Net/tree/master" target='_blank' style={{textDecoration:"nono",color:'white'}}> Go to repo </a></button>
  </div>
</div>   
                   </ParallaxLayer>
                      </Parallax>
                      </div>
                      </div>
                      </div>
        </div>
  </>  
  )
}

export default Skills