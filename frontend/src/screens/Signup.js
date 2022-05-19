import React from 'react'
import {Form} from 'react-bootstrap'
import { Link} from 'react-router-dom';
const Signup = () => {
  return (
    <div className='row justify-content-center mx-5'>
       <div className='col-md-6 col-md-offset-3 justify-content-center'>
      <Form>
        <Form.Label className='h1'> SIGN UP </Form.Label>
        <Form.Group className="mb-3 mt-4" controlId="formGroupEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" className='w-75' placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3 mt-4" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" className='w-75' placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3 mt-4" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" className='w-75'  placeholder=" Enter Password" />
        </Form.Group>
        <Form.Group className="mb-3 mt-4" controlId="formGroupPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" className='w-75'  placeholder=" Confirm Password" />
        </Form.Group>
        <Link className='btn btn-dark my-3 mt-4' to='/'>
           REGISTER
        </Link>
        <Form.Group className="mb-3">
            <Form.Label className="d-flex">
                Have a Account? 
                <p>
                <Link className='text-grey' to='/login'>
                Login 
                </Link>
                </p>
            </Form.Label>
        </Form.Group>
        </Form>
       </div>
    </div>
  )
}

export default Signup