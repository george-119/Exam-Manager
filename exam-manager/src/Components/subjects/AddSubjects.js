import React, { useState,useEffect } from 'react'
import './AddSubjects.css'
import {MDBBtn,MDBContainer,MDBRow,MDBCol,MDBInput,MDBCard,MDBCardBody,MDBFooter,MDBIcon} 
from 'mdb-react-ui-kit';
import HomeNav from '../Navbars/HomeNav'
import background from '../admin/Images/bg4.jpg'
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

function AddSubjects() {

    useEffect(()=>{document.body.style.backgroundImage = `url(${background})`})

    const [dept,setDept] = useState('')
    const [code,setCode] = useState('')
    const [name,setName] = useState('')
    const [sem,setSem] = useState('')
    const radioInput=(e)=>{setDept(e.target.value)}
    const onInput1=(e)=>{setCode(e.target.value)}
    const onInput2=(e)=>{setName(e.target.value)}
    const handleOnChange = (e) =>{setSem(e.target.value)}

    let data={
        sb_id: '',
        sb_code: code,
        sb_name: name,
        sb_dept: dept,
        sb_semester: sem 
    }

    const handleClick =(event)=>{
        console.log(data)
        event.preventDefault();
  
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Add Subject "+name+"?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      axios.post('http://localhost:8081/addsubjects', data)
  .then(res=> console.log(res))
  .catch(err=>console.log(err))
      swalWithBootstrapButtons.fire({
        title: "created!",
        text: "Subject "+name+" has been added",
        icon: "success"
      });
      window. location. reload(); 
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Subject "+name+" isn't added:)",
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
        <h1 style={{marginLeft:0}}>SUBJECT</h1>
        <div className='row'>
          <div className='left'>
          <form class="form-inline">
            <div className='form-input'> 
              <label htmlFor="cname">Subject Code : </label>
              <input class="form-control" type="text" placeholder='eg: CST304...' onChange={onInput1} maxLength='10'></input>

              <label htmlFor="cname">Subject Name : </label>
              <input class="form-control" type="text" placeholder='eg: Algorithm Analysis & Design' onChange={onInput2} maxLength='50'></input>
            
            <label class="form-check-label" style={{marginTop:'2em'}} htmlFor="cblock">Department : </label>
            <div>
                <input class="form-check-input" type="radio" name='cblock' onChange={radioInput} value='ME' ></input>
                <label class="form-check-label" htmlFor="cblock">  ME  </label> 
                </div>
                <div>
                <input class="form-check-input" type="radio" name='cblock' onChange={radioInput} value='CS' ></input>
                <label class="form-check-label"htmlFor="cblock">  CS  </label>
              </div>
              <div>
                <input class="form-check-input" type="radio" name='cblock' onChange={radioInput} value='IT' ></input>
                <label class="form-check-label"htmlFor="cblock">  IT  </label>
              </div>
              <div>
                <input class="form-check-input" type="radio" name='cblock' onChange={radioInput} value='EEE' ></input>
                <label class="form-check-label"htmlFor="cblock">  EEE  </label>
              </div>
              <div> 
                <input class="form-check-input" type="radio" name='cblock' onChange={radioInput} value='EC' ></input>
                <label class="form-check-label"htmlFor="cblock">  EC</label> 
              </div> 
              <label htmlFor="classtypes" style={{marginTop:'2em'}}>Semester : </label>
              <select class="form-control" name="classtypes" id="classtypes" value={sem} onChange={handleOnChange} >
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
			<h5>Import Subjects. Upload '.csv' file below</h5>
      <p></p>
		</div>
    <form action='http://localhost:8081/subject-import' method='post' encType='multipart/form-data'>
    <div className='mb-3'>
    <input type='file' className='form-control' name='file' accept='csv'/>
    </div>
    <div className='d-grid' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <input type='submit' class='btn btn-primary' value='Upload' style={{width:'150px'}}/>
    </div>
    </form>
    <div className='d-grid' style={{display:'flex',justifyContent:'center',alignItems:'end'}}>
        <button className='btn btn-warning' style={{marginTop:'2rem'}}><Link to="/Files/subject.csv" target="_blank" download style={{color:'black'}}>
        <i class="fa-solid fa-download"></i> Download Sample csv. file</Link></button>
        </div>
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

export default AddSubjects