import React,{useState, useEffect} from 'react';
import './Login.css';
import {MDBBtn,MDBContainer,MDBRow,MDBCol,MDBInput,MDBCard,MDBCardBody,MDBFooter,MDBIcon} 
from 'mdb-react-ui-kit';
import { Input, Ripple, initMDB } from "mdb-ui-kit";
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import axios from 'axios';
import background  from '../admin/Images/bg.jpg'
import Swal from 'sweetalert2'

function Login() {

  initMDB({ Input, Ripple });
  useEffect(() => {document.body.style.backgroundImage = `url(${background})`})

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  let result = [];

  const handleToggle = () => {
    if (type==='password'){
       setIcon(eye);
       setType('text')
    } else {
       setIcon(eyeOff)
       setType('password')
    }
  }

  const handlelogin = () =>{

    if (document.getElementById('email').value === '' || document.getElementById('pass').value === ''){
      Swal.fire({
        position:"top",
        icon: "error",
        title: "Oops...",
        text: "Please fill all the required feilds!"
      });
    }else{

    let data={
      a_email : document.getElementById('email').value,
      a_password : document.getElementById('pass').value
  }  

    axios.get('http://localhost:8081/admin',{params: data}).then((response)=>{
        result=response.data;
        if(result.length>0){
          result.map((admin)=>{
            localStorage.setItem("user",admin.a_fname)
            localStorage.setItem("email",admin.a_email)
          })
            window.location.replace('/admindash')
        } else{
          Swal.fire({
            position:"top",
            icon: "error",
            title: "Oops...",
            text: "Invalid username or password!"
          });
    }
  })}
}


    return (
      <div classname="background">
  
      <MDBContainer fluid>
  
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
  
          <MDBCard className='bg-white my-5 mx-auto login-card' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
  
              <h2 className="fw-bold mb-2" style={{marginLeft:'0'}}>admin</h2>
              <p className="text-black-50 mb-5">Please enter your email and password!</p>

              <form className="row g-3 needs-validation" novalidate>
  <div>
    <div className="invalid-feedback">Please choose an email</div>
    <div className="form-outline" data-mdb-input-init>
      <MDBInput type="email" className="form-control" id="email" placeholder='Email' required />
      </div>
  </div>
  <div>
      <div className="invalid-feedback">Please provide a valid password.</div>
    <div className="form-outline" data-mdb-input-init>
      <Icon className="icon" icon={icon} size={25} onClick={handleToggle}/>
      <MDBInput type={type} className="form-control" id="pass" placeholder='Password' required  />
      </div>
  </div>

    <div className='additional'>
  <p className="small mb-3 pb-lg-2"><a className="text-black-50" href="/forgotpassword">Forgot password?</a></p>
  <p className="small mb-3 pb-lg-2">Don't have an account? <a className="text-black-50" href='/adminreg'>Sign up</a></p>
  </div>
  <span id="wrong_pass_alert"></span>
  
</form><div className='submit'>
  <button outline className='mx-2 px-5 btn btn-primary' size='lg' id='create' onClick={handlelogin}>Login</button>
  </div>


            </MDBCardBody>
          </MDBCard>
  
        </MDBCol>
      </MDBRow>
  
    </MDBContainer>
  
    <MDBFooter className='bg-dark text-center text-white'>
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
        © 2024 Copyright : <a className='text-white' href='/'>
            exammanager.com
          </a>
          
        </div>
      </MDBFooter>
  
    </div>
    );
}

export default Login