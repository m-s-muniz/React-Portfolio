import React from 'react'
import NAV from './navigation/nav';
import Navbar from "react-bootstrap/Navbar";

export default function header (props) {
  return ( 
    <Navbar collapseOnSelect className="navbar" variant="dark" expand="sm"
    aria-current="true">
        <Navbar.Brand href="/React-Portfolio" className="name">
          Michael Muniz
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

    <Navbar.Collapse
      id="responsive-navbar-nav"
      className="justify-content-end">

      <NAV setCurrentPage={props.setCurrentPage}></NAV>
      </Navbar.Collapse>
    </Navbar>
    
  )
}


