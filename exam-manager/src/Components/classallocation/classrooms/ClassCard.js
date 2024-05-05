import React, { useState,useEffect } from 'react'
import axios from 'axios'
import ClassroomView from './ClassroomView';
import Popup from 'reactjs-popup';
import Swal from 'sweetalert2';
import classroom from './Images/classroom.png'

function ClassCard(props) {

    const [results,setResults] = useState([]) 
    const [flag,setFlag] = useState(false) 
    const [text,setText] = useState('View Classroom') 

        let data={
            c_name : props.c_name,
            c_id : props.c_id
        }   
        let name = props.c_name

    useEffect(()=>{
      axios.get('http://localhost:8081/classroom',{params: data}).then((response)=>{
        setResults(response.data)
    })
    })

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
        axios.delete('http://localhost:8081/classroom',{params: data}).then((response)=>{
    })
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your classroom has been deleted.",
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
        results.map((classes)=>{
            let c_id = classes.c_id
            let c_name = classes.c_name
            let c_type = classes.c_type
            let c_block = classes.c_block
            let c_sections = classes.c_sections
            let c_benches = classes.c_benches
            let c_seats = classes.c_seats
            let c_sel_seats = classes.c_sel_seats
            let c_disability = classes.c_disability
            let disability = ''
            if(classes.c_disability==='true'){
                disability = ' for Disabled'
                }
            return(    
          <div className='card-bg'>   
        <div className="card">
        <div className='card-outer-body' style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}>   
        <img className='crd-image' src={classroom} style={{height:'150px',width:'150px',marginLeft:'10px'}}/> 
  <div className="card-body">
    <h5 className="card-title">{classes.c_name}</h5>
    <h6 className="card-title">{classes.c_block} Block</h6>
    <p className="card-text">{classes.c_type}{disability}</p>
    <p className="card-text">{classes.c_sel_seats} seats available</p>
     <Popup trigger={<a  className="btn btn-primary" style={{boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}}><i class="far fa-eye"></i> View</a>} position="right center">
      <div style={{width:"10dp", height:"350px"}}>
      </div>
        <ClassroomView c_id={c_id} c_name={c_name} c_type={c_type} c_block={c_block}c_sections={c_sections} 
        c_benches={c_benches} c_seats={c_seats} c_sel_seats={c_sel_seats} c_disability={c_disability} /></Popup>
    {/* <a  className="btn btn-primary" onClick={} style={{marginLeft:'.5em'}}>View</a> */}
    <a  className="btn btn-danger" onClick={handleClick} style={{marginLeft:'.5em',boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}}><i class="far fa-trash-can"></i> Delete</a>
  </div>
</div>
{flag && <ClassroomView c_id={c_id} c_name={c_name} c_type={c_type} c_block={c_block}c_sections={c_sections} 
        c_benches={c_benches} c_seats={c_seats} c_sel_seats={c_sel_seats} c_disability={c_disability} />}
        </div>
</div> 
        )}
)}
    </div>
  )
}

export default ClassCard