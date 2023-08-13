import React from 'react';
import Button from 'react-bootstrap/Button';
import {AiOutlineTwitter} from "react-icons/ai";
import {BiLogoFacebookCircle} from "react-icons/bi";
import {AiOutlineLinkedin} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";
import "./services.css"

const Services = () => {
  return (
    <div>
      <div className='container d-flex justify-content-center align-items-center'>
        <div className='row'>
          <h1 className='text-center my-5' style={{ fontFamily: "'DM Serif Display', serif" }}>Technologies We Serve</h1>
          <div  className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
            <img data-aos="flip-left" src='./images/web.jpg' className='img-fluid' alt="web logo" />
          </div>
          <div data-aos="flip-right" className='col-md-6 d-flex flex-column justify-content-center'>
            <h1 className='text-center' style={{ fontFamily: "'DM Serif Display', serif" }}>Web Development</h1>
            <p className='text-center' style={{ fontFamily: "'DM Serif Display', serif", fontSize: '18px', lineHeight: '1.6' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>Amet mattis vulputate enim nulla aliquet. Magna fringilla urna<br/> porttitor rhoncus.Pharetra et ultrices neque ornare aenean euismod.<br/> Nullam ac tortor vitae purus faucibus ornare. Massa eget egestas purus viverra<br/> accumsan in nisl nisi. Blandit aliquam etiam erat velit scelerisque in.<br/>
            </p>
            <Button className='m-5' variant="primary">Learn more</Button>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div data-aos="flip-left" className='col-md-6 d-flex flex-column justify-content-center align-items-center mb-4'>
            <h1 className='text-center my-5' style={{ fontFamily: "'DM Serif Display', serif" }}>App Development</h1>
            <p className='text-center' style={{  color:'#fff',fontFamily: "'DM Serif Display', serif", fontSize: '18px', lineHeight: '1.6' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>Amet mattis vulputate enim nulla aliquet. Magna fringilla urna<br/> porttitor rhoncus.Pharetra et ultrices neque ornare aenean euismod.<br/> Nullam ac tortor vitae purus faucibus ornare. Massa eget egestas purus viverra<br/> accumsan in nisl nisi. Blandit aliquam etiam erat velit scelerisque in.<br/>
            </p>
            <Button className='m-5 w-100' variant="primary">Learn more</Button>
          </div>
          <div data-aos="flip-left" className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
            <img src='./images/app.png'  className='img-fluid my-5' alt="app logo" />
          </div>
        </div>
      </div>
      <div className='container d-flex justify-content-center align-items-center'>
        <div className='row'>
          <div className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
            <img data-aos="flip-right"  src='./images/ui.avif' className='img-fluid' alt="ui/ux logo" />
          </div>
          <div data-aos="flip-right" className='col-md-6 d-flex flex-column justify-content-center'>
            <h1 className='text-center' style={{color:'#fff', fontFamily: "'DM Serif Display', serif" }}>UI/UX Development</h1>
            <p className='text-center' style={{color:'#fff', fontFamily: "'DM Serif Display', serif", fontSize: '18px', lineHeight: '1.6' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>Amet mattis vulputate enim nulla aliquet. Magna fringilla urna<br/> porttitor rhoncus.Pharetra et ultrices neque ornare aenean euismod.<br/> Nullam ac tortor vitae purus faucibus ornare. Massa eget egestas purus viverra<br/> accumsan in nisl nisi. Blandit aliquam etiam erat velit scelerisque in.<br/>
            </p>
            <Button className='my-5 w-100' variant="primary">Learn more</Button>
          </div>
        </div>
      </div>
      <div className='container vh-100 d-flex justify-content-center align-items-center'>
        <div className='row'>
          <div data-aos="flip-left" className='col-md-6 d-flex flex-column justify-content-center align-items-center mb-4'>
            <h1 className='text-center my-5' style={{color:'#fff', fontFamily: "'DM Serif Display', serif" }}>Software Development</h1>
            <p className='text-center' style={{ color:'#fff',fontFamily: "'DM Serif Display', serif", fontSize: '18px', lineHeight: '1.6' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>Amet mattis vulputate enim nulla aliquet. Magna fringilla urna<br/> porttitor rhoncus.Pharetra et ultrices neque ornare aenean euismod.<br/> Nullam ac tortor vitae purus faucibus ornare. Massa eget egestas purus viverra<br/> accumsan in nisl nisi. Blandit aliquam etiam erat velit scelerisque in.<br/>
            </p>
            <Button className='my-5 w-100' variant="primary">Learn more</Button>
          </div>
          <div data-aos="flip-left" className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
            <img src='./images/s.jpg' className='img-fluid' alt="app logo" />
          </div>
        </div>
      </div>
      <div className='container d-flex justify-content-center align-items-center'>
        <div className='row'>
          <div data-aos="flip-right" className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
            <img src='./images/1.jpg' className='img-fluid m-5' alt=" logo" />
          </div>
          <div data-aos="flip-right" className='col-md-6 d-flex flex-column justify-content-center'>
            <h1 className='text-center' style={{color:'#fff', fontFamily: "'DM Serif Display', serif" }}>Data Scientist</h1>
            <p className='text-center' style={{color:'#fff', fontFamily: "'DM Serif Display', serif", fontSize: '18px', lineHeight: '1.6' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>Amet mattis vulputate enim nulla aliquet. Magna fringilla urna<br/> porttitor rhoncus.Pharetra et ultrices neque ornare aenean euismod.<br/> Nullam ac tortor vitae purus faucibus ornare. Massa eget egestas purus viverra<br/> accumsan in nisl nisi. Blandit aliquam etiam erat velit scelerisque in.<br/>
            </p>
            <Button className='my-5 w-100' variant="primary">Learn more</Button>
          </div>
        </div>
      </div>
      <div className='container vh-100 d-flex justify-content-center align-items-center'>
        <div className='row'>
          <div data-aos="flip-left" className='col-md-6 d-flex flex-column justify-content-center align-items-center mb-4'>
            <h1 className='text-center my-5' style={{color:'#fff', fontFamily: "'DM Serif Display', serif" }}>AI Engineer</h1>
            <p className='text-center' style={{color:'#fff', fontFamily: "'DM Serif Display', serif", fontSize: '18px', lineHeight: '1.6' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>Amet mattis vulputate enim nulla aliquet. Magna fringilla urna<br/> porttitor rhoncus.Pharetra et ultrices neque ornare aenean euismod.<br/> Nullam ac tortor vitae purus faucibus ornare. Massa eget egestas purus viverra<br/> accumsan in nisl nisi. Blandit aliquam etiam erat velit scelerisque in.<br/>
            </p>
            <Button className='my-5 w-100' variant="primary">Learn more</Button>
          </div>
          <div data-aos="flip-right" className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
            <img src='./images/ai.jpg' className='img-fluid' alt="app logo" />
          </div>
        </div>
      </div>
      <footer className='container-fluid'>
        <div className='container'>
          <div className='row'>
              <div className='col-md-4'>
                <img src='./images/logo2.jpeg' alt='logo' height={'100px'} width={'100px'}></img>
                <p style={{ fontFamily: "'DM Serif Display', serif" }}>EDTECH CONSULTANCY is on a mission to make it dead<br/>simple for leading Indian startups to hire the<br/>top 2% of tech talent.</p>
                <span className='icons'><AiOutlineTwitter/></span>
                <span className='icons'><BiLogoFacebookCircle/></span>
                <span className='icons'><AiOutlineLinkedin/></span>
                <span className='icons'><AiOutlineInstagram/></span>
              </div>
              <div className='col-md-2'>
                <h4 className='sh' >CANDIDATES</h4>
                <p className='sp'>For Candidates</p>
                <p className='sp'>Candidate Sign Up</p>
                <p className='sp'>Invite & Earn ₹15k</p>
                <p className='sp'>Candidate FAQ</p>
              </div>
              <div className='col-md-2'>
              <h4 className='sh' >EMPLOYERS</h4>
                <p className='sp'>For Employers</p>
                <p className='sp'>Employer Sign Up</p>
                <p className='sp'>Employer FAQ</p>
              </div>
              <div className='col-md-2'>
                <h4 className='sh' >COMPANY</h4>
                <p className='sp'>Careers</p>
                <p className='sp'>Privacy Policy</p>
              </div>
              <div className='col-md-2'>
              <h4 className='sh' >PARTNERS</h4>
              <img src='./images/logo3.png' alt='logo' height={'45px'} width={'116px'}></img>
              </div>
          </div>
        </div>
        <h4 className='sh text-center' >© 2023 ANUJWEBDEV EDTECH CONSULTANCY. All Rights Reserved</h4>
      </footer>
    </div>
  );
};

export default Services;
