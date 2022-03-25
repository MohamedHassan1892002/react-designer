import React from 'react'
import exploreWork from "../images/explore-work-left-image.jpg"
import whats from "../images/whats-trending-item-image.jpg"
import Iframe from 'react-iframe'

export default function Home() {
  return (<>

    {/* landing Home  */}
    <section className='landing-home'>
      <div>
        <h4>WE PROVIDE EVERYTHING</h4>
        <h1><span>INTERIOR</span> DESIGNER</h1>
        <button className='btn btn-outline-danger p-2'>Discover More</button>
      </div>
    </section>

    {/* search */}
    <div className='container search  py-5'>
      <div className='shadow-lg rounded-3 p-5 '>

        <div className='row g-3'>
          <div className='col-lg-3 col-md-12'>
            <div>
              <h4 className='fw-bold pb-2'>Search Work</h4>
              <input type="text" className='form-control' placeholder='Type any work title...' />
            </div>
          </div>
          <div className='col-lg-3 col-md-12'>
            <div>
              <h4 className='fw-bold pb-2'>Choose Category</h4>
              <select className="form-select" id="inputGroupSelect02">
                <option >Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className='col-lg-3 col-md-12'>
            <div>
              <h4 className='fw-bold pb-2'>Price Range</h4>
              <select className="form-select" id="inputGroupSelect02">
                <option >Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className='col-lg-3 col-md-12'>
            <div>
              <h4 className='fw-bold pb-2'>Pick a Plan</h4>
              <select className="form-select" id="inputGroupSelect02">
                <option >Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

        </div>
        <button className='btn btn-danger mt-3 w-100 '>Search Now</button>
      </div>
    </div>

    {/* tooLine */}
    <div className='tooLine container pt-5 pb-3'>
      <h3>EXPLORE SOME OF OUR LATEST</h3>
      <h2>INTERIOR DESIGN WORK.</h2>
    </div>


    {/* Interior  */}
    <section className='Interior container pb-5'>
      <div className='row g-3'>
        <div className='col-lg-6  col-md-12 '>
          <img className='rounded-3' src={exploreWork} alt="" />
        </div>
        <div className='col-lg-6 col-md-12 ps-3'>
          <h2 >Interior Design</h2>
          <p className='py-3'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-date-fill mx-2  text-muted" viewBox="0 0 16 16">
            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" />
            <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z" />
          </svg> January 22, 2022</p>
          <a href="#" className='text-decoration-none  fw-bold arrow '>The Waterfront Cafe and Restaurant <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right " viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
          </svg></a>

          <div className='row text-muted  py-3'>
            <div className='col-md-6 '>
              <p>Florida, USA</p>
              <p>TemplateMo website.</p>
            </div>
            <div className='col-md-6'>
              Designer HTML5 Template is 100% <br />free to download provided by
            </div>
          </div>

          <p className='fw-bold build pb-2'>Building & Developing</p>
          <p className='py-3'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-date-fill mx-2  text-muted" viewBox="0 0 16 16">
            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" />
            <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z" />
          </svg> January 20, 2022</p>
          <a href="#" className='text-decoration-none  fw-bold arrow '>Home Land Port Canaveral Suites  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right " viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
          </svg></a>

          <div className='row text-muted  py-3'>
            <div className='col-md-6 '>
              <p> Miami Beach, Florida, USA</p>
              <p>easily edit and use Bootstrap components.</p>
            </div>
            <div className='col-md-6'>
              This is based on latest Bootstrap  <br />v5.1.3 CSS layout where you can
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* OUR INTERIOR WORK.*/}
    <section className='OUR-INTERIOR-WORK container py-5'>
      <div className='row gy-5 '>

        <div className='col-lg-7 col-md-12 pt-5'>
          <h3 >CHECK OUT WHATS TRENDING IN</h3>
          <h2 >OUR INTERIOR WORK.</h2>
          <p className='text-muted py-3'>Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito adipcingi elit, sed do eismuod larehai med at vero eos et suscipit neque rerum molestias accusamus et iusto odio dignissimos ducimus qui blanditis.</p>
          <button className='btn btn-danger '>Discover More</button>
        </div>


        <div className='col-lg-5 col-md-12'>
          <img className='rounded-3' src={whats} alt="" />
        </div>

      </div>
    </section>

    {/* iframe */}
    <section className='frame py-5'>
      <div className='container py-5'>
        <div className='row gy-4 rounded-3'>
          <div className='col-lg-6 col-md-12 '>
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.6038952537!2d31.328505268401845!3d30.059618470532715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1647329939938!5m2!1sar!2seg" width="500" height="500" allowfullscreen="" loading="lazy"></Iframe>

          </div>
          <div className='col-lg-6 col-md-12 p-5 bg-white'>
            <div>
              <h2>DON'T BE HESITATED</h2>
              <h3><span>TALK TO US</span> NOW!</h3>
            </div>
            <input className='form-control my-3' type="text" value="" placeholder='Full Name' />
            <input className='form-control my-3' type="text" value="" placeholder='Email' />
           <textarea className='form-control my-3' placeholder='Massage' rows="5"></textarea>
           <button className='btn btn-danger my-1 form-control'> Send</button>
             
            <div>

            </div>

          </div>
        </div>

      </div>


    </section>
  </>
  )
}
