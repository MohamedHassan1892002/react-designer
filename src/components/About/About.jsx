import React from 'react'
import interior from "../images/interior-design-left-image.jpg"

export default function About() {


  return (<>

    {/* landing  */}
    <section className='about-landing-page text-center '>
      <div className='position-relative  text '>
        <h2><span>ABOUT</span> DESIGNER</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
          keoi tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </section>

    {/* three items  */}
    <section className='container three-items py-5'>
      <div className='row g-3'>


        <div className='col-lg-4 col-md-6  py-5'>
          <div className='rounded-3 shadow-sm text-center py-5' >
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-activity" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z" />
            </svg>
            <h3 className='py-2'>Active Support 24/7</h3>
          </div>
        </div>


        <div className='col-lg-4 col-md-6  py-5'>
          <div className='rounded-3 shadow-sm text-center py-5' >
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-bullseye" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
              <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
            <h3 className='py-2'>Customer Care</h3>
          </div>
        </div>


        <div className='col-lg-4 col-md-6  py-5'>
          <div className='rounded-3 shadow-sm text-center py-5' >
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-emoji-heart-eyes" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z" />
            </svg>
            <h3 className='py-2'>Easy to Customize</h3>
          </div>
        </div>


      </div>

    </section>

    {/* tooLine */}
    <div className='tooLine container pt-5 pb-1'>
      <h3>A COMPANY WHO SPECIALIZES</h3>
      <h2>IN INTERIOR DESIGN.</h2>
    </div>

    {/* SPECIALIZES */}

    <section className='SPECIALIZES pb-5 container'>
      <div className='row g-4'>

        <div className='col-lg-6 -col-md-12 pt-1'>
          <img className='rounded-3' src={interior} alt="" srcset="" />
        </div>

        <div className='col-lg-6 -col-md-12 '>
          <p className='text-muted'>
            Designer HTML5 Template is 100% free to download provided by TemplateMo website. You are allowed to use this template for your commercial or business websites. You are NOT allowed to redistribute the downloadable ZIP file of this template on any other website. Please contact us for more info.
            <br />
            <br />
            <br />
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel cilisis lorem ipsum dolor sit amet, consectetur adipiscingii elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
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
