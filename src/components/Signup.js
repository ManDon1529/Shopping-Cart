import React ,{useState}from 'react'
import { auth,db } from '../config/config';
import {Link, useNavigate} from 'react-router-dom'



export const Signup = (props) => {

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState("");
let nav=useNavigate()


const Signup=(e)=>{
    e.preventDefault();
    // console.log('form submited')
    // console.log(name,email,password)

auth.createUserWithEmailAndPassword(email,password).then((cred)=>{
    db.collection('SigndUpUserdata').doc(cred.user.uid).set({
        Name:name,
        Email:email,
        Password:password
    
    }).then(()=>{
        setName('');
        setEmail('');
        setPassword('');
        setError("");
        nav('/login');
    }).catch(err=>setError(err.message))
}).catch(err=>setError(err.message))

}




  return (
    <div className='container'>
    <br />
    <h2>Sign Up</h2>
    <form autoComplete='off' className='form-group' onSubmit={Signup}>
    <label htmlFor="Name">Name</label>
    <br />
    <input type="text" className='form-control' required 
        onChange={(e)=>setName(e.target.value)} value={name}
    />
    <br />
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
    <button type='submit' className='btn btn-success btn-md mybtn'>REGISTER</button>
    
    </form>
    {error&&<div className='error-msg'>{error}</div> }
<br />
<span>Already have an account? Login
<Link to='login'>Here</Link>
</span>

    </div>
  )
}
