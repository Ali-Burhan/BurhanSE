import React from 'react'
import './home.css'
import Animation from '../animation/index' 
import { utils } from '../utils/utils'
import ali from '../Images/Ali.jpg'
import ali2 from '../Images/Ali3.jpg'
import Parallaxs from '../parallax'
import Skills from '../skills'
import Contact from '../contact'
import virdeo from '../Images/tech.mp4'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="row homemain">
          <div  style={{color:utils.fifthcolor}} className="col-lg-8 my-2">
            <div className="row border">
              <div className="col-4 p-3">

            

            <Animation text={`ALI BURHAN.`} speed={80}/>
            
              </div>
              <div className="col-5">

            <div className='p-3  text-center '>

                        <Animation text={`I'm a WEB DEVELOPER`} speed={80}/>
              </div>
</div>
<div className="col-3 p-3">
                        <button className='btn btn-outline-warning'><Link style={{textDecoration:'none',color:'white'}} to={'/contact'}> Hire Me!</Link></button>

</div>
</div>
           <div className='my-3'>

            <Animation text={`As a good software developer, I excel in writing clean and efficient code. My problem-solving skills allow me to tackle complex challenges with confidence. I'm proficient in various programming languages and frameworks, enabling me to work on diverse projects. My ability to collaborate effectively within teams makes me a valuable asset.`} speed={5}/>
    
           </div>
           <div className="col-12  d-lg-block ">
            <h3>Education</h3>
           </div>
           <div className="row mx-2  " style={{border:'0.3px solid grey'}}>
              <div class="col-md-4  p-2"  >

    <h4 class="text-center"><strong>SCHOOL</strong></h4>
    <hr/>
    <div class="profile-card-2 ">
      <h5 className='text-center'>Dar-e-Arqam</h5>
      <hr/>
      <h6>MATRIC (2016 - 2018)</h6>
      <h6>Obtained Marks : 902</h6>
      <h6>Total Marks : 1100</h6>
      <h6>Percentage : 82%</h6>
      <hr/>
        <div class="profile-name">Shami Road near Nadra office</div>
        <div class="profile-username text-bold" style={{fontWeight:'bold'}}>Sheikhupura</div>
        <br/>
        </div>
</div>
<div class="col-md-4  p-2"  >
    <h4 class="text-center"><strong>COLLEGE</strong></h4>
    <hr/>
    <div class="profile-card-2 ">
      <h5 className='text-center'>Aspire group of colleges</h5>
      <hr/>
      <h6>FSC (PRE_ENGINEERING) (2018 - 2020)</h6>
      <h6>Obtained Marks : 815</h6>
      <h6>Total Marks : 1100</h6>
      <h6>Percentage : 75%</h6>
      <hr/>
        <div class="profile-name">Nabi pura near Punjab college</div>
        <div class="profile-username text-bold" style={{fontWeight:'bold'}}>Sheikhupura</div>
        <br/>
       </div>
</div>
<div class="col-md-4  p-2"  >
    <h4 class="text-center"><strong>UNIVERSITY</strong></h4>
    <hr/>
    <div class="profile-card-2 ">
      <h5 className='text-center'>NFC IE&FR</h5>
      <hr/>
      <h6>BSCS (HONS) (2020 - onward)</h6>
      <h6>Obtained Marks : 902</h6>
      <h6>Total Marks : 1100</h6>
      <h6>Percentage : 82%</h6>
      <hr/>
        <div class="profile-name">Jarawala Road near Kohinoor Plaza</div>
        <div class="profile-username text-bold" style={{fontWeight:'bold'}}>Faisalabad</div>
        <br/>
       </div>
</div>

              </div>
          </div>
    <div className="col-md-3 my-2 d-md-block d-lg-block" style={{border:`1px solid ${utils.fifthcolor}`,boxShadow:'0px 5px 15px grey'}}>
      {/* <img src={ali} alt="" height={"50%"}/> */}
      <div class="col-md-12 ">
    		    <div class="card profile-card-3" style={{background:'transparent'}}>
    		        <div class="background-block" style={{background:'transparent'}}>
    		            <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="profile-sample1" class="background"/>
    		        </div>
    		        <div class="profile-thumb-block" style={{background:'transparent'}}>
    		            <img src={ali} alt="profile-image" class="profile"/>
    		        </div>
    		        <div class="card-content" >
                    <h2>Ali Burhan<small>Designer & Developer</small></h2>
                    <div class="icon-block text-white"><a target='_blank' href="https://www.facebook.com/ali.burhan.1829405"><i class="fa fa-facebook"></i></a><a target='_blank' href="https://wa.me/03161499488?text=Coming%20Direct%20from%20your%20Portfolio"> <i class="fa fa-whatsapp"></i></a><a target='_blank' href="https://github.com/Ali-Burhan"> <i class="fa fa-github"></i></a></div>
                    </div>
                </div>
                <p class="mt-3 w-100 float-left text-center text-white"><strong>Profile Card</strong></p>
    		</div>
        {/* <div class="col-md-12">
    		    <div class="card profile-card-1">
    		        <img src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb" alt="profile-sample1" class="background"/>
    		        <img src="https://randomuser.me/api/portraits/women/20.jpg" alt="profile-image" class="profile"/>
                    <div class="card-content">
                    <h>Savannah Fields<small>Engineer</small></h>
                    <div class="icon-block"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"> <i class="fa fa-twitter"></i></a><a href="#"> <i class="fa fa-google-plus"></i></a></div>
                    </div>
                </div>
                <p class="mt-3 w-100 float-left text-center"><strong>Basic Profile Card</strong></p>
    		</div> */}
    </div>
   
        <hr className='text-white'/>
        </div>
<Skills/>
        
    </div>
      <Parallaxs/>
    </>
  )
}

export default Home