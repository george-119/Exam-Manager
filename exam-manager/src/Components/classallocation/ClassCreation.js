import React,{useEffect, useState} from 'react'
import NormalClassroom from './classrooms/NormalClassroom'
import CustomClassroom from './classrooms/CustomClassroom'
import {MDBBtn,MDBContainer,MDBRow,MDBCol,MDBInput,MDBCard,MDBCardBody,MDBFooter,MDBIcon} 
from 'mdb-react-ui-kit';
import './ClassCreation.css'
import axios from 'axios'
import background from '../admin/Images/bg4.jpg'
import HomeNav from '../Navbars/HomeNav';
import Swal from 'sweetalert2';

function ClassCreation() {

  const [count,setCount] = useState(0)
  const [seats,setSeats] = useState('')
  const [bench,setBench] = useState(0)
  const [section,setSection] = useState(0)
  const [classroom,setClassroom]= useState('---select---')
  const [ctype,setCtype]= useState('')
  const [type,setType] = useState('')
  const [status,setStatus] = useState ('')
  const [normalclassroomvisible,setNormalclassroomvisible] = useState(false)
  const [customclassroomvisible,setCustomclassroomvisible] = useState(false)
  const [block,setBlock] = useState('')
  const [name,setName] = useState('')

const handleData = (cstatus,types,sections,benches,seat,scount)=>{
    setCount(scount)
    setSeats(seat)
    setBench(benches)
    setSection(sections)
    setType(types)
    setStatus(cstatus)
} 

  const data = {
    c_id: '',
    c_name: name,
    c_block: block,
    c_type: type,
    c_sections: section,
    c_benches: bench,
    c_seats: seats,
    c_sel_seats: count,
    c_disability: status
}
const handleSubmit = (event) =>{
  event.preventDefault();
  
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Create classroom "+name+"?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      axios.post('http://localhost:8081/createclass', data)
  .then(res=> console.log(res))
  .catch(err=>console.log(err))
      swalWithBootstrapButtons.fire({
        title: "created!",
        text: "Your classroom has been created.",
        icon: "success"
      });
      window. location. reload(); 
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your classroom isn't created :)",
        icon: "error"
      });
    }
  });
}

  const handleOnChange = (e) =>{setClassroom(e.target.value)}

  const handleChange = (e) =>{setCtype(e.target.value)}


  useEffect(()=>{
    document.body.style.backgroundImage = `url(${background})`;
    classroom==='nm' ? setNormalclassroomvisible(true) && setCtype('Normal Classroom') : setNormalclassroomvisible(false)
    classroom==="cs" ? setCustomclassroomvisible(true) : setCustomclassroomvisible(false)
  })

  const radioInput=(e)=>{setBlock(e.target.value)}
  const onInput=(e)=>{setName(e.target.value)}
  
  
  return (
    <div className='create-class'>
      <HomeNav/>
    <MDBContainer fluid >
    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
    <MDBCol col='12'>
      <MDBCard className='text-black my-5 mx-auto class-card' style={{borderRadius: '1rem', maxWidth: 'auto', backgroundColor: "rgb(255 255 255/95%)"}}>
        <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
        <h1 className='heading' style={{marginLeft:0}}>CLASSROOM</h1>
        <div className='row'>
          <div className='left'>
          <form class="form-inline">
            <div className='form-input'> 
              <label htmlFor="cname">Classroom Code : </label>
              <input class="form-control" type="text" placeholder='eg: A301...' maxLength='4' onChange={onInput}></input>
          
              <div className='form-input'>
              <label htmlFor="ctname" style={{marginTop:'2em'}}>Classroom Name : </label>
              <input class="form-control" type="text" placeholder='eg: S6 CSE...' value={ctype} onChange={handleChange}/>
              </div>
            
            <label class="form-check-label" style={{marginTop:'2em'}} htmlFor="cblock">Department/Block : </label>
            <div>
                <input class="form-check-input" type="radio" name='cblock' value='Administrative' onChange={radioInput}></input>
                <label class="form-check-label" htmlFor="cblock">  Administrative  </label> 
                </div>
              <div>
                <input class="form-check-input" type="radio" name='cblock' value='CS/IT' onChange={radioInput}></input>
                <label class="form-check-label"htmlFor="cblock">  CS/IT  </label>
              </div>
              <div> 
                <input class="form-check-input" type="radio" name='cblock' value='EEE/EC' onChange={radioInput}></input>
                <label class="form-check-label"htmlFor="cblock">  EEE/EC</label> 
              </div> 
              <label htmlFor="classtypes" style={{marginTop:'2em'}}>Classroom Type : </label>
              <select class="form-control" name="classtypes" id="classtypes" value={classroom} onChange={handleOnChange}>
                <option value="">---select---</option>
                <option value="nm">Normal Classroom</option>
                <option value="se">Seminar Hall</option>
                <option value="sm">Small classroom</option>
                <option value="ex">Extended classroom</option>
                <option value="cs">Custom</option>
              </select>
            </div>
            </form>
          </div>
          <div className='right'>
           {normalclassroomvisible && <NormalClassroom ctype={ctype} handleData={handleData}/>}
           {customclassroomvisible &&  <CustomClassroom ctype={ctype} handleData={handleData}/> }

            <div class='create-btn' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <button className='btn btn-primary' style={{width:'150px',marginTop:'2em'}} onClick={handleSubmit}>Create</button>
            </div>
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

export default ClassCreation