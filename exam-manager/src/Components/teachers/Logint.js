import React  from 'react';
import './Logint.css';
import {MDBBtn,MDBContainer,MDBRow,MDBCol,MDBInput,MDBCard,MDBCardBody,MDBFooter,MDBIcon}  
from 'mdb-react-ui-kit';

function Logint() {

    return (
      <div>
        <MDBContainer fluid style={{marginTop:'125px'}}>
  
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
  
          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
  
              <h2 className="fw-bold mb-2 text-uppercase">Teacher</h2>
              <p className="text-white-50 mb-5">Please enter your email and password!</p>
  
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' placeholder='Email' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' placeholder='Password' id='formControlLg' type='password' size="lg"/>
  
              <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
              <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
                Login
              </MDBBtn>

            </MDBCardBody>
          </MDBCard>
  
        </MDBCol>
      </MDBRow>
  
    </MDBContainer>
  
    <MDBFooter className='bg-dark text-center text-white' style={{marginTop:'125px'}}>
        <MDBContainer className='p-4 pb-0'>
          <section className='mb-4'>
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='google' />
            </MDBBtn>
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='instagram' />
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='github' />
            </MDBBtn>
          </section>
        </MDBContainer>
  
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright : <a className='text-white' href='#'>
            exammanager.com
          </a>
          
        </div>
      </MDBFooter>
  
    </div>
    );
}

export default Logint