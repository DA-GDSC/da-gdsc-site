import da_gdsc from '../static/img/da_gdsc.svg'


import React from "react";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import { StyleSheet, css } from "aphrodite";

const NavbarMain = () => {
  return (
      <Navbar
        sticky="top"
        className="navbar-main py-2 "
        bg="light"
        variant="light"
        expand="lg"
      >
         <div className="py-2 md:px-10 w-screen flex justify-center items-center">
               <Navbar.Brand 
               className="p-0 align-items-center"
               href="/"
               > 
                <a>
                  <img src={da_gdsc} width={350} />
        
                </a>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="flex justify-end text-xl">
                <Nav>
                  <Nav.Link className="" href="/">About</Nav.Link>
                  <Nav.Link href="/team">Team</Nav.Link>
                  <Nav.Link href="/project">Project</Nav.Link>
                </Nav>
              </Navbar.Collapse>
           </div>
      </Navbar>
  );
}

const navStyles = StyleSheet.create({
  navElements: {
    maxWidth: '1199.98px'
  }
})

export default NavbarMain;