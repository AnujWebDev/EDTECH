import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./DefaultNavbar.css";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

const DefaultNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Navbar expand="lg" bg='transparent' style={{color:'white'}}>
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Navbar.Brand
        style={{ textDecoration: 'underline', fontSize: '40px',fontWeight:'bold', fontFamily: "'DM Serif Display', serif" }}
        href="#home"
      >
        <img src='./images/l.png' className='mt-5' style={{mixBlendMode:'multiply'}} alt='logo' height={'100px'} width={'300px'}></img>
      </Navbar.Brand>
      <Nav className="mx-auto mt-5" style={{ fontFamily: "'DM Serif Display', serif" }}>
        <Link  className="_links" to="/" style={{ marginRight: '30px', textDecoration: 'none' }}>
          Home
        </Link>
        <Link className="_links" to="/about" style={{ marginRight: '30px', textDecoration: 'none' }}>
          About
        </Link>
        <Link className="_links" to="/services" style={{ marginRight: '30px', textDecoration: 'none' }}>
          Services
        </Link>
        <Link className="_links" to="/contact" style={{ marginRight: '30px', textDecoration: 'none' }}>
          Contact
        </Link>
      </Nav>
      <Nav className="ms-auto my-5" style={{ fontFamily: "'DM Serif Display', serif" }}>
        <Button variant="primary" onClick={handleShow}>
          Login
        </Button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DefaultNavbar;
