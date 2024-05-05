import React,{useState} from 'react'
import './NormalClassroom.css'
import Bench from './Bench'

function NormalClassroom(props) {

  const [count,setCount] = useState(0)
  const [seats,setSeats] = useState('')
  const [status,setStatus] = useState('false')

  const ctype = props.ctype;
  
  const handleCheck = (e) => {
  if(e.target.checked){
    setStatus('true')
    }
  }

  const handleClick = (num,seat) => {
    setCount(count+num)
    if(num===-1){
      setSeats(seats.replace(' '+seat,''))
    }
    else{
      setSeats(seats+' '+seat)
    }
};

props.handleData(status,ctype,3,7,seats,count)

  return (
    <div>
      <div className='mainheading'>
      <h5 style={{marginTop:'60px'}}>Classroom preview</h5>
      </div>
      <div className='row' id="classroom">
        <div className='=subheading'>
          <h2 style={{color:'#005ce6'}}>{ctype}</h2>
        </div>
        <div className='=h3'>
          <p>select seating availability for the class</p>
        </div>
        <div className='desk'>
        <button id="desk"><i className="fa-solid fa-user"> Teacher</i></button>
        </div>
        
        <div className='column'>
        <h4 style={{textAlign:'center'}}>Section - A</h4>
          <Bench r='A1' st1='L' st2='M' st3='R' handleClick={handleClick}/>
          <Bench r='A2' st1='L' st2='M' st3='R' handleClick={handleClick}/>
          <Bench r='A3' st1='L' st2='M' st3='R' handleClick={handleClick}/>
          <Bench r='A4' st1='L' st2='M' st3='R' handleClick={handleClick}/>
          <Bench r='A5' st1='L' st2='M' st3='R' handleClick={handleClick}/>
          <Bench r='A6' st1='L' st2='M' st3='R' handleClick={handleClick}/>
          <Bench r='A7' st1='L' st2='M' st3='R' handleClick={handleClick}/>
        </div>
        <div className='column'>
        <h4 style={{textAlign:'center'}}>Section - B</h4>
          <Bench r='B1' st1='L' st2='M' st3='R' handleClick={handleClick}/>
          <Bench r='B2' st1='L' st2='M' st3='R' handleClick={handleClick}/>
          <Bench r='B3' st1='L' st2='M' st3='R' handleClick={handleClick}/>
          <Bench r='B4' st1='L' st2='M' st3='R' handleClick={handleClick}/>
          <Bench r='B5' st1='L' st2='M' st3='R' handleClick={handleClick}/>
          <Bench r='B6' st1='L' st2='M' st3='R' handleClick={handleClick}/>
          <Bench r='B7' st1='L' st2='M' st3='R' handleClick={handleClick}/>
        </div>
        <div className='column'>
        <h4 style={{textAlign:'center'}}>Section - C</h4>
          <Bench r='C1' st1='L' st2='M' st3='R' handleClick={handleClick}/>
          <Bench r='C2' st1='L' st2='M' st3='R' handleClick={handleClick}/>
          <Bench r='C3' st1='L' st2='M' st3='R' handleClick={handleClick}/>
          <Bench r='C4' st1='L' st2='M' st3='R' handleClick={handleClick}/>
          <Bench r='C5' st1='L' st2='M' st3='R' handleClick={handleClick}/>
          <Bench r='C6' st1='L' st2='M' st3='R' handleClick={handleClick}/>
          <Bench r='C7' st1='L' st2='M' st3='R' handleClick={handleClick}/> 
      </div>
      </div>
      <div>
      <div className='selected'>
          <p>seats selected: <strong>{count}</strong></p>
          <p><strong>{seats}</strong></p>
      </div>
      <div style={{textAlign:'center'}}>
            <input type='checkbox' name='disabled' id='dis' onChange={handleCheck}/>
            <label htmlFor="disabled" >  classroom for disabled  </label> 
        </div>
      </div>  
    </div>
  )
}

export default NormalClassroom