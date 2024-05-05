import React,{useState,useEffect} from 'react'
import './CustomClassroom.css'
import Bench from './Bench';

function CustomClassroom(props) {

    const [count,setCount] = useState(0)
    const [seats,setSeats] = useState('')
    const [rows,setRows] = useState('---select---')
    const [index,setIndex] = useState(0)
    const [number,setNumber] = useState(1)
    const [columnvisible,setColumnvisible] = useState(false)
    const [status,setStatus] = useState('false')

    //array of selected seats
    //let seatarray = seats

    const handleClick = (num,seat) => {
      setCount(count+num)
      if(num===-1){
        setSeats(seats.replace(' '+seat,''))
      }
      else{
        setSeats(seats+' '+seat)
      }

    };
    const handleOnChange = (e) => {setRows(e.target.value)}
    const handleChange = (e) => {setNumber(e.target.value)}
    const handleCheck = (e) => { if(e.target.checked){
      setStatus('true')
    }
  }


    useEffect(()=>{
        if(rows==='1'){
            setColumnvisible(true)
            setIndex(1)
        }else if(rows==='2'){
            setColumnvisible(true)
            setIndex(2)
        }else if(rows==='3'){
          setColumnvisible(true)
          setIndex(3)
        }else if(rows==='4'){
          setColumnvisible(true)
          setIndex(4)
        }else{
            setColumnvisible(false)
        }

        if(number==='1'){
            setNumber(1)
        }else if(number==='2'){
            setNumber(2)
        }else if(number==='3'){
            setNumber(3)
        }else if(number==='4'){
            setNumber(4)
        }else if(number==='5'){
            setNumber(5)
        }else if(number==='6'){
            setNumber(6)
        }else if(number==='7'){
            setNumber(7)
        }else if(number==='8'){
            setNumber(8)
        }else if(number==='9'){
          setNumber(9)
        }else if(number==='10'){
          setNumber(10)
        }else if(number==='11'){
          setNumber(11)
        }else if(number==='12'){
          setNumber(12)
        }else{}

      })
      props.handleData(status,props.ctype,index,number,seats,count) 
  
    return (
      <div>
        <form class="form-inline">
              <div className='form-input'>
        <div>
              <label htmlFor="brows" style={{marginTop:'2em'}}>Number of sections : </label>
              <select class="form-control" name="brows" id="brows" value={rows} onChange={handleOnChange}>
                <option value="">-select-</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
              </select>
            </div> 
            <div> 
              <label htmlFor="brnumber" style={{marginTop:'2em'}}>Number of benches </label>
              <select class="form-control" name="brnumber" id="brnumber" value={number} onChange={handleChange}>
                <option value="1">1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
              </select>
            </div>
            </div>
            </form>
        <div className='mainheading'>
        <h5 style={{marginTop:'60px'}}>Classroom preview</h5>
        </div>
        <div className='row' id="classroom">
          <div className='=subheading'>
            <h2 style={{color:'#005ce6'}}>{props.ctype}</h2>
          </div>
          {columnvisible && <div className='=h3'>
            <p>select seating availability for the class</p>
          </div>}
          <div className='desk'>
          <button id="desk"><i className="fa-solid fa-user"> Teacher</i></button>
          </div>
          {columnvisible && Array(index).fill(true).map((item,ind)=>(
          <Column number={number} r={ind} st1='L' st2='M' st3='R' handleClick={handleClick}/>))}
          </div>
          <div>
          <div className='selected'>
          <p>seats selected: <strong>{count}</strong></p>
          <p><strong>{seats}</strong></p>
        </div>
        <div style={{textAlign:'center'}}>
            <input class="form-check-input" type='checkbox' name='disabled' id='dis' onChange={handleCheck}/>
            <label class="form-check-label" htmlFor="disabled" >classroom for disabled</label> 
          </div>
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
          <Bench r={c+''+(index+1)} st1={props.st1} st2={props.st2} st3={props.st3} handleClick={props.handleClick}/>
        ))}
      </div>
    )
}

export default CustomClassroom