import React from 'react'
import { NavLink } from 'react-router-dom'
import aboutIMG      from '../assets/5078a05eb1b6847d93383eaa4c0ed500.gif'

const About = () => {
  return (
   
      <div className='container mt-5'>
      <div className='row text-center mb-5'>
      <h1>About Us</h1>
      <hr/>
    </div>
        <div className='row'>
          <div className='col-6'>
            <h1>About Us</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptates minus optio ipsa expedita deleniti pariatur amet 
            voluptatibus quidem cumque veniam recusandae, dolores soluta!
             Quo incidunt laudantium perspiciatis error nesciunt distinctio
              nemo velit a, aut sapiente, neque rerum at libero expedita doloribus
               accusantium consectetur. Ullam sunt nulla accusamus aliquam, aut
                tempore facere dolore dicta ex labore impedit praesentium fuga, 
                cum distinctio dolor, neque adipisci. Corporis assumenda quaerat 
                nobis animi ipsum cupiditate quibusdam modi similique veniam nisi 
                impedit mollitia exercitationem explicabo itaque voluptas, quia iusto 
                reprehenderit vero culpa saepe. Error animi beatae ut facere optio, ea 
                commodi odit natus qui, ducimus asperiores.</p>
                <NavLink to='/contact' className='btn btn-outline-primary'>Contact Us</NavLink>
          </div>
          <div className='col-6'>
          <img src={aboutIMG} alt="..." width='100%'/>
        </div>
        </div>
        
      </div>
  )
}

export default About