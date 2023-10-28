
import './App.css';
import Cart from './Components/Cart';
import Login from './Components/Login'
import Home from './Components/Home';
import Navigation from './Header/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [cart,setCart]=useState([]);

  const addToCart = (product) =>{
    setCart([...cart,{...product,count:1}]);
  }

  const removeFromCart = (product) =>{
    const updateCart=cart.filter((item)=>item.id!==product.id)
      setCart(updateCart)
    
  }
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path='/cart' element={<Cart cart={cart} removeFromCart={removeFromCart}/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Home addToCart={addToCart}/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}
export default App;

{/* <Navigation/>
    <div>
     <Home/>
     <Login/>
     <Cart/>
      
    </div> */}