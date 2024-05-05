import React, { useEffect, useState } from 'react'
import './Adminreg.css'
import {MDBBtn,MDBContainer,MDBRow,MDBCol,MDBInput,MDBCard,MDBCardBody,MDBFooter,MDBIcon} 
from 'mdb-react-ui-kit';
import axios from 'axios';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import background  from '../admin/Images/bg.jpg'
import {eye} from 'react-icons-kit/feather/eye'
import Swal from 'sweetalert2';

function Adminreg() {

  const [f_name,setFname] = useState('');
  const [l_name,setLname] = useState('');
  const [email,setEmail] = useState('');
  const [pass,setPassword] = useState('');
  const [flag,setFlag] = useState(false);

const [type, setType] = useState('password');
const [icon, setIcon] = useState(eyeOff);
const [type2, setType2] = useState('password');
const [icon2, setIcon2] = useState(eyeOff);

useEffect(()=>{document.body.style.backgroundImage = `url(${background})`})

const handleToggle = () => {
  if (type==='password'){
     setIcon(eye);
     setType('text')
  } else {
     setIcon(eyeOff)
     setType('password')
  }
}
const handleToggle2 = () => {
  if (type2==='password'){
     setIcon2(eye);
     setType2('text')
  } else {
     setIcon2(eyeOff)
     setType2('password')
  }
}

const submitForm = (event) => {

  if( f_name!=='' && l_name !=='' && email !=='' && pass !== '' && pass === document.getElementById('confirm_pass').value){
  
  const data = {
    a_id: '',
    a_fname: f_name,
    a_lname: l_name,
    a_email: email,
    a_password: pass
}
  if(flag){
  event.preventDefault(); 
  Swal.fire({
    position:"top",
    icon: "success",
    title: "registered!",
    text: "Registered Admin: "+f_name+" "+l_name
  });
  axios.post('http://localhost:8081/registeradmin', data)
  .then(res=> console.log(res))
  .catch(err=>console.log(err))
  window.location.replace('/admin');
  setFlag(false)
  }else{
    Swal.fire({
      position:"top",
      icon: "error",
      title: "Oops...!",
      text: "Invalid admin code"
    });
  }
}else{
  Swal.fire({
    position:"top",
    icon: "error",
    title: "Oops...!",
    text: "Please fill all the required feilds!"
  });
}
}


const validate_password = () => {
 
  let password = document.getElementById('pass').value
  let password2 = document.getElementById('confirm_pass').value
  if (password !== password2) {
      document.getElementById('wrong_pass_alert').style.color = 'red';
      document.getElementById('wrong_pass_alert').innerHTML
          = '☒ password mismatch';
      document.getElementById('create').disabled = true;
      document.getElementById('create').style.opacity = (0.4);
  } else {
      document.getElementById('wrong_pass_alert').style.color = 'green';
      document.getElementById('wrong_pass_alert').innerHTML =
          '🗹 Password Matched';
      document.getElementById('create').disabled = false;
      document.getElementById('create').style.opacity = (1);
  }
}
  return (
    <div>
  
    <MDBContainer fluid>

    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
      <MDBCol col='12'>

        <MDBCard className='bg-white my-5 mx-auto reg-card' style={{borderRadius: '1rem', maxWidth: '500px'}}>
          <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

            <h2 className="fw-bold mb-2">REGISTER</h2>
            <p className="text-black-50 mb-5">Register with your details</p>

            <form className="row g-3 needs-validation" novalidate>
  <div>
  <label htmlFor="admin_code" className="form-label">Admin code</label>
  <div className="valid-feedback">Looks good!</div>
  <div className="form-outline" data-mdb-input-init>
      <MDBInput type="text" className="form-control" id="admin_code" placeholder='Admin Code' required onChange={(e)=>{if(e.target.value === 'ADMIN2024')
      {setFlag(true)}else{setFlag(false)}}}/>
      </div>
  </div>           
  <div>
  <label htmlFor="first_name" className="form-label">First name</label>
    <div className="valid-feedback">Looks good!</div>
    <div className="form-outline" data-mdb-input-init>
      <MDBInput type="text" className="form-control" name='first_name'id="first_name" placeholder='First Name' required onChange={(e)=>{setFname(e.target.value)}} />
    </div>
  </div>
  <div>
  <label htmlFor="last_name" className="form-label">Last name</label>
      <div className="valid-feedback">Looks good!</div>
    <div className="form-outline" data-mdb-input-init>
      <MDBInput type="text" className="form-control" id="last_name" placeholder='Last Name' required onChange={(e)=>{setLname(e.target.value)}}/>
      </div>
  </div>
  <div>
    <label htmlFor="eamil" className="form-label">Email</label>
    <div className="invalid-feedback">Please choose an email</div>
    <div className="form-outline" data-mdb-input-init>
      <MDBInput type="email" className="form-control" id="eamil" placeholder='Email' required onChange={(e)=>{setEmail(e.target.value)}}/>
      </div>
  </div>
  <div>
  <label htmlFor="pass" className="form-label">Password</label>
      <div className="invalid-feedback">Please provide a valid password.</div>
    <div className="form-outline" data-mdb-input-init>
      <Icon class="icon" icon={icon} size={25} onClick={handleToggle}/>
      <MDBInput type={type} className="form-control" id="pass" placeholder='Password' required onChange={(e)=>{setPassword(e.target.value)}} autoComplete="current-password"/>
      </div>
  </div>
  <div>
  <label htmlFor="confirm_pass" className="form-label">Confirm passsword</label>
      <div className="invalid-feedback">Please re-enter above password.</div>
    <div className="form-outline" data-mdb-input-init>
    <Icon class="icon" icon={icon2} size={25} onClick={handleToggle2}/>
      <MDBInput type={type2} className="form-control" id="confirm_pass" placeholder='Confirm Password' required onChange={validate_password}/>
      </div>
      <span id="wrong_pass_alert"></span>
  </div>
  <p className="small mb-3 pb-lg-2" style={{textAlign:'center'}}>Already have an account? <a className="text-black-50" href='/admin'>Log In</a></p>
  <div className='submit'>
  <button outline className='mx-2 px-5 btn btn-primary' size='lg' id='create' onClick={submitForm}>Register</button>
  </div>
</form>


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
  )
}

export default Adminreg