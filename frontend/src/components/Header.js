import React from 'react'
import {LinkContainer} from "react-router-bootstrap"
import { Navbar,Nav,Container,Form,FormControl,Button } from 'react-bootstrap'
import '../index.css'
const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg"  collapseOnSelect className='shadow-lg p-3 rounded' >
      <Container>
        <LinkContainer to="/">
         <Navbar.Brand><a href="/"> 
          <img
          src="/images/aatlogo.png"
          width="200"
          height="70"
          className="align-top img-responsive"
          alt="React Bootstrap logo"
        />
          </a></Navbar.Brand>  
        </LinkContainer>  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className='navbar-nav ml-auto'>
            <Form className="d-flex mr-4">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button  variant="outline-dark">Search</Button>
            </Form>
            <LinkContainer to="/cart">
            <Nav.Link>
            <i className="fi fi-rr-shopping-cart"></i>
            Cart
            </Nav.Link>
            </LinkContainer>
            <LinkContainer to ="/login">
            <Nav.Link>
            <i className="fi fi-rr-user "></i> 
            Sign in </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header