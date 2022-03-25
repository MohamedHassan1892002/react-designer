import React from 'react'
import LogoFooter from "../images/footer-logo.png"

export default function Footer() {
  return (<>

  <footer className='container py-5 '>

      <div className='row g-3 py-5 linkes'>
          
              <div className='col-md-6'>
                  <div>
                  <img  src={LogoFooter} alt="" />
                  <p className='py-5  text-muted'>Designer is free Bootstrap v5.1.3 CSS template.
                  <br/> Everyone can get the best HTML CSS templates <br/>
                   from TemplateMo website.</p>
                   </div>
              </div>
              
              <div className='col-md-6'>
               <div className='ulFooter row ' >
                   <ul  className='col-md-4'>
                       <li className=' fw-bold'>Our Location</li>
                       <li className='text-muted'>Sunny Isles Beach,</li>
                       <li className='text-muted'>Florida 33160,</li>
                       <li className='text-muted'>United States</li>
                   </ul>
                   <ul  className='col-md-4'>
                       <li className=' fw-bold'>Customer Care</li>
                       <li className='text-muted'>010-020-0340</li>
                       <li className='text-muted'>090-080-0760</li>
                       <li className='text-muted'>info@company.com</li>
                   </ul>
                   <ul  className='col-md-4'>
                       <li className=' fw-bold'>Follow Us</li>
                       <li className='text-muted'> Facebook</li>
                       <li className='text-muted'> Twitter</li>
                       <li className='text-muted'> Linkedin</li>
                   </ul>
                   
                </div>

              </div>

      </div>
      <div className='endFooter text-muted'>
          
          <p>Copyright © 2022 Designer Co., Ltd. All Rights Reserved.</p>
          <p className=''>Design: <a href='#' className='text-decoration-none  '>TemplateMo</a></p>
          
         
      </div>

  </footer>
  
  </>
  )
}
