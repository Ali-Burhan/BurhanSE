import React from 'react'
import { utils } from '../utils/utils'

const Contact = () => {
  return (
    <div className="container">
    <div className="row contactmainrow" style={{width:'100vw'}}>
        <div className="col-12 text-white text-center my-2"><h3 data-aos='fade-down'>Get In Touch</h3> <hr/></div>
        <div className="col-12">
<div className="row">
    <div className="col-1"></div>
    <div className="col-10">
        <div className="row border p-2 rounded" data-aos='fade-right'>
            <div className="col-4 d-none d-md-none d-lg-block p-5 text-white contactbackground">
                <h4 className='p-2 my-2' style={{fontWeight:'bold',border:`1px solid ${utils.fifthcolor}`,borderRadius:'5px'}}> Contact Me for service </h4>
                <p>Already a customer? need help with previous worked project? or want to fix any work? You can contact me on freelncing platform. <span className='text-success ' > Fiverr. </span>  or <span className='text-info'>Upwork </span><span className='text-primary'> Freelancer.com</span></p>
                <br/>
                <br/>
                <br/>
                <p style={{fontWeight:'bold',lineHeight:'1px'}}>Local Number</p>
                <p>+92-316-1499-488</p>
                <p style={{fontWeight:'bold',lineHeight:'1px'}}>G-Mail</p>
                <p>aliburhan42000@gmail.com</p>
                <br/>
                <br/>
                <br/>
                
<a href="https://wa.me/03161499488?text=Coming%20Direct%20from%20your%20Portfolio" style={{color:'white'}} target='_blank'>
                <span className='mx-1'><svg className='contacticons1' width="30" height="30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="m3 20.999 1.65-3.8a9 9 0 1 1 3.4 2.9l-5.05.9"></path>
  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 1 0-1 0v1Zm0 0a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
</svg></span>
</a>
<a href="https://github.com/Ali-Burhan" style={{color:'white'}} target='_blank'>
<span className='mx-1'><svg className='contacticons2' width="30" height="30" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21h6Z"></path>
  <path d="M9 19c-4.3 1.4-4.3-2.5-6-3"></path>
</svg></span>
</a>
<a href="mailto:aliburhan42000@gmail.com" style={{color:'white'}} target='_blank'>
<span className='mx-1'><svg className='contacticons3' width="30" height="30" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 20h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3v16Z"></path>
  <path d="M5 20h3V4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1Z"></path>
  <path d="m16 4-4 4-4-4"></path>
  <path d="m4 6.5 8 7.5 8-7.5"></path>
</svg></span>
</a>
<a href="https://www.facebook.com/ali.burhan.1829405" style={{color:'white'}} target='_blank'>
<span className='mx-1'><svg className='contacticons4' width="30" height="30" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2H7Z"></path>
</svg></span>
</a>

<a href="https://www.instagram.com/han_burhan_hun/" style={{color:'white'}} target='_blank'>
<span><svg className='contacticons5' width="30" height="30" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4Z"></path>
  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
  <path d="M16.5 7.5v.001"></path>
</svg></span>
</a>
            </div>
            <div className="col-md-8 " >
                <div className="row">
                    <div className="col-md-6">
                        <div className=''>
                        <span className='contactspan'>Full Name</span>
                        <input type="text" className='contactinput' placeholder='Enter your name' style={{width:'100%'}} />
                        </div>
                        <div className='my-3' >
                        <span className='contactspan'>E-Mail</span>
                        <input type="text" className='contactinput' placeholder='Enter your E-Mail' style={{width:'100%'}} />
                        </div>
                        <div className='my-3' >
                        <span className='contactspan'>Service required</span>
                        <input type="text" className='contactinput' placeholder='React, SQL server, React-Native etc' style={{width:'100%'}} />
                        </div>
                        <div className='my-3' >
                        <span className='contactspan'>Leave a message</span>
                        <textarea type="text" className='contactinput' placeholder='A message that can help' rows={10} style={{width:'100%'}} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='' >
                        <span className='contactspan'>Phone Number</span>
                        <input type="text" className='contactinput' placeholder='03XX-XXXX-XXX' style={{width:'100%'}} />
                        </div>
                        <div className='my-3' >
                        <span className='contactspan'>Country Name</span>
                        <input type="text" className='contactinput' placeholder='Pakistan' style={{width:'100%'}} />
                        </div>
                        <div className='my-3' >
                        <span className='contactspan'>Review</span>
                        <textarea type="text" className='contactinput' placeholder='A review for appreciation or improvement' rows={10} style={{width:'100%'}} />
                        </div>
                        
                        <div className='my-3' >
                        <button className='contactbtn' style={{width:'100%'}}>Send</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-1"></div>
</div>
        </div>
    </div>
    </div>
  )
}

export default Contact