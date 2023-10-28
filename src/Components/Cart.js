import React, { useState } from 'react'
import './Cart.css'

function Cart({ cart, removeFromCart }) {


  const [qty, setQty] = useState(1)

  const incrementQty = (product) => {
    const incPrice = cart.map((cp) => {
      if (cp.title === product.title) {
        cp.count = cp.count + 1
      }
      return cp
    })
    setQty(incPrice)
  }

  const decrementQty = (product) => {
    const decPrice = cart.map((cp) => {
      if (cp.title === product.title) {
        cp.count = cp.count - 1
        if(cp.count<=0){
          cp.count=1
        }
      }
      return cp
    })
    setQty(decPrice)

  }

  const restBtn = (product) =>{
    setQty(product.count=1)
  }

  




  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>category</th>
            <th>Remove</th>
            <th>Total</th>
          </tr>
        </thead>
        {cart.length <= 0 ? <h3>Your Cart is Empty</h3> :
          cart.map((product) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td><img src={product.image} alt={product.id} width='50px' />
                      {product.title.slice(0, 10)}</td>

                    <td>{product.price}</td>

                    <td className='qty'>
                      <button onClick={() => decrementQty(product)} className='qty-btn'>-</button>

                      <div className='count'>{product.count}</div>

                      <button onClick={() => incrementQty(product)} className='qty-btn'>+</button>

                      <div className='reset-btn'><button onClick={() => restBtn(product)} >Reset</button></div>

                    </td>

                    <td>
                      {product.category}
                    </td>






                    <td> <div className='remove-btn'>
                      <button onClick={() => removeFromCart(product)}>Remove</button>
                    </div></td>

                    <td>{product.count * product.price}</td>
                  </tr>
                </tbody>
              </>

            )

          })

        }
      </table>
    
     
      

    </>
  )
}

export default Cart

