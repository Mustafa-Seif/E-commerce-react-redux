import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'





const Products = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setData(res.data)

    }).catch((err) => {
      console.log(err)

    })
  },[])
  
  return (
    <div>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1>Products</h1>
            <hr />
          </div>
        </div>
        <div className='container'>
          <div className='row justify-content-around'>
            {data.map((d) => {
              return (
                <div className="card text-center mb-5 mt-5 p-4 col-4 " style={{width: "22rem",height:'450px'}} key={d.id}>
                  <img src={d.image} className="card-img-top" alt="..." height={'200px'} />
                  <div className="card-body">
                    <p className="card-title">{d.title}</p>
                    {/* <p className="card-text">{d.title} $</p> */}
                    <h4 className="card-text">{d.price} $</h4>
                    <NavLink to={`/products/${d.id}`} className="btn btn-outline-primary mb-0">More Details</NavLink>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Products