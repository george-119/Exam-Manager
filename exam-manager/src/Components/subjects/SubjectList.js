import './SubjectList.css'
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody}
from 'mdb-react-ui-kit';
import HomeNav from '../Navbars/HomeNav'
import SubjectCard from './SubjectCard'
import axios from 'axios';
import background from '../admin/Images/bg4.jpg'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import * as GiIcons from "react-icons/gi";


function SubjectList() {

  const [results,setResult] = useState([])
  const [resultcopy,setResultcopy] = useState([])
  const [flag,setFlag] = useState(true)
   
    
    useEffect(() => {
      document.body.style.backgroundImage = `url(${background})`
      axios.get('http://localhost:8081/subjects').then((response)=>{
      setResult(response.data)
      if(results.length>0)setFlag(false)
      else setFlag(true)
    })
   },[])

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
          axios.delete('http://localhost:8081/allsubject').then((response)=>{
            setFlag(true)
      })
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "All Subjects has been deleted.",
            icon: "success"
          });
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Subject records are safe :)",
            icon: "error"
          });
        }
      });

    }
    
    
  return (
    <div className= 'parent'>
      <HomeNav/>
        <MDBContainer fluid className='main-subject-container'>
  
  <MDBRow className='d-flex justify-content-left align-items-left h-100'>
    <MDBCol col='12'>
      <MDBCard className='text-black my-5 mx-auto card subject-container'>
        <MDBCardBody className='p-5 d-flex flex-column align-items-left mx-auto w-100'>
           <h1><GiIcons.GiBookshelf/> subjects</h1>
          <div className='card-top'>

    <input type="search" id="form1" onChange={(e) =>{
      if(e.currentTarget.value.length!==0){
        
        let key = e.currentTarget.value
        let search = key.toLowerCase();
        setResultcopy(results.filter((data)=>{
          let dname = data.sb_name.toLowerCase()
          let dcode = data.sb_code.toLowerCase()
          let dsem = data.sb_semester.toLowerCase()
          let ddept = data.sb_dept.toLowerCase()
          return(dname.includes(search) || dcode.includes(search) || dsem.includes(search) || ddept.includes(search))
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

          {flag && <h3 style={{textAlign:'center', opacity:0.5}} >No subjects found!</h3>}
        {
        resultcopy.length===0?
        results.map((subjects)=>{
            
            return(
                <div style={{marginLeft : '50px', marginTop: '30px'}}>
                <div className='classcard'>
                    <SubjectCard sb_code={subjects.sb_code} sb_name={subjects.sb_name}/>
                    </div>
                </div> 
            )
        }):resultcopy.map((subjects)=>{
            
          return(
              <div style={{marginLeft : '50px', marginTop: '30px'}}>
              <div className='classcard'>
                  <SubjectCard sb_code={subjects.sb_code} sb_name={subjects.sb_name}/>
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

export default SubjectList