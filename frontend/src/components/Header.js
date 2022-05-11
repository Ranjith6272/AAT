import React from 'react'
import {LinkContainer} from "react-router-bootstrap"
import { Navbar,Nav,Container } from 'react-bootstrap'
const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg"  collapseOnSelect>
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand>Anoor Amman</Navbar.Brand>  
        </LinkContainer>            
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='navbar-nav ml-auto'>
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