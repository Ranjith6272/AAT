import React from 'react'
import {Form} from 'react-bootstrap'
import { Link} from 'react-router-dom';
const Shipping = () => {
  return (
    <div className='row justify-content-center mx-5'>
       <div className='col-md-6 col-md-offset-3 justify-content-center'>
      <Form>
        <Form.Label className='h1'> SHIPPING DETAILS </Form.Label>
        <Form.Group className="mb-3 mt-4" controlId="formGroupEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="name" className='w-75' placeholder="Enter firstname" />
        </Form.Group>
        <Form.Group className="mb-3 mt-4" controlId="formGroupEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="name" className='w-75' placeholder="Enter lastname" />
        </Form.Group>
        <Form.Group className="mb-3 mt-4" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" className='w-75' placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3 mt-4" controlId="formGroupEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" className='w-75' placeholder="Enter phone number" />
        </Form.Group>
        <Form.Label className='h1'> ADDRESS </Form.Label>
        <Form.Group className="mb-3 mt-4" controlId="formGroupEmail">
            <Form.Label>Streat Address</Form.Label>
            <Form.Control type="text" className='w-75' placeholder="Enter address" />
        </Form.Group>
        <Form.Group className="mb-3 mt-4" controlId="formGroupEmail">
            <Form.Label>Town/City</Form.Label>
            <Form.Control type="text" className='w-75' placeholder="Enter city" />
        </Form.Group>
        <Form.Group className="mb-3 mt-4" controlId="formGroupEmail">
            <Form.Label>State/Country</Form.Label>
            <Form.Control type="text" className='w-75' placeholder="Enter state" />
        </Form.Group>
        <Form.Group className="mb-3 mt-4" controlId="formGroupPassword">
            <Form.Label>Postcode/Zip</Form.Label>
            <Form.Control type="number" className='w-75'  placeholder="Enter the postcode" />
        </Form.Group>
        <Form.Group className="mb-3 mt-4" controlId="formGroupEmail">
            <Form.Label>Add Notes(optional)</Form.Label>
            <Form.Control type="textarea" className='w-75' placeholder="Tell your suggestions to imporove our better" />
        </Form.Group>
        <Link className='btn btn-dark my-3 mt-4' to='/'>
           Place Order
        </Link>
        </Form>
       </div>
    </div>
  )
}

export default Shipping