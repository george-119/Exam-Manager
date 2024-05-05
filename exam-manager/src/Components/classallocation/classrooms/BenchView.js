import React,{useState} from 'react'
import './BenchView.css'

function Bench(props) {

    const str = props.seats
    const s = '-'
    const r = props.r+s
    const st1 = r+props.st1
    const st2 = r+props.st2
    const st3 = r+props.st3
    let flag1 = str.includes(st1)
    let flag2 = str.includes(st2)
    let flag3 = str.includes(st3)
    let activeA = false
    let activeB = false
    let activeC = false

    if(flag1){activeA=true}if(flag2){activeB=true}if(flag3){activeC=true}


  return (
    <div>
        <div>
        <div className='bench'>
            <label id='bench'><strong>{props.r} </strong></label>
            <button id='A' className="bench1" disabled={activeA? false: true}  style={{ backgroundColor: activeA ? "#1ea83c" : "#AAACAC"}}>
            <i class="fas fa-user-tie"></i><strong> {props.st1}</strong></button>
            <button id='B' className="bench1" disabled={activeB? false: true}  style={{ backgroundColor: activeB ? "#1ea83c" : "#AAACAC" }}>
            <i class="fas fa-user-tie"></i><strong> {props.st2}</strong></button>
            <button id='C' className="bench1" disabled={activeC? false: true}  style={{ backgroundColor: activeC ? "#1ea83c" : "#AAACAC" }}>
            <i class="fas fa-user-tie"></i><strong> {props.st3}</strong></button>
        </div>
        </div>
    </div>
  )
}

export default Bench