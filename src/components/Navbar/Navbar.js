import React from 'react'
import NavbarBootstrap from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Button from 'react-bootstrap/Button'

const Navbar = () => {
   return (
      <NavbarBootstrap
         collapseOnSelect
         expand="lg"
         bg="dark"
         variant="dark">
         <Container>
            <NavbarBootstrap.Brand >
               <Link to="/" className="text-decoration-none text-light fw-bold">
                  MA - Discussion Forum
               </Link>
            </NavbarBootstrap.Brand>
            <NavbarBootstrap.Toggle aria-controls="responsive-navbar-nav" />
            <NavbarBootstrap.Collapse id="responsive-navbar-nav">
               <Nav className="me-auto">
                  <Link
                     to="/"
                     className="text-decoration-none mx-2 py-2">
                     <span className="text-link">Discussions</span>
                  </Link>
               </Nav>
               <Nav className="py-2">
                  <Link to="/login">
                     <div className="d-grid gap-2">
                        <Button variant="primary" size="sm"
                        > Login </Button>
                     </div>
                  </Link>

               </Nav>
            </NavbarBootstrap.Collapse>
         </Container>
      </NavbarBootstrap >
   )
}

export default Navbar
