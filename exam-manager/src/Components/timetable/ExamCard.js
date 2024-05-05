import React,{useState,useEffect} from 'react'
import './ExamCard.css'
import Swal from 'sweetalert2'
import axios from 'axios'
import exam from './Images/exam.png'

function ExamCard(props) {
    const [results,setResults] = useState([]) 
    // const [flag,setFlag] = useState(false) 
    let data={
        tb_exname : props.tb_exname,
        tb_sub : props.tb_sub
    }   

    useEffect(()=>{
        axios.get('http://localhost:8081/exam',{params: data}).then((response)=>{
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
          text: "Scheduled timetable may be deleted!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete('http://localhost:8081/exam',{params: data}).then((response)=>{
        })
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: props.tb_exname+" has been deleted.",
              icon: "success"
            });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: props.tb_exname+" is safe :)",
              icon: "error"
            });
          }
        });
      }

  return ( 
    <div>
        {
        results.map((exams)=>{
            
            let tb_sub = exams.tb_sub
            let tb_exname = exams.tb_exname
            
            return(    
          <div className='card-bg'>   
        <div className="card" >
        <div className='card-outer-body' style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}>   
        <img className='crd-image' src={exam} style={{height:'170px',width:'170px'}}/>
  <div className="card-body">
    <h5 className="card-title">{tb_exname}</h5>
    {/* <h6 className="card-title">{t_desig} - {t_dept}</h6>
    <p className="card-text">{t_email}</p>
    <p className="card-text">{t_phone}</p> */}
     {/* <Popup trigger={<a  className="btn btn-primary" ><i class="far fa-eye"></i> View</a>} position="right center">
      <div style={{width:"10dp", height:"350px"}}>
      </div>
        <ClassroomView c_id={c_id} c_name={c_name} c_type={c_type} c_block={c_block}c_sections={c_sections} 
        c_benches={c_benches} c_seats={c_seats} c_sel_seats={c_sel_seats} c_disability={c_disability} /></Popup> */}
        <a  className="btn btn-primary" style={{boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}}><i class="fa-regular fa-folder-open"></i> Open</a>
    {/* <a  className="btn btn-primary" onClick={handleClick2} style={{marginLeft:'.5em'}}><i class="fa-regular fa-pen-to-square"></i> Edit</a>
    <a  className="btn btn-danger" onClick={handleClick} style={{marginLeft:'.5em'}}><i class="far fa-trash-can"></i> Delete</a> */}
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

export default ExamCard