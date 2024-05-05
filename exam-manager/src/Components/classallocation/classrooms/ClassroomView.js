import axios from 'axios'
import React, { useState,useEffect } from 'react'
import BenchView from './BenchView'
import './ClassroomView.css'

function ClassroomView(props) {

  const [results,setResults] = useState([])

const closePage = () => {
  window.location.reload();
}

console.log(results)

let section = props.c_sections
let benches = props.c_benches
let disability = ''

if(props.c_disability==='true'){
disability = 'Reserved for disabled'
}else{
disability = ''
}

  return (
    <div>
        <div>
        <div className='mainheading'>
        </div>
        <div className='row' id="classroom">
          <div className='=subheading'>
            <div className='btn-container'>
            <div className='btn-row'>
          <a  className="btn btn-primary" href="/editclassroom" ><i class="far fa-pen-to-square"></i> edit</a>
          </div>
          {/* <div className='btn-row'>
          <a  className="btn btn-danger" onClick={closePage} ><i class="far fa-circle-xmark"></i> close</a>
          </div> */}
          </div>
            <h2 style={{color:'#005ce6'}}>{props.c_type}</h2>
            <h4>{props.c_name}-{props.c_block} Block </h4>
          </div>
          <div className='=h3'>
          <p style={{textAlign:'center', color:'red'}}><strong>{disability}</strong></p>
            <p>seats available : {props.c_sel_seats}</p>
          </div>
          <div className='desk'>
          <button id="desk"><i className="fa-solid fa-user"> Teacher</i></button>
          </div>
          {Array(section).fill(true).map((item,ind)=>(
          <Column seats={props.c_seats} number={benches} r={ind} st1='L' st2='M' st3='R' />))}
          <div className='selected'>
          <p>seats selected: <strong>{props.c_sel_seats}</strong></p>
          <p><strong>{props.c_seats}</strong></p>
        </div>
          </div>
          </div>
        <div style={{textAlign:'center'}}>
          </div>
      </div>
    )
}

function Column(props) {

  let c = ''
  if(props.r===0){c='A'}else if(props.r===1){c='B'}else if(props.r===2){c='C'}else{c='D'}
  
    return(
        <div className='column'>
          <h4 style={{textAlign:'center'}}>Section - {c}</h4>
        {Array(props.number).fill(true).map((item, index) => (
          <BenchView seats={props.seats} r={c+''+(index+1)} st1={props.st1} st2={props.st2} st3={props.st3} />
        ))}
      </div>
    )
}

export default ClassroomView