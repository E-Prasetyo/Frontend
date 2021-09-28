import React from 'react'
import NavbarBootstrap from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const Navbar = () => {
   return (
      <NavbarBootstrap
         collapseOnSelect
         expand="sm"
         bg="dark"
         variant="dark"
         fixed="top"
         style={{ boxShadow: "0px 8px 10px -6px rgba(0,0,0,.5)" }}>
         <Container className="text-center">
            <NavbarBootstrap.Brand>
               <Link to="/" className="text-decoration-none text-light fw-bold">
                  MA - Discussion Forum
               </Link>
            </NavbarBootstrap.Brand>
            <NavbarBootstrap.Toggle aria-controls="responsive-navbar-nav" />
            <NavbarBootstrap.Collapse id="responsive-navbar-nav" className="justify-content-end">

               <Nav>
                  <Link
                     to="/"
                     className="text-decoration-none mx-2 py-2 text-secondary">
                     Discussions
                  </Link>
                  <Link
                     to="/login"
                     className="text-decoration-none mx-2 py-2 text-secondary">
                     Login
                  </Link>
                  <Link
                     to="/signup"
                     className="text-decoration-none mx-2 py-2 text-secondary">
                     Signup
                  </Link>
               </Nav>

            </NavbarBootstrap.Collapse>
         </Container>
      </NavbarBootstrap>
   )
}

export default Navbar
