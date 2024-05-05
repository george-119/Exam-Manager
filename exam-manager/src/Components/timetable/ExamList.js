import React,{useState,useEffect} from 'react'
import './ExamList.css'
import axios from 'axios'
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody}
from 'mdb-react-ui-kit'; 
import Swal from 'sweetalert2'
import background from '../admin/Images/bg4.jpg'
import HomeNav from '../Navbars/HomeNav'
import ExamCard from './ExamCard';
import * as GiIcons from "react-icons/gi";





function ExamList() {
    const [results,setResult] = useState([])
    const [flag,setFlag] = useState(true)
    
    useEffect(() => {
      document.body.style.backgroundImage = `url(${background})`
        axios.get('http://localhost:8081/exams').then((response)=>{
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
        text: "Scheduled exam will be removed from timetable!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete('http://localhost:8081/allexam').then((response)=>{
      })
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "All exams has been deleted.",
            icon: "success"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Exams are safe :)",
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
          <h1><GiIcons.GiNotebook/> exams</h1>
          <div className='card-top' style={{display:'flex',justifyContent:'flex-end',alignItems:'end'}}>
          <a  className="btn btn-danger" onClick={handleClick}  disabled={flag}><i class="far fa-trash-can"></i> Delete all</a>
          </div>
          {flag && <h3 style={{textAlign:'center', opacity:0.5}} >No exams found!</h3>}
        {
        results.map((exams)=>{
            
            return(
                <div style={{marginLeft : '50px', marginTop: '30px'}}>
                <div className='classcard'>
                    <ExamCard tb_sub={exams.tb_sub} tb_exname={exams.tb_exname}/>
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

export default ExamList