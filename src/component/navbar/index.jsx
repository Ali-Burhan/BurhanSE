import React from 'react';
import { utils } from '../utils/utils';
import ali from '../Images/Ali.jpg'
import { Link } from 'react-router-dom';
import alicv from '../Images/Alicv.pdf'
export default function Navbar({setToggle,toggle}) {
  return (
    <div>
        <div className="sidebar" style={{backgroundColor:utils.secondarycolor,height:'100vh'}}>
            <div className="allitems">
      <div   onClick={()=>setToggle(!toggle)}>
{toggle?"":
        <svg width="40" className='text-white'  height="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 6h16"></path>
  <path d="M4 12h16"></path>
  <path d="M4 18h16"></path>
</svg>
}
</div>
      <div onClick={()=>setToggle(!toggle)} >
{toggle?
      <svg width="40" className='text-white' height="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M18 6 6 18"></path>
  <path d="m6 6 12 12"></path>
</svg>:""
}
      </div>
      {
toggle?
          <ul className='titlename'>
                    <h5 data-aos="fade-right" className='text-white'>{utils.lastname}SE</h5>
                </ul>:
                <ul className='togglepic'>
                    <img src={ali} height={50} style={{borderRadius:'10px',border:'1px solid #778DA9'}} alt="" />
                </ul>
                }
                    <ul className='picturediv'>
                {
toggle?
                    <img src={ali} className='alipic' data-aos='fade-down-right' height={120} alt="" />
                    :""
                }
                </ul>
                <ul className='listitems'>

                    <li onClick={()=>setToggle(false)} className={`${toggle?"line-on-hover":"line-on-hover2"} d-block`}> <Link  style={{textDecoration:'none',color:utils.fifthcolor}} to={'/'}> <svg width="30"  height="30" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 12H3l9-9 9 9h-2"></path>
  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"></path>
  <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"></path>
</svg>  {toggle?" Home":""}</Link></li>
                    <li  onClick={()=>setToggle(false)} className={`${toggle?"line-on-hover":"line-on-hover2"} d-block`}> <svg  width="30" height="30" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
  <path d="M19 18v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1"></path>
  <path d="M18 14h3M3 14h3-3Zm7.5 0h3-3Z"></path>
  <path d="M5 10V5a2 2 0 0 1 2-2h7l5 5v2"></path>
</svg> <a href={alicv} style={{textDecoration:'none',color:utils.fifthcolor}} download={'cv.pdf'}> {toggle?" Resume":""}</a></li>
                    <li onClick={()=>setToggle(false)} className={`${toggle?"line-on-hover":"line-on-hover2"} d-block`}><Link  style={{textDecoration:'none',color:utils.fifthcolor}} to={'/contact'}> <svg width="30" height="30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"></path>
  <path d="M4 13h3l3 3h4l3-3h3"></path>
</svg> {toggle?" Contact":""}</Link></li>
                    <li onClick={()=>setToggle(false)} className={`${toggle?"line-on-hover":"line-on-hover2"} d-block`}><Link  style={{textDecoration:'none',color:utils.fifthcolor}} to={'/skills'}><svg width="30" height="30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="m7 8-4 4 4 4"></path>
  <path d="m17 8 4 4-4 4"></path>
  <path d="m14 4-4 16"></path>
</svg>  {toggle?" Skills":""}</Link></li>
                    <li onClick={()=>setToggle(false)} className={`${toggle?"line-on-hover":"line-on-hover2"} d-block`}><Link  style={{textDecoration:'none',color:utils.fifthcolor}} to={'/projects'}>  <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.2 20.76s-1.2 0-1.2-1.2 1.2-4.8 6-4.8 6 3.6 6 4.8c0 1.2-1.2 1.2-1.2 1.2H7.2Zm4.8-7.14a3 3 0 1 0 0-5.999 3 3 0 0 0 0 6Z"></path>
  <path d="M4.8 2.76a2.4 2.4 0 0 0-2.4 2.4v11.4a1.8 1.8 0 0 0 1.8 1.8h.784c.25-.882.687-1.7 1.28-2.4H3.6V5.16a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 0 1 1.2 1.2v10.8h-2.662a6.447 6.447 0 0 1 1.279 2.4h.783a1.8 1.8 0 0 0 1.8-1.8V5.16a2.4 2.4 0 0 0-2.4-2.4H4.8Z"></path>
</svg> {toggle?" Projects":""}</Link></li>
                </ul>
            </div>
        </div>
    </div>
  );
}