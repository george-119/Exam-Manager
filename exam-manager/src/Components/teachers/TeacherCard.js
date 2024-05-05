import React,{useState,useEffect} from 'react'
import './TeacherCard.css'
import Swal from 'sweetalert2';
import axios from 'axios';
import teacher1 from './Images/teacher1.jpeg'
import teacher2 from './Images/teacher2.jpeg'


function TeacherCard(props) {
  const [results,setResults] = useState([]) 
    // const [flag,setFlag] = useState(false) 
    let data={
        t_name : props.t_name,
        t_phone : props.t_phone
    }   

    useEffect(()=>{
        axios.get('http://localhost:8081/teacher',{params: data}).then((response)=>{
          setResults(response.data)
      })
      })

    const handleClick2 = ()=>{

    }

    const handleClick = ()=>{

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
            axios.delete('http://localhost:8081/teacher',{params: data}).then((response)=>{
        })
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: props.s_name+" has been deleted.",
              icon: "success"
            });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "Your classroom is safe :)",
              icon: "error"
            });
          }
        });
      }

  return ( 
    <div>
        {
        results.map((teachers)=>{
            let t_id = teachers.t_id
            let t_name = teachers.t_name
            let t_desig = teachers.t_desig
            let t_dept = teachers.t_dept
            let t_email = teachers.t_email
            let t_phone = teachers.t_phone
            let t_password = teachers.t_password
            let t_gender = teachers.t_gender
            
            return(    
          <div className='card-bg'>   
        <div className="card" >
        <div className='card-outer-body' style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}>   
        {t_gender === 'F'?<img className='crd-image' src={teacher2} style={{height:'150px',width:'150px'}}/> :<img className='crd-image' src={teacher1} style={{height:'150px',width:'150px'}}/> }
  <div className="card-body">
    <h5 className="card-title">{t_name}</h5>
    <h6 className="card-title">{t_desig} - {t_dept}</h6>
    <p className="card-text">{t_email}</p>
    <p className="card-text">{t_phone}</p>
     {/* <Popup trigger={<a  className="btn btn-primary" ><i class="far fa-eye"></i> View</a>} position="right center">
      <div style={{width:"10dp", height:"350px"}}>
      </div>
        <ClassroomView c_id={c_id} c_name={c_name} c_type={c_type} c_block={c_block}c_sections={c_sections} 
        c_benches={c_benches} c_seats={c_seats} c_sel_seats={c_sel_seats} c_disability={c_disability} /></Popup> */}
    <a  className="btn btn-primary" onClick={handleClick2} style={{marginLeft:'.5em',boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}}><i class="fa-regular fa-pen-to-square"></i> Edit</a>
    <a  className="btn btn-danger" onClick={handleClick} style={{marginLeft:'.5em',boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}}><i class="far fa-trash-can"></i> Delete</a>
    </div>
  </div>
</div>
{/* {flag && <ClassroomView c_id={c_id} c_name={c_name} c_type={c_type} c_block={c_block}c_sections={c_sections} 
        c_benches={c_benches} c_seats={c_seats} c_sel_seats={c_sel_seats} c_disability={c_disability} />} */}
</div> 
        )}
)}
    </div>
  )
}

export default TeacherCard