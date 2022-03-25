import React from 'react'
import explor2 from "../images/explore-item-02.jpg"
import explor3 from "../images/explore-item-03.jpg"
import pagination1 from "../images/pagination-left-image.jpg"
import pagination2 from "../images/pagination-right-image.jpg"

export default function Work() {
  return (<>

    {/* landing  */}
    <section className='work-landing-page text-center '>
      <div className='position-relative  text '>
        <h2><span>EXPLORE </span> OUR WORK</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
          keoi tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </section>


    {/* MINIMALISTIC  */}
    <section className='container py-5 '>
      <h2 className='fs-2 fw-bold text-center py-5'>MINIMALISTIC DESIGN FOR 2 BEDROOMS</h2>
      <div className='MINIMALISTIC-container rounded-3 '>

      </div>


    </section>


    {/* statistics */}
    <section className='container py-5'>

      <div className='row g-3 statistics mx-auto rounded-3  shadow-sm py-4 '>

        <div className='col-lg-2 col-md-4 text-center'>
          <h5>Architect:</h5>
          <p className='text-muted '> Catherine Rose</p>
        </div>

        <div className='col-lg-2 col-md-4 text-center'>
          <h5>Client:</h5>
          <p className='text-muted '> TemplateMo</p>
        </div>

        <div className='col-lg-2 col-md-4 text-center'>
          <h5>Terms:</h5>
          <p className='text-muted '> 6-12 Months</p>
        </div>

        <div className='col-lg-2 col-md-4 text-center'>
          <h5>Project Type:</h5>
          <p className='text-muted '> Interior Design</p>
        </div>

        <div className='col-lg-2 col-md-4 text-center'>
          <h5>Strategy:</h5>
          <p className='text-muted '> Clean & Minimal</p>
        </div>

        <div className='col-lg-2 col-md-4 text-center'>
          <h5>Date:</h5>
          <p className='text-muted '> January 22, 2022</p>
        </div>


      </div>

      <p className='py-5 text-muted lh-lg'>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto toril beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequida nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        <br /> <br /> <br />
        This is an Interior Designer HTML5 Template that is 100% totally free to download, edit and use for your commercial or business websites. You are <span className=' fw-bold'> NOT allowed</span> to redistribute the downloadable ZIP file of this template on any other website. Please <a className='text-decoration-none' href="#">contact TemplateMo</a>  website for more information. Thank you. <span className='fw-bold'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,</span>  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
      </p>

      <div className='row g-3 explor'>
        <div className='col-lg-6 col-md-12 '><img className='rounded-3' src={explor2} alt=""  /></div>
        <div className='col-lg-6 col-md-12 '><img className='rounded-3' src={explor3} alt=""  /></div>
      </div>

      <h2 className='pt-5  fw-bold'>INCREDIBLE WORK</h2>
      <p className=' pt-2 text-muted'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto toril beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequida nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.</p>

      <div className='d-flex py-5 pagination justify-content-around'>
        <div className='text-center'>
          <img className='rounded-3'   src={pagination1} alt="" />
          <h6 className='fw-bold pt-4 px-3'>Minimalistic Living Room <br/><span className='text-muted'>Interior Design</span></h6>
        </div>
        <div className=' text-center'>
          <img className='rounded-3'   src={pagination2} alt="" />
          <h6 className='fw-bold pt-4 px-3'>Futuristic Interior Concept <br/><span className='text-muted'>Interior Design</span></h6>
        </div>

      </div>


    </section>


    {/* HIRE US */}
    <section className='HIRE-US bg-dark py-5 w-100' >
      <div className=' container HIRE-US-contant justify-content-between d-flex'>
        <div className='text-white fs-3 fw-bold'><p>LOOKING TO WORK ON A PROJECT ?</p></div>
        <div><button className='btn btn-danger'>Contact Us Now</button></div>
      </div>
    </section>

  </>
  )
}
