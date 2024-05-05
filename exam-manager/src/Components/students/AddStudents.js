import React, { useState,useEffect } from 'react'
import './AddStudents.css'
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody} 
from 'mdb-react-ui-kit';
import background from '../admin/Images/bg4.jpg'
import HomeNav from '../Navbars/HomeNav'
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

function AddStudents() {

  useEffect(()=>{document.body.style.backgroundImage = `url(${background})`})

  const [name,setName] = useState('')
  const [gender,setGender] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [rollno,setRollno] = useState('')
  const [sem,setSem] = useState('')
  const [dept,setDept] = useState('')
  const [exmid,setExmid] = useState('')

  let data = {
    s_id: '',
    s_name: name,
    s_gender: gender,
    s_email: email,
    s_phone: phone,
    s_rollno: rollno,
    s_semester: sem,
    s_department: dept,
    s_examids: exmid,
    s_password: rollno
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
        title: "Add student "+name+"?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          axios.post('http://localhost:8081/student', data)
          .then(res=> console.log(res))
          .catch(err=>console.log(err))
          swalWithBootstrapButtons.fire({
            title: "created!",
            text: "Student has been added.",
            icon: "success"
          });
          window. location. reload(); 
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Student isn't addedd :)",
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
            <h1 style={{marginLeft:0}}>STUDENT</h1>
            <div className='row'>
              <div className='left'>
              <form class="form-inline">
                <div className='form-input'> 
                  <label htmlFor="cname">Name : </label>
                  <input class="form-control" type="text" placeholder="name....." onChange={(e)=>{setName(e.target.value)}} maxLength='50'></input>
                
                <label class="form-check-label" style={{marginTop:'1em'}} htmlFor="cblock">Gender : </label>
                <div>
                    <input class="form-check-input" type="radio" name='cblock' onChange={(e)=>{setGender(e.target.value)}} value='M' ></input>
                    <label class="form-check-label" htmlFor="cblock">  M  </label> 
                    </div>
                    <div>
                    <input class="form-check-input" type="radio" name='cblock' onChange={(e)=>{setGender(e.target.value)}} value='F' ></input>
                    <label class="form-check-label"htmlFor="cblock">  F  </label>
                  </div>

                  <label htmlFor="cname" style={{marginTop:'1em'}}>Email : </label>
                  <input class="form-control" type="text" placeholder="email....." onChange={(e)=>{setEmail(e.target.value)}} maxLength='50'></input>

                  <label htmlFor="cname" style={{marginTop:'1em'}}>Phone No. : </label>
                  <input class="form-control" type="text" placeholder="phone no....." onChange={(e)=>{setPhone(e.target.value)}} maxLength='50'></input>

                  <label htmlFor="cname" style={{marginTop:'1em'}}>University Roll No. : </label>
                  <input class="form-control" type="text" onChange={(e)=>{setRollno(e.target.value)}} placeholder="eg: LIDK21CS123" maxLength='50'></input>

                  <label htmlFor="classtypes" style={{marginTop:'1em'}}>Semester : </label>
                  <select class="form-control" name="classtypes" id="classtypes" value={sem} onChange={(e)=>{setSem(e.target.value)}} >
                    <option value="">---select---</option>
                    <option value="S1">S1</option>
                    <option value="S2">S2</option>
                    <option value="S3">S3</option>
                    <option value="S4">S4</option>
                    <option value="S5">S5</option>
                    <option value="S6">S6</option>
                    <option value="S7">S7</option>
                    <option value="S8">S8</option>
                  </select>

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

                  <label htmlFor="cname" style={{marginTop:'1em'}}>Registered Subject Codes for Exam. : </label>
                  <input class="form-control" type="text" onChange={(e)=>{setExmid(e.target.value)}} placeholder="eg: CST306-CST308-CST302" maxLength='50'></input>

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
                <h5>Import Students. Upload '.csv' file below</h5>
          <p></p>
            </div>
        <form action='http://localhost:8081/student-import' method='post' encType='multipart/form-data'>
        <div className='mb-3'>
        <input type='file' className='form-control' name='file' accept='csv'/>
        </div>
        <div className='d-grid' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <input type='submit' class='btn btn-primary' value='Upload' style={{width:'150px'}}/>
        </div>
        <div className='d-grid' style={{display:'flex',justifyContent:'center',alignItems:'end'}}>
        <button className='btn btn-warning' style={{marginTop:'2rem'}}><Link to="/Files/student.csv" target="_blank" download style={{color:'black'}}>
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

export default AddStudents