import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center text-white ' style={{  backgroundColor: '#70587d' }}>
      <MDBContainer className='p-4 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center'>
            <span className='me-3'>Register for free</span>
            <MDBBtn type='button' outline color="light" rounded>
              Sign up!
              
            </MDBBtn>
          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(14, 12, 21,0.2)' }}>
        © 2024 Copyright:
        <a className='text-white' href='gehadmarawan7@gmail.com'> 
 Contact Me</a>
      </div>
    </MDBFooter>
  );
}