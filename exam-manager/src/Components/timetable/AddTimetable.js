import React,{useEffect} from 'react'
import './AddTimetable.css'
import background from '../admin/Images/bg4.jpg'
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody} 
from 'mdb-react-ui-kit';
import HomeNav from '../Navbars/HomeNav'
import { Link } from 'react-router-dom';

function AddTimetable() {
    useEffect(()=>{document.body.style.backgroundImage = `url(${background})`})

    return (
        <div className='create-class'>
          <HomeNav/>
        <MDBContainer fluid >
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='text-black my-5 mx-auto subject-card'>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
            <h1 style={{marginLeft:0}}>TIMETABLE</h1>
            <div className='row'>
              <div className='left'>
                <div className="title">
                <h5>Import Timetable. Upload '.csv' file below</h5>
          <p></p>
            </div>
        <form action='http://localhost:8081/timetable-import' method='post' encType='multipart/form-data'>
        <div className='mb-3'>
        <input type='file' className='form-control' name='file' accept='csv'/>
        </div>
        <div className='d-grid' style={{display:'flex',justifyContent:'center',alignItems:'end'}}>
          <input type='submit' class='btn btn-primary' value='Upload' style={{width:'150px'}}/>
        </div>
        <div className='d-grid' style={{display:'flex',justifyContent:'center',alignItems:'end'}}>
        <button className='btn btn-warning' style={{marginTop:'2rem'}}><Link to="/Files/timetable.csv" target="_blank" download style={{color:'black'}}>
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

export default AddTimetable