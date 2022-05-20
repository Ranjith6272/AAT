import React from 'react'
import {Form} from 'react-bootstrap'
import { Link} from 'react-router-dom';
const Signin = () => {
  return (
    <div className='row justify-content-center mx-5'>
       <div className='col-md-6 col-md-offset-3 justify-content-center'>
      <Form>
        <Form.Label className='h1'> SIGN IN </Form.Label>
        <Form.Group className="mb-3 mt-4" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" className='w-75' placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3 mt-4" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" className='w-75'  placeholder="Password" />
        </Form.Group>
        <Link className='btn btn-dark my-3 mt-4' to='/'>
           Signin
        </Link>
        <Form.Group className="mb-3">
            <Form.Label className="d-flex">
                New Customer? 
                <p>
                <Link className='text-grey' to='/register'>
                Register
                </Link>
                </p>
            </Form.Label>
        </Form.Group>
        </Form>
       </div>
    </div>
  )
}

export default Signin