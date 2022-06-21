import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem,removeItem } from '../../Redux/actions/actions'



const ProjectsDetails = () => {
  const proId = useParams()
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${proId.id}`).then((res) => {
      setData(res.data)

    }).catch((err) => {
      console.log(err)

    })
  },[])

  const [cartBtn, setcartBtn] = useState('Add To The Cart')

  const dispatch = useDispatch()

  const handleCart =(data)=>{
    if (cartBtn === 'Add To The Cart') {
      dispatch(addItem(data))
      setcartBtn('Remove From The Cart')
    }
    else{
      dispatch(removeItem(data))
      setcartBtn('Add To The Cart')

    }
  }



  return (
    <>
     <div className="card text-center mb-5 mt-5 p-4 col-4 " style={{width: "22rem",height:'450px'}} key={data.id}>
                  <img src={data.image} className="card-img-top" alt="..." height={'200px'} />
                  <div className="card-body">
                    <p className="card-title">{data.title}</p>
                    {/* <p className="card-text">{d.title} $</p> */}
                    <h4 className="card-text">{data.price} $</h4>
                    <button onClick={()=>handleCart(data)} className='btn btn-outline-primary'>{cartBtn}</button>
                  </div>
                </div>

      

    </>
  )
}

export default ProjectsDetails