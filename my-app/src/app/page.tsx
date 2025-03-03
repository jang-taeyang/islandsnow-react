// MAKES SURE it runs only in the browser
'use client'; 

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Navbar, Nav, NavDropdown, Row, Col, Image, Form, Button } from 'react-bootstrap';
import { Facebook, Twitter, Pinterest, Instagram, HouseFill, Search, PersonFill, Cart } from 'react-bootstrap-icons';

const TopMenu = () => {
  // CART COUNT
  const [cartCount] = useState(0);

  return (
    <Navbar bg="light" expand="lg" className="py-2">
      <Container>
        {/* Left-aligned Social Icons */}
        <Nav className="me-auto">
          <Nav.Link href="#"><Facebook /></Nav.Link>
          <Nav.Link href="#"><Twitter /></Nav.Link>
          <Nav.Link href="#"><Pinterest /></Nav.Link>
          <Nav.Link href="#"><Instagram /></Nav.Link>
        </Nav>

        {/* Right-aligned Icons */}
        <Nav>
          <Nav.Link href="#"><HouseFill /></Nav.Link>
          <Nav.Link href="#"><Search /></Nav.Link>
          <Nav.Link href="#"><PersonFill /></Nav.Link>
          <NavDropdown title={<><Cart /> <span className="ms-1">{cartCount}</span></>} id="cart-dropdown">
            <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

// Logo Section (Centered)
const IslandSnowLogo = () => (
  <Row className="justify-content-center">
    <Col xs="auto">
      <Image className="img-fluid py-3" src="experience-islandsnow-bootstrap-logo.png" alt="Island Snow Logo" />
    </Col>
  </Row>
);

// Middle Navigation Menu
const MiddleMenu = () => (
  <Navbar className="justify-content-center">
    <Nav className="d-flex flex-row">
      <NavDropdown title={<strong>MEN</strong>} id="men-dropdown" className="px-3">{null}</NavDropdown>
      <NavDropdown title={<strong>WOMEN</strong>} id="women-dropdown" className="px-3">{null}</NavDropdown>
      <NavDropdown title={<strong>KIDS</strong>} id="kids-dropdown" className="px-3">{null}</NavDropdown>
      <NavDropdown title={<strong>BRANDS</strong>} id="brands-dropdown" className="px-3">{null}</NavDropdown>
      <Nav.Link className="px-3"><strong>SEARCH</strong></Nav.Link>
    </Nav>
  </Navbar>
);

// Full-width Image
const FullWidthImage = () => (
  <Row className="justify-content-center">
    <Image className="img-fluid pt-3" src="experience-islandsnow-bootstrap-main.png" alt="Main Image" />
  </Row>
);

// Footer Section
const FooterMenu = () => (
  <footer className="bg-dark text-light py-4">
    <Container>
      <Row>
        <Col>
          NAVIGATION
          <hr className="bg-light" />
          <div>About Us</div>
          <div>Employment</div>
          <div>Videos</div>
        </Col>
        <Col>
          MAIN MENU
          <hr className="bg-light" />
          <div>Men</div>
          <div>Women</div>
          <div>Kids</div>
        </Col>
        <Col>
          CONNECT
          <hr className="bg-light" />
          <div>Sign Up For The Latest Updates</div>
          <Form className="d-flex">
            <Form.Control type="text" placeholder="Enter Email Address" className="me-2" />
            <Button variant="dark">Join</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </footer>
);

// Main Page Component
const IslandSnow = () => (
  <Container fluid>
    <TopMenu />
    <IslandSnowLogo />
    <MiddleMenu />
    <FullWidthImage />
    <FooterMenu />
  </Container>
);

export default IslandSnow;