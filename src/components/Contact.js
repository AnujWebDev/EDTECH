import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {AiOutlineTwitter} from "react-icons/ai";
import {BiLogoFacebookCircle} from "react-icons/bi";
import {AiOutlineLinkedin} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";
import "./Contact.css"

const Contact = () => {
  return (
    <div>
    <Container data-aos="flip-right" data-aos-duration="3000">
    <Row className="justify-content-center">
      <Col md={8}>
        <h1 style={{ color:"#fff",fontFamily: "'DM Serif Display', serif" }} className="text-center mt-4">Contact Us</h1>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label style={{color:'#fff'}}>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label style={{color:'#fff'}}>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label style={{color:'#fff'}}>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
          </Form.Group>

          <Button className='my-5' style={{width:'100%'}} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
  <footer className='container-fluid'>
    <div className='container'>
      <div className='row'>
          <div className='col-md-4'>
            <img src='./images/logo2.jpeg' alt='logo' height={'100px'} width={'100px'}></img>
            <p style={{color:"#fff", fontFamily: "'DM Serif Display', serif" }}>EDTECH CONSULTANCY is on a mission to make it dead<br/>simple for leading Indian startups to hire the<br/>top 2% of tech talent.</p>
            <span className='icons1'><AiOutlineTwitter/></span>
            <span className='icons1'><BiLogoFacebookCircle/></span>
            <span className='icons1'><AiOutlineLinkedin/></span>
            <span className='icons1'><AiOutlineInstagram/></span>
          </div>
          <div className='col-md-2'>
            <h4 className='sh1' >CANDIDATES</h4>
            <p className='sp1'>For Candidates</p>
            <p className='sp1'>Candidate Sign Up</p>
            <p className='sp1'>Invite & Earn ₹15k</p>
            <p className='sp1'>Candidate FAQ</p>
          </div>
          <div className='col-md-2'>
          <h4 className='sh1' >EMPLOYERS</h4>
            <p className='sp1'>For Employers</p>
            <p className='sp1'>Employer Sign Up</p>
            <p className='sp1'>Employer FAQ</p>
          </div>
          <div className='col-md-2'>
            <h4 className='sh1' >COMPANY</h4>
            <p className='sp1'>Careers</p>
            <p className='sp1'>Privacy Policy</p>
          </div>
          <div className='col-md-2'>
          <h4 className='sh1' >PARTNERS</h4>
          <img src='./images/logo3.png' alt='logo' height={'45px'} width={'116px'}></img>
          </div>
      </div>
    </div>
    <h4 className='sh1 text-center' >© 2023 ANUJWEBDEV EDTECH CONSULTANCY. All Rights Reserved</h4>
  </footer>
</div>
  )
}

export default Contact
