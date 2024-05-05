import React,{useState,useEffect} from 'react'
import './SubjectCard'
import axios from 'axios'
import Swal from 'sweetalert2'
import books from './Images/books.png'


function SubjectCard(props) {
    const [results,setResults] = useState([]) 
    // const [flag,setFlag] = useState(false) 
    let data={
        sb_name : props.sb_name,
        sb_code : props.sb_code
    }   

    useEffect(()=>{
        axios.get('http://localhost:8081/subject',{params: data}).then((response)=>{
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
            axios.delete('http://localhost:8081/subject',{params: data}).then((response)=>{
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
        results.map((subjects)=>{
            let sb_id = subjects.sb_id
            let sb_code = subjects.sb_code
            let sb_name = subjects.sb_name
            let sb_dept = subjects.sb_dept
            let sb_semester = subjects.sb_semester
            
            
            return(    
          <div className='card-bg'>   
        <div className="card" >
        <div className='card-outer-body' style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}>   
        <img className='crd-image' src={books} style={{height:'150px',width:'150px'}}/> 
  <div className="card-body">
    <h5 className="card-title">{sb_name}</h5>
    <h6 className="card-title">{sb_code}</h6>
    <p className="card-text">{sb_semester}{sb_dept}</p>
    {/* <p className="card-text">{s_phone}</p> */}
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

export default SubjectCard