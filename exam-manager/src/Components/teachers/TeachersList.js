import React,{useState,useEffect} from 'react'
import './TeachersList.css'
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody}
from 'mdb-react-ui-kit'; 
import axios from 'axios'
import background from '../admin/Images/bg4.jpg'
import HomeNav from '../Navbars/HomeNav'
import TeacherCard from './TeacherCard';
import Swal from 'sweetalert2';
import * as FaIcons from "react-icons/fa";


function TeachersList() {
  const [results,setResult] = useState([])
    const [flag,setFlag] = useState(true)
    
    useEffect(() => {
      document.body.style.backgroundImage = `url(${background})`
        axios.get('http://localhost:8081/teachers').then((response)=>{
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
          axios.delete('http://localhost:8081/allteacher').then((response)=>{
      })
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "All staff records has been deleted.",
            icon: "success"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Staff records are safe :)",
            icon: "error"
          });
        }
      });

    }
    
    
  return (
    <div className= 'parent'>
      <HomeNav/>
        <MDBContainer fluid >
  
  <MDBRow className='d-flex justify-content-left align-items-left h-100'>
    <MDBCol col='12'>
      <MDBCard className='text-black my-5 mx-auto card' style={{borderRadius: '2rem', maxWidth: '90%', background:'#f2f2f2', }}>
        <MDBCardBody className='p-5 d-flex flex-column align-items-left mx-auto w-100'>
          <h1><FaIcons.FaChalkboardTeacher/> teachers</h1>
          <div className='card-top' style={{display:'flex',justifyContent:'flex-end',alignItems:'end'}}>
          <a  className="btn btn-danger" onClick={handleClick}  disabled={flag}><i class="far fa-trash-can"></i> Delete all</a>
          </div>
          {flag && <h3 style={{textAlign:'center', opacity:0.5}} >No teachers left!</h3>}
        {
        results.map((teachers)=>{
            
            return(
                <div style={{marginLeft : '50px', marginTop: '30px'}}>
                <div className='classcard'>
                    <TeacherCard t_phone={teachers.t_phone} t_name={teachers.t_name}/>
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

export default TeachersList