// import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
// import { Container } from 'reactstrap';
import logo from '../static/img/logo.svg'
import da_logo from '../static/img/deanza_logo.svg'


// export default function NavBar() {
//     return (
//       <Navbar sticky="top" collapseOnSelect expand="xxl" bg="light" variant="light" className="justify-content-center">
//         <Container>
//           <div className='navbar-brand'>
//         <Navbar.Brand href="#"> 
//           <a><img src={logo} width='60px'/>
//              <img src={da_logo} width='130px' style={{marginLeft: 20}}/>
//           </a>
//         </Navbar.Brand>
//         </div>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" className='navbar-toggle'/>
//         <Navbar.Collapse id="responsive-navbar-nav" className='responsive-navbar'>
//           <Nav className='ms-auto'>
//               <Nav.Link href="#about-section">About</Nav.Link>
//               <Nav.Link href="#">Events</Nav.Link>
//               <Nav.Link href="/materials">Materials</Nav.Link>
//               <Nav.Link href="#">Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     )
//   }


import React from "react";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import { StyleSheet, css } from "aphrodite";

const NavbarMain = () => {
  // const navlinks = getNavLinks();

  return (
    <React.Fragment>
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
              {/* <Navbar.Brand
                className="d-flex p-0 mx-0 align-items-center"
                href="/"
              >
                <img
                  src={logo}
                  alt="Logo"
                  width={40}
                  height={40}
                />
              </Navbar.Brand> */}
               <Navbar.Brand 
               className="d-flex p-0 mx-0 align-items-center"
               href="/"
               > 
                <a>
                  <img src={logo} width={50} style={{marginLeft: 20}} />
                  <img src={da_logo} width={100} style={{marginLeft: 20}}/>
                </a>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-collapse" />
            </Col>
            <Col
              md={12}
              lg={9}
            >
              <Navbar.Collapse id="navbar-collapse" className="justify-content-end">
                <Nav
                  className="align-items-center"
                  style={{ color: "black", fontWeight: "bold" }}
                >
                  {/* {navlinks.map((node) => (
                    <LinkRenderer
                      key={node.path}
                      node={node}
                    />
                  ))} */}
                  {/* <DiscordLink
                    className="mx-2"
                  /> */}
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </div>
      </Navbar>
    </React.Fragment>
  );
}

const navStyles = StyleSheet.create({
  navElements: {
    maxWidth: '1199.98px'
  }
})

export default NavbarMain;