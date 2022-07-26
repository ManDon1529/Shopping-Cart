import React ,{useState}from 'react'
import { auth,db } from '../config/config';
import {Link, useNavigate} from 'react-router-dom'


export const Login = () => {

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState("");
let nav=useNavigate()

    const login=(e)=>{
        e.preventDefault();
        // console.log('form submited')
        // console.log(name,email,password)
    
    auth.signInWithEmailAndPassword(email,password).then(()=>{
           
            setEmail('');
            setPassword('');
            setError("");
            nav('/');
        }).catch(err=>setError(err.message))
       }





  return (
    <div className=''>
    <br />
    <h2>Login </h2>
    <form autoComplete='off' className='form-group' onSubmit={login}>
    
    <label htmlFor="Email">Email</label>
    <br />
    <input type="email" className='form-control' required 
    onChange={(e)=>setEmail(e.target.value)} value={email}
    />
    <br />
    <label htmlFor="password">Password</label>
    <br />
    <input type="password" className='form-control' required 
    onChange={(e)=>setPassword(e.target.value)} value={password}
    />
    <br />
    <button type='submit' className='btn btn-success btn-md mybtn'>LOGIN</button>
    
    </form>
    {error&&<div className='error-msg'>{error}</div> }
<br />
<span>Don't have an account? Register
<Link to='signup'>Here</Link>
</span>

    
    </div>
  )
}
