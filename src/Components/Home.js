import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Home.css'

function Home({addToCart}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => setData(res.data))
      .catch((error) => console.log("error from data", error))
  }, [])
  return (
    <>
      <div className='card-container'>
        { data.length<=0? <center>Loading........</center>:
          data.map((product) => {
            return (
              <div className='card'>
                <div className='card-img'>
                  <img src={product.image} alt={product.id} />
                </div>
                <div className='card-info'>
                  <div><h3>{product.title.slice(0, 10)}</h3></div>
                  <div><span>${product.price}</span></div>
                </div>
                
                <div className='btn'>
                  <button onClick={()=>addToCart(product)}>Add to Cart</button>
                </div>
              </div>
            )
          })
        }

      </div>
    </>
  )
}

export default Home