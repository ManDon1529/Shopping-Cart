
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import { AddProducts } from './components/AddProducts';
import { ProductContextProvider } from './global/ProductContext';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Component } from 'react';
import { auth,db } from './config/config';
import { CartContextProvider } from './global/CartContext';
import { Cart } from './components/Cart';

export class App extends Component {
  state={
    user:null
  }
  componentDidMount(){

    auth.onAuthStateChanged(user=>{
      if(user){
        db.collection('SigndUpUserdata').doc(user.uid).get().then(snapshot=>{
          this.setState({
            user:snapshot.data().Name
          })
        })
      }
      else{
        this.setState({
          user:null
        })
   
      }
    })
  }


  render(){
  return (
    <div className="App">
    <ProductContextProvider>
    <CartContextProvider> <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home user={this.state.user}/>} />
        <Route  path='/addProducts' element={<AddProducts/>} />
        <Route  path='/signup' element={<Signup/>} />
        <Route  path='/login' element={<Login/>} />
        <Route  path='/cartproducts' element={<Cart user={this.state.user}/>} />

       
      </Routes>
      </BrowserRouter>
      </CartContextProvider>
   
      </ProductContextProvider>
      
    </div>
  );
}
}

export default App;
