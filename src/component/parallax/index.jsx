import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { utils } from '../utils/utils'
import accounting from '../Images/projects.svg'
import blog from "../Images/blogsvg.svg"
// Little helpers ...
const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function Parallaxs() {
  const parallax = useRef(!null)
  return (
      <Parallax ref={parallax} pages={3} style={{width:'100vw',minHeight:'100vh'}}>
        
        {/* <ParallaxLayer offset={0.1} speed={1} style={{ backgroundColor: utils.secondarycolor }} /> */}
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: utils.secondarycolor }} />
        {/* <ParallaxLayer offset={1.5} speed={1} style={{ backgroundColor: utils.forthcolor }} /> */}
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: utils.tertiarycolor }} />

        <ParallaxLayer
          offset={1}
          speed={1}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />
      
        <ParallaxLayer
          offset={1.5 }
          speed={1}
          factor={3}
          style={{
            // backgroundImage: url('stars', true),
            backgroundImage: accounting,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer offset={1.3} speed={1} style={{ pointerEvents: 'none' }}>
          <img alt='IMG' src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img alt='IMG'  src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img alt='IMG' src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img alt='IMG' src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img alt='IMG' src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.1} speed={0.2} style={{ opacity: 0.2 }}>
          <img alt='IMG' src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img alt='IMG' src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img alt='IMG' src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img alt='IMG' src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img alt='IMG' src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img alt='IMG' src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img alt='IMG' src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img alt='IMG' src={url('coding')} style={{ width: '60%' }} />
        </ParallaxLayer>

    
        <ParallaxLayer
          offset={0}
          speed={1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background:utils.maincolor
          }}>
          {/* <img src={url('server')} style={{ width: '20%' }} /> */}
          <div className="container">
            <div className="row">
              <div className="col-11 text-center border rounded my-3" style={{backgroundColor:utils.maincolor,color:utils.fifthcolor}}><h1>PROJECTS</h1></div>
              <div className="col-5 mx-2"><div style={{backgroundColor:utils.secondarycolor,height:'23rem'}} className=" text-white rounded jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Projects Section</h1>
    <p className="lead">Below are the list of main projects. <br/> Scroll to view the projects overview or tab on me</p>
  </div>
</div></div>
              <div className="col-6"><div style={{backgroundColor:utils.secondarycolor}} className="jumbotron text-white rounded p-4">
  <h1 className="display-4">Accounting solution</h1>
  <p className="lead">This is a solution currently in progress for small businesses</p>
  <hr className="my-4"/>
  <p>The tehnology used: <br/>Frontend:<span style={{color:utils.fifthcolor,fontWeight:'bold',fontSize:'20px'}}> React UI</span> <br/>Backend: <span style={{color:utils.fifthcolor,fontWeight:'bold',fontSize:'20px'}}> SQL Server</span>  </p>
  <p className="lead">
    <button className="btn2" onClick={()=>window.alert('THE SOLUTION WILL BE AVAILABLE SOON!!! STAY CONNECTED 😉')}>  Go to repository</button>
  </p>
</div></div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
          }}>
            <div className="card" style={{width: "40rem",background:'transparent',color:utils.fifthcolor,boxShadow:`0px 5px 15px ${utils.fifthcolor}`}}>
  <img className="card-img-top" height={300} src={accounting} alt=""/>
  <div className="card-body">
    <h5 className="card-title">Beginner's Project Website</h5>
    <p className="card-text">In this project I builded many beginner's project like weather app, Budget tracker,tictactoe and merge them all in one website creating a screen for each project</p>
    <button className="btnparallax"><a href="https://github.com/Ali-Burhan/ReactNavbar/tree/master" target='_blank' style={{textDecoration:'none',color:'white'}}>Go to repo</a></button>
  </div>
</div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(0)}>
             <div className="card" style={{width: "40rem",background:'transparent',color:utils.fifthcolor,boxShadow:`0px 5px 15px ${utils.maincolor}`}}>
  <img className="card-img-top" height={400} src={blog} alt=""/>
  <div className="card-body">
    <h3 className="card-title" style={{color:utils.maincolor}}>Blog Website</h3>
    <p className="card-text">As everyone knows now a days the blogging is becoming very popular among the people. I created a blog website where people can create blogs choosing picture giving a title and description to the blog and post it.<br/> <b style={{color:utils.maincolor,fontSize:'20px'}}> Technology : MERN Stack</b></p>
    <button className="btnparallax"><a href="https://github.com/Ali-Burhan/reactBlog" target='_blank' style={{textDecoration:'none',color:'white'}}>Go to repo</a></button>
  </div>
</div>
        </ParallaxLayer>
      </Parallax>
  )
}
