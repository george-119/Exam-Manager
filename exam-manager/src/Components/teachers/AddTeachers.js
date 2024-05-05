import React, { useState,useEffect } from 'react'
import './AddTeachers.css'
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody} 
from 'mdb-react-ui-kit';
import background from '../admin/Images/bg4.jpg'
import HomeNav from '../Navbars/HomeNav'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

function AddTeachers() {
    useEffect(()=>{document.body.style.backgroundImage = `url(${background})`})

  const [name,setName] = useState('')
  const [gender,setGender] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [desig,setDesig] = useState('')
  const [dept,setDept] = useState('')

  let data = {
    t_id: '',
    t_name: name,
    t_gender: gender,
    t_desig: desig,
    t_dept: dept,
    t_email: email,
    t_phone: phone,
    t_password: phone
  }

    const handleClick=()=>{

      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Add teacher "+name+"?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          axios.post('http://localhost:8081/teacher', data)
          .then(res=> console.log(res))
          .catch(err=>console.log(err))
          swalWithBootstrapButtons.fire({
            title: "created!",
            text: "Teacher has been added.",
            icon: "success"
          });
          window. location. reload(); 
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Teacher isn't addedd :)",
            icon: "error"
          });
        }
      });
    }
    
    return (
        <div className='create-class'>
          <HomeNav/>
        <MDBContainer fluid >
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='text-black my-5 mx-auto subject-card'>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
            <h1 style={{marginLeft:0}}>TEACHER</h1>
            <div className='row'>
              <div className='left'>
              <form class="form-inline">
                <div className='form-input'> 
                  <label htmlFor="cname">Name : </label>
                  <input class="form-control" type="text" placeholder="name....." onChange={(e)=>{setName(e.target.value)}} maxLength='50'></input>
                
                <label class="form-check-label" style={{marginTop:'1em'}} htmlFor="gender">Gender : </label>
                <div>
                    <input class="form-check-input" type="radio" name='gender' onChange={(e)=>{setGender(e.target.value)}} value='M' ></input>
                    <label class="form-check-label" htmlFor="gender">  M  </label> 
                    </div>
                    <div>
                    <input class="form-check-input" type="radio" name='gender' onChange={(e)=>{setGender(e.target.value)}} value='F' ></input>
                    <label class="form-check-label"htmlFor="gender">  F  </label>
                  </div>

                  <label htmlFor="cname" style={{marginTop:'1em'}}>Designation : </label>
                  <input class="form-control" type="text" placeholder="eg: Assistant Professor" onChange={(e)=>{setDesig(e.target.value)}} maxLength='50'></input>

                  <label class="form-check-label" style={{marginTop:'1em'}} htmlFor="cblock">Department : </label>
                <div>
                    <input class="form-check-input" type="radio" name='cblock' onChange={(e)=>{setDept(e.target.value)}} value='ME' ></input>
                    <label class="form-check-label" htmlFor="cblock">  ME  </label> 
                    </div>
                    <div>
                    <input class="form-check-input" type="radio" name='cblock' onChange={(e)=>{setDept(e.target.value)}} value='CS' ></input>
                    <label class="form-check-label"htmlFor="cblock">  CS  </label>
                  </div>
                  <div>
                    <input class="form-check-input" type="radio" name='cblock' onChange={(e)=>{setDept(e.target.value)}} value='IT' ></input>
                    <label class="form-check-label"htmlFor="cblock">  IT  </label>
                  </div>
                  <div>
                    <input class="form-check-input" type="radio" name='cblock' onChange={(e)=>{setDept(e.target.value)}} value='EEE' ></input>
                    <label class="form-check-label"htmlFor="cblock">  EEE  </label>
                  </div>
                  <div> 
                    <input class="form-check-input" type="radio" name='cblock' onChange={(e)=>{setDept(e.target.value)}} value='EC' ></input>
                    <label class="form-check-label"htmlFor="cblock">  EC</label> 
                  </div>

                  
                  <label htmlFor="cname" style={{marginTop:'1em'}}>Email : </label>
                  <input class="form-control" type="text" placeholder='email.....' onChange={(e)=>{setEmail(e.target.value)}} maxLength='50'></input>

                  <label htmlFor="cname" style={{marginTop:'1em'}}>Phone No. : </label>
                  <input class="form-control" type="text" placeholder='phone no.....' onChange={(e)=>{setPhone(e.target.value)}} maxLength='50'></input>

                </div>
                </form>
              </div>
              <div className='right'>
                <div className='add-btn' style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                  <button className='btn btn-primary' style={{marginTop:'2em', width:'150px'}} onClick={handleClick} >Add</button>
                </div>
                <div>
                  <p style={{textAlign:'center',margin:'30px'}}>-------------------------- OR --------------------------</p>
                </div>
                <div className="title">
                <h5>Import Teachers. Upload '.csv' file below</h5>
          <p></p>
            </div>
        <form action='http://localhost:8081/teacher-import' method='post' encType='multipart/form-data'>
        <div className='mb-3'>
        <input type='file' className='form-control' name='file' accept='csv'/>
        </div>
        <div className='d-grid' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <input type='submit' class='btn btn-primary' value='Upload' style={{width:'150px'}}/>
        </div>
        <div className='d-grid' style={{display:'flex',justifyContent:'center',alignItems:'end'}}>
        <button className='btn btn-warning' style={{marginTop:'2rem'}}><Link to="/Files/teacher.csv" target="_blank" download style={{color:'black'}}>
        <i class="fa-solid fa-download"></i> Download Sample csv. file</Link></button>
        </div>
        </form>
              </div>
            </div> 
            </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
      
        </MDBContainer>
        </div>
      )
}

export default AddTeachers