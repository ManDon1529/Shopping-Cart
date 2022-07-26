import React,{useContext}from 'react'
import { CartContext } from '../global/CartContext'
import { ProductContext } from '../global/ProductContext'




export const Products = () => {
  
const {products}=useContext(ProductContext)
//const{dispatch}=useContext(CartContext)
//console.log(products);

// const data=useContext(CartContext)
// console.log(data)

const {dispatch}=useContext(CartContext)
  return (
    <>
    {products.length!==0 &&<h1>Products</h1>}
    <div className='products-container'>
    {products.length===0 && <div>No products to display</div>}
    {products.map(product=>(
      <div className='product-card' key={product.productID}>
      <div className='product-img'>
      <img src={product.productImg} style={{width:'200px',height:'200px'}}/>
      </div>
        <div className='product-name'>
        {product.productName}
        </div>
        <div className='product-price'>
       R {product.productPrice}.00
        </div>
        <button className='addcart-btn'onClick={()=>{dispatch({type:'ADD_TO_CART',id:product.productID,product})} }>ADD TO CART</button>

      </div>
    ))}
    </div>
    </>
  )
}
