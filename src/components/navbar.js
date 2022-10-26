import logo from '../static/img/logo.svg'
import da_logo from '../static/img/deanza_logo.svg'


import React from "react";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import { StyleSheet, css } from "aphrodite";

const NavbarMain = () => {
  return (
      <Navbar
        sticky="top"
        className="navbar-main py-2 justify-content-center"
        bg="light"
        variant="light"
        expand="lg"
      >
        <div className={`${css(navStyles.navElements)} w-100`}>
          <Row className="justify-content-between">
            <Col
              md={12}
              lg={3}
              className="d-flex flex-row justify-content-between"
            >
               <Navbar.Brand 
               className="d-flex p-0 mx-0 align-items-center"
               href="/"
               > 
                <a>
                  <img src={logo} width={50} style={{marginLeft: 20}} />
                  <img src={da_logo} width={100} style={{marginLeft: 20}}/>
                </a>
              </Navbar.Brand>
            </Col>  
          </Row>
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