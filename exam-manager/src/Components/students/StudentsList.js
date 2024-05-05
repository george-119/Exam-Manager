import React,{useState,useEffect} from 'react'
import './StudentsList.css'
import {MDBBtn,MDBContainer,MDBRow,MDBCol,MDBInput,MDBCard,MDBCardBody,MDBFooter,MDBIcon}
from 'mdb-react-ui-kit'; 
import axios from 'axios'
import background from '../admin/Images/bg4.jpg'
import HomeNav from '../Navbars/HomeNav'
import StudentCard from './StudentCard';
import Swal from 'sweetalert2';
import * as PiIcons from "react-icons/pi";


function StudentsList() {
    const [results,setResult] = useState([])
    const [resultcopy,setResultcopy] = useState([])
    const [flag,setFlag] = useState(true)

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
          axios.delete('http://localhost:8081/allstudent').then((response)=>{
      })
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "All students has been deleted.",
            icon: "success"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Student records are safe :)",
            icon: "error"
          });
        }
      });

    }
    
    useEffect(() => {
      document.body.style.backgroundImage = `url(${background})`
        axios.get('http://localhost:8081/students').then((response)=>{
        setResult(response.data)
        if(results.length>0)setFlag(false)
    })
    },[])
    
    
  return (
    <div className='parent'>
      <HomeNav/>
        <MDBContainer fluid className='main-student-container'>
  
  <MDBRow className='d-flex justify-content-left align-items-left h-100'>
    <MDBCol col='12'>
      <MDBCard className='text-black my-5 mx-auto card student-container' >
        <MDBCardBody className='p-5 d-flex flex-column align-items-left mx-auto w-100'>
          <h1><PiIcons.PiStudentBold/> students</h1>
          <div className='card-top'>

    <input type="search" id="form1" onChange={(e) =>{
      if(e.currentTarget.value.length!==0){
        
        let key = e.currentTarget.value
        let search = key.toLowerCase();
        setResultcopy(results.filter((data)=>{
          let dname = data.s_name.toLowerCase()
          let drollno = data.s_rollno.toLowerCase()
          let dsem = data.s_semester.toLowerCase()
          let ddept = data.s_department.toLowerCase()
          let dclass = data.s_semester.toLowerCase()+data.s_department.toLowerCase()
          return(dname.includes(search) || drollno.includes(search) || dsem.includes(search) || ddept.includes(search) || dclass.includes(search))
        }))
      }else{
        setResultcopy([])
      }
      


    }} placeholder="  search" className='input-search'/>
  <button type="button" disabled class="btn btn-primary btn-search" >
    <i class="fas fa-search"></i>
  </button>

          <a  className="btn btn-danger btn-delall" onClick={handleClick}  disabled={flag} ><i class="far fa-trash-can"></i> Delete all</a>
          </div>
          <div className='subject-scroll'>
          {flag && <h3 style={{textAlign:'center', opacity:0.5}} >No students left!</h3>}
          {
        resultcopy.length===0?
        results.map((students)=>{
            
            return(
                <div style={{marginLeft : '50px', marginTop: '30px'}}>
                <div className='classcard'>
                <StudentCard s_rollno={students.s_rollno} s_name={students.s_name}/>
                    </div>
                </div> 
            )
        }):resultcopy.map((students)=>{
            
          return(
              <div style={{marginLeft : '50px', marginTop: '30px'}}>
              <div className='classcard'>
              <StudentCard s_rollno={students.s_rollno} s_name={students.s_name}/>
                  </div>
              </div> 
          )
      })
        }
        </div>
        </MDBCardBody>
          </MDBCard>
  
        </MDBCol>
      </MDBRow>
  
    </MDBContainer>
         </div>
  )
}

export default StudentsList