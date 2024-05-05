import React,{ useEffect, useState} from 'react'
import './Bench.css'

function Bench(props) {

    const [activeA, setActive1] = useState(false);
    const [activeB, setActive2] = useState(false);
    const [activeC, setActive3] = useState(false);

    
    const handleClick = (id) => {
        
        if(id==='A'){
            setActive1(!activeA)
            if(activeA){
                props.handleClick(-1,props.r+'-L')
            }else{
                props.handleClick(1,props.r+'-L')
            }
        }else if(id==='B'){
            setActive2(!activeB);
            if(activeB){
                props.handleClick(-1,props.r+'-M')
            }else{
                props.handleClick(1,props.r+'-M')
            }
        }else{
            setActive3(!activeC);
            if(activeC){
                props.handleClick(-1,props.r+'-R')
            }else{
                props.handleClick(1,props.r+'-R')
                
            }
        }
    };


  return (
        <div className='bench'>
            <label id='bench'><strong>{props.r} </strong></label>
            <button id='A' className="bench1" onClick={() => { handleClick('A') }} style={{ backgroundColor: activeA ? "#1ea83c" : "white" }}>
            <i class="fas fa-user-tie"></i><strong> {props.st1}</strong></button>
            <button id='B' className="bench1"onClick={() => { handleClick('B') }} style={{ backgroundColor: activeB ? "#1ea83c" : "white" }}>
            <i class="fas fa-user-tie"></i><strong> {props.st2}</strong></button>
            <button id='C' className="bench1"onClick={() => { handleClick('C') }} style={{ backgroundColor: activeC ? "#1ea83c" : "white" }}>
                <i class="fas fa-user-tie"></i><strong> {props.st3}</strong></button>
        </div>
  )
}

export default Bench;