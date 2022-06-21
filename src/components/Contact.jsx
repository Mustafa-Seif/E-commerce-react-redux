import React from 'react'
import aboutIMG      from '../assets/contact-us-customer-service-illustration_2175-310.webp'


const Contact = () => {
  return (
    <div className='container mt-5'>
    <div className='row text-center mb-5'>
      <h1>Contact With Us</h1>
      <hr/>
    </div>
    <div className='row'>
      <form style={{width:'50%'}} className='col-6'>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <div className='col-6'>
        <img src={aboutIMG} alt="" width='100%' />
      </div>
      </div>
    </div>
  )
}

export default Contact