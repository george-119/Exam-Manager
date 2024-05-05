import React, { useState,useEffect } from 'react'
import ClassCard from './ClassCard'
import {MDBBtn,MDBContainer,MDBRow,MDBCol,MDBInput,MDBCard,MDBCardBody,MDBFooter,MDBIcon}
from 'mdb-react-ui-kit'; 
import axios from 'axios'
import background  from '../../admin/Images/bg4.jpg'
import HomeNav from '../../Navbars/HomeNav';
import Swal from 'sweetalert2';
import * as SiIcons from "react-icons/si";



function ClassList() {

    const [results,setResult] = useState([])
    const [flag,setFlag] = useState(true)
    
    useEffect(() => {
      document.body.style.backgroundImage = `url(${background})`
        axios.get('http://localhost:8081/classes').then((response)=>{
        setResult(response.data)
        if(results.length>0)setFlag(false)
    })
    })

    const handleClick =()=>{
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete('http://localhost:8081/allclassroom').then((response)=>{
      })
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "All classrooms has been deleted.",
            icon: "success"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Classrooms are safe :)",
            icon: "error"
          });
        }
      });

    }
    
    
  return (
    <div className= 'parent'>
      <HomeNav/>
        <MDBContainer fluid>
  
  <MDBRow className='d-flex justify-content-left align-items-left h-100'>
    <MDBCol col='12'>
      <MDBCard className='text-black my-5 mx-auto card' style={{borderRadius: '2rem', maxWidth: '90%', background:'#f2f2f2'}}>
        <MDBCardBody className='p-5 d-flex flex-column align-items-left mx-auto w-100'>
          <h1><SiIcons.SiGoogleclassroom/> classrooms</h1>
          <div className='card-top' style={{display:'flex',justifyContent:'flex-end',alignItems:'end'}}>
          <a  className="btn btn-danger" onClick={handleClick}  disabled={flag}><i class="far fa-trash-can"></i> Delete all</a>
          </div>
          {flag && <h3 style={{textAlign:'center', opacity:0.5}} >No classrooms left!</h3>}
        {
        results.map((classes)=>{
            
            return(
                <div style={{marginLeft : '50px', marginTop: '30px'}}>
                
                <div className='classcard'>
                    <ClassCard c_id={classes.c_id} c_name={classes.c_name}/>
                    </div>
                </div> 
            )
        })
        }
        <div className='right'>

        </div>
        </MDBCardBody>
          </MDBCard>
  
        </MDBCol>
      </MDBRow>
  
    </MDBContainer>
         </div>
  )
}

export default ClassList