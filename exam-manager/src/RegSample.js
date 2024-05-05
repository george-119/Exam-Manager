import React, { useState } from 'react';

// import './detf1.css';
// import './Form.css';
import axios from 'axios';
// import LoginForm from './LoginForm';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';



const RegistrationForm = () => {
  let [click,setClick] = useState(0);
  const {register,handleSubmit,formState:{errors}} = useForm();

// const [action,setaction] =useState("Sign Up");

  const [uname, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [cpassword, setcpassword] = useState('');

  const data = {
    id:'',
    name: uname,
    address: address,
    mobile: phonenumber,
    email: email,
    password: password,
    cpassword: cpassword
  }

  // const [values, setValues] = useState({
  //   name: '',
  //   address: '',
  //   phonenumber:'',
  //   email: '',
  //   password: '',
  //   cpassword: ''
   
    
  // });

// const handleChange = (event) => {
//   setValues({...values, [event.target.name]:[event.target.value]})
// }


  // const [formData, setFormData] = useState({
  //   name: '',
  //   address: '',
  //   phonenumber:'',
  //   email: '',
  //   password: '',
  //   cpassword: '',
   
    
  // });

  //const [Inputs, setInputs] = useState({})

  
  // const handleChange = (e) => {  
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };


  // const handleClick = () => {
  //   // Redirect to the login page when the register button is clicked
  //   history.push('/login');
  // };

  const handleSubmit1 = (event) => {

    // event.preventDefault();
    console.log(data)
          axios.post('http://localhost:8081/usereg',data)
          .then(res => console.log("Registered Successfully.........."))
          .catch(err => console.log(err));

 





//       axios.post('https://localhost:8081/usereg',data)
//       .then(res=>console.log(res))
//       .catch(err=>console.log(err))



    // axios.post('http://localhost:8081/api/user/save', Inputs); 
    // console.log(Inputs);
    //console.log(formData);
    // Add your registration logic here
  };






  let onSubmit = (data)=>{
    console.log(data)
      if(data){
       console.log(data.uname)
       console.log(data.uaddress)
       console.log(data.number)
       console.log(data.email)
       console.log(data.password)
       console.log(data.cpassword)

       console.log(data)
          axios.post('http://localhost:8081/usereg',data)
          .then(res => console.log("Registered Successfully.........."))
          .catch(err => console.log(err));

        
      }
  }



  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2> <center>Registration </center></h2> 
        <div className="form-group">
          {/*<input
            type="text"
            name="uname"
            placeholder="Name"
            // value={uname}
            // onChange={handleChange1}

            onChange={(e) => setUsername(e.target.value)}
            required
  />*/}
  <input type="text" placeholder='Enter the username'onChange={(e) => setUsername(e.target.value)} {...register('uname',{required : true,pattern:/^[a-z A-Z]+$/,minLength:2,maxLength:30})}/>
  <span style={{color:"red",display:"block"}}>
    {errors.uname?.type=== "required" && "Name is required"}
    {errors.uname?.type === "pattern" && "Please Enter the valid name"}
    {errors.uname?.type ==="minLength"&& "Name must contain 2 character"}
    {errors.uname?.type ==="maxLength"&& "Name must be less than 30 length"}

  </span>
        </div>
        
        <div className="form-group">
          {/* <input
            type="text"
            name="uaddress"
            placeholder="Address"
            // value={address}
            // onChange={handleChange2}

            onChange={(e) => setAddress(e.target.value)}
            required
          /> */}
           <input type="text" placeholder='Enter the Address'onChange={(e) => setAddress(e.target.value)} {...register('uaddress',{required : true,pattern:/^[a-z A-Z]+$/,minLength:2,maxLength:30})} autoComplete='off'/>
  <span style={{color:"red",display:"block"}}>
    {errors.uaddress?.type=== "required" && "Address is required"}
    {errors.uaddress?.type === "pattern" && "Please Enter the valid name"}
    {errors.uaddress?.type ==="minLength"&& "Name must contain 2 character"}
    {errors.uaddress?.type ==="maxLength"&& "Name must be less than 30 length"}

  </span>
        </div>
        
        <div className="form-group">
          {/* <input
            type="text"
            name="number"
            placeholder="Phonenumber"
            // value={phonenumber}
            // onChange={handleChange3}

            onChange={(e) => setphonenumber(e.target.value)}
            required
          /> */}
           <input type="text" placeholder='Enter the PhoneNumber' onChange={(e) => setphonenumber(e.target.value)}{...register('number',{required : true,pattern:/^[0-9+-]{10}$/i})} autoComplete='off'/>
           
                    <span style={{color:"red",display:"block"}}>
                      {errors.number?.type === "required" && "Phone number required"}
                      {errors.number?.type === "pattern" && "Please enter 10 digit mobile number"}
                    </span>
  

        </div>
        
        <div className="form-group">
          {/* <input
            type="email"
            name="email"
            placeholder="Email"
            // value={email}
            // onChange={handleChange4}

            onChange={(e) => setemail(e.target.value)}
            required
          /> */}
          <input type="email" placeholder=' Email address'onChange={(e) => setemail(e.target.value)} {...register('email',{required:true,pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})} autoComplete='off'/>
                    <span style={{color:"red",display:"block"}}>
                      {errors.email?.type === "required" && "Email address required"}
                      {errors.email?.type === "pattern" && "Please enter a valid Email"}
                    </span>
        </div>

        <div className="form-group">
          {/* <input
            type="password"
            name="password"
            placeholder="Password"
            // value={password}
            // onChange={handleChange5}

            onChange={(e) => setpassword(e.target.value)}
          /> */}
           <input type="password" placeholder=' Password' onChange={(e) => setpassword(e.target.value)} {...register('password',{required:true,minLength:4})}/>
                    <span style={{color:"red",display:"block"}}>
                      {errors.password?.type === "required" && "Password required"}
                      {errors.password?.type === "minLength" && "Password must contain 4 character or number"}
                    </span>
        </div>

        <div className="form-group">
          {/* <input
            type="password"
            name="cpassword"
            placeholder="Password"
            // value={cpassword}
            // onChange={handleChange6}

            onChange={(e) => setcpassword(e.target.value)}
            
          /> */}
          <input type="password" placeholder='Confirm Password'onChange={(e) => setcpassword(e.target.value)} 
        //   {...register('cpassword',{required:true,validate:(data)=>{
        //               return data===password||"Password do not match"
        //             }})}
                    />
                    <span style={{color:"red",display:"block"}}>
                      {/* {errors.cpassword?.type === "required" && "Password should match"}
                      {errors.cpassword?.message} */}
                    </span>

        </div>
<div className='submit-container'>

  <button type='submit' className='submit'>signup</button>

{/* <button onClick={handleClick}>Go to Login Page</button> */}

  {/* <a href='./login' className='submit'>SIGN UP</a> */}
        {/* <div className={action==="Signup"?"submit gray":"submit"} onClick={()=>{setaction("sign up")}}>Sign up</div>
        <h3><div className="submit gray" onClick={()=>{setClick(1)}}>
          <a>Login</a> </div> </h3>
        <//div> */}

        {/* <main>
        {
             click==1?<LoginForm/>:null
             
        }
</main> */}
</div>
      </form>
    </div>
    
  );
};

export default RegistrationForm;