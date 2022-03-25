import React from 'react'

export default function Contact() {
  return (<>

  {/* landing  */}
  <section className='about-landing-page text-center '>
      <div className='position-relative  text '>
        <h2><span>CONTACT</span> US</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
          keoi tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </section>

     {/* iframe */}
    <section className='container py-5 '>
    <iframe className='w-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.034515516631!2d31.20126908555692!3d30.03586762593406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145846c9306e97af%3A0x5315ebf6378470c0!2sRoute!5e0!3m2!1sar!2seg!4v1647872380574!5m2!1sar!2seg"  height="500"   loading="lazy"></iframe>
      
    </section>

    {/* contact */}
    <section className='container contact p-5 shadow-sm rounded-3 '>
      <div className='row gx-3 gy-5'>
        <div className='col-lg-6 col-md-12'>
          <h2 className='fw-bold fs-2'>DON'T BE HESITATED</h2>
          <h3 className='fw-bold fs-3 ps-5'>SEND A MESSAGE NOW!</h3>
            <input className='form-control my-3' type="text" value="" placeholder='Full Name' />
            <input className='form-control my-3' type="text" value="" placeholder='Email' />
           <textarea className='form-control my-3' placeholder='Massage' rows="5"></textarea>
           <button className='btn btn-danger my-1 form-control'> Send Massage</button>
        </div>

        <div className='col-lg-6 col-md-12 text'>
          <div className='text-center text-white p-4 rounded-3 my-4 '>
            <h5 className='fw-bold'>Mailing Address</h5>
            <p>Sunny Isles Beach, Florida 33160, USA</p>
          </div>

          <div className='text-center text-white p-4 rounded-3 my-4 '>
            <h5 className='fw-bold' >Email Address</h5>
            <p>Sunny Isles Beach, Florida 33160, USA</p>
          </div>

          <div className='text-center text-white p-4 rounded-3 my-4 '>
            <h5 className='fw-bold' >Mailing Address</h5>
            <p>Sunny Isles Beach, Florida 33160, USA</p>
          </div>

          


        </div>




      </div>
    </section>

     {/* HIRE US */}
     <section className='HIRE-US bg-dark py-5 w-100' >
      <div className=' container HIRE-US-contant justify-content-between d-flex'>
        <div className='text-white fs-3 fw-bold'><p>HIRE US TO WORK ON A PROJECT?</p></div>
        <div><button className='btn btn-danger'>Contact Us</button></div>
      </div>
    </section>


  
 </>
  )
}
