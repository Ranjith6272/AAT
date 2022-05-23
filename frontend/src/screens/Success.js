import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';


const Success = () => {
  return (
    <div>
        <Container className='mt-5'>
            <>
                <div className='text-center d-block mt-5'>
                 <h2 className='text-center mt-5'> Order Confirmed</h2>
                  <img src='/images/success.svg' alt='Order Confirmed' className='mt-5 mb-3' width="30%"/>
                </div>
                <div className='d-block text-center mt-5'>
                <Link to ='/'>
                      <Button className="btn btn-dark">
                          Go back To Home Page
                      </Button>
                  </Link>
                </div>
            </>
        </Container>
    </div>
  )
}

export default Success