import React ,{useContext}from 'react'
import '../css/Home.css'
import {Link} from 'react-router-dom'
import logo from '../images/logo.svg'
import Icon from 'react-icons-kit'
import{cart} from 'react-icons-kit/entypo/cart'
import{useNavigate} from 'react-router-dom'
import { auth } from '../config/config'
import { CartContext } from '../global/CartContext'
export const Navbar = ({user}) => {   

const {totalQty}=useContext(CartContext)

  const navigate=useNavigate()

  const logout=()=>{
    auth.signOut().then(()=>{
      navigate('/')
    })
  }
  return (
    <div className='navbox'>
        <div className="leftside">
<img src={logo} alt="" />

        </div>
        {!user &&<div className="rightside">
            <Link to="signup"className='navlinks'>SIGN UP</Link>
            <Link to="login" className='navlinks'>LOGIN</Link>
        </div>}
        {user && <div className='rightside'>
        <span><Link to='/' className='navlinks '>{user}</Link></span>
        <span><Link to='cartproducts' className='navlinks'><Icon icon={cart}/></Link></span>
      <div className='relative '>
      <span className='no-of-products'>{totalQty}</span>
      </div> 
      <span><button className='logout-btn' onClick={logout}>LOGOUT</button></span>
        </div>}

    </div>
  )
}
