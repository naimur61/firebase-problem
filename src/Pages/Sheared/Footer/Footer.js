import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css'



const Footer = () => {
   const location = useLocation()

   return (
      <div className=' mx-auto text-center mt-5'>
         <MDBFooter className={`text-center text-white fw-bold  ${location.pathname === '/' || location.pathname === '/booking' ? 'footer-tr' : 'footer-bg'}`}>
            <MDBContainer className='p-4 pb-0'>
               <section className=''>
                  <p className='d-flex justify-content-center align-items-center'>
                     <span className='me-3'>Register for free</span>
                     <Link className=' btn btn-warning' to='/register'>
                        Sign up!
                     </Link>
                  </p>
               </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
               © 2020 Copyright:
            </div>
         </MDBFooter>
      </div >
   );
};

export default Footer;