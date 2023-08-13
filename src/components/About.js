import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {AiOutlineTwitter} from "react-icons/ai";
import {BiLogoFacebookCircle} from "react-icons/bi";
import {AiOutlineLinkedin} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";
import { useState,useEffect } from 'react';
import "./About.css";
const About = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          if (count < 650) {
            setCount(prevCount => prevCount + 1);
          } else {
            clearInterval(interval);
          }
        }, 10);
    
        return () => clearInterval(interval);
      }, [count]);
      useEffect(() => {
        const interval = setInterval(() => {
          if (count1 < 350) {
            setCount1(prevCount => prevCount + 1);
          } else {
            clearInterval(interval);
          }
        }, 10);
    
        return () => clearInterval(interval);
      }, [count1]);
      useEffect(() => {
        const interval = setInterval(() => {
          if (count2 < 250) {
            setCount2(prevCount => prevCount + 1);
          } else {
            clearInterval(interval);
          }
        }, 100);
    
        return () => clearInterval(interval);
      }, [count2]);
  return (
    <div>
     <div  className='container d-flex justify-content-center align-items-center'>
        <div className='row'>
          <div data-aos="zoom-in" className='col-md-6'>
            <h1 id="he1" className='mt-5 text-center my-5' style={{ color:'#fff',fontFamily: "'DM Serif Display', serif" }}>Our History</h1>
            <p id='pe1' className='text-center' style={{ color:'#fff', fontFamily: "'DM Serif Display', serif", fontSize: '18px', lineHeight: '1.6' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Amet mattis vulputate enim nulla aliquet. Magna fringilla urna porttitor rhoncus.Pharetra et ultrices neque ornare aenean euismod. Nullam ac tortor vitae purus faucibus ornare. Massa eget egestas purus viverra accumsan in nisl nisi. Blandit aliquam etiam erat velit scelerisque in. Elementum eu facilisis sed odio morbi. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Egestas purus viverra accumsan in. Id aliquet risus feugiat in ante metus. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Viverra nibh cras pulvinar mattis nunc sed blandit. Eget duis at tellus at urna. Gravida arcu ac tortor dignissim convallis aenean. Arcu cursus euismod quis viverra nibh cras pulvinar. Platea dictumst quisque sagittis purus sit. Rutrum quisque non tellus orci ac auctor augue. Amet mattis vulputate enim nulla aliquet. Magna fringilla urna porttitor rhoncus. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl.
            </p>
          </div>
          <div className='col-md-6 col-sm-12 d-flex flex-column justify-content-between align-items-center'>
              <div className="container" id="cont">
                    <div className="box">
                        <div style={{ fontFamily: "'DM Serif Display', serif" }} className="side front">Admissions Open</div>
                        <div style={{ fontFamily: "'DM Serif Display', serif" }} className="side back">Admissions Open</div>
                        <div style={{ fontFamily: "'DM Serif Display', serif" }} className="side left">Admissions Open</div>
                        <div style={{ fontFamily: "'DM Serif Display', serif" }} className="side right">Admissions Open</div>
                        <div style={{ fontFamily: "'DM Serif Display', serif" }} className="side top">Admissions Open</div>
                        <div style={{ fontFamily: "'DM Serif Display', serif" }} className="side bottom">Admissions Open</div>
                    </div>
                </div>
                <div className='container d-flex flex-column align-items-center'>
                  <div className='row'>
                      <div data-aos="zoom-in" data-aos-duration="1000" className='col-md-4 col-sm-12 d-flex flex-column align-items-center'>
                          <div className="counter my-3 d-flex flex-column align-items-center" style={{boxShadow: "0px 18px 5px 0px rgba(232,227,232,1)"}}>
                              <h1 className="heading" style={{color:"#fff"}}>Students</h1>
                              <span id="count" style={{color:"#fff"}} className="count-number">{count}+</span>
                          </div>
                      </div>
                      <div data-aos="zoom-in" data-aos-duration="1000" className='col-md-4 col-sm-12 d-flex flex-column align-items-center'>
                          <div className="counter my-3 d-flex flex-column align-items-center" style={{boxShadow: "0px 18px 5px 0px rgba(232,227,232,1)"}}>
                              <h1 className="heading" style={{color:"#fff"}}>Users</h1>
                              <span id="count" style={{color:"#fff"}} className="count-number">{count1}+</span>
                          </div>
                      </div>
                      <div data-aos="zoom-in" data-aos-duration="1000" className='col-md-4 col-sm-12 d-flex flex-column align-items-center'>
                          <div className="counter my-3 d-flex flex-column align-items-center" style={{boxShadow: "0px 18px 5px 0px rgba(232,227,232,1)"}}>
                              <h1 className="heading" style={{color:"#fff"}}>Placements</h1>
                              <span id="count" style={{color:"#fff"}} className="count-number">{count2}+</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row justify-content-center'>
          <h1 className='mt-5 text-center my-5' style={{ color:'#fff', fontFamily: "'DM Serif Display', serif" }}> Workspace</h1>
          <div className='col-md-6 my-5'>
            <div className='w-100' style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <Carousel data-bs-theme="dark" style={{ minHeight: '500px', width: '100%' }}>
                   <Carousel.Item>
                        <img
                        className="d-block w-100"
                        height={'500px'}
                        src="./images/o1.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./images/o1.webp"
                        height={'500px'}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./images/o2.webp"
                        alt="Third slide"
                        height={'500px'}
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./images/o3.jpg"
                        alt="Fourth slide"
                        height={'500px'}
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./images/o4.jpg"
                        alt="fifth slide"
                        height={'500px'}
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./images/o5.jpg"
                        alt="sixth slide"
                        height={'500px'}
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className='col-md-6 my-5 '>
            <div className='w-100' style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <Carousel data-bs-theme="dark" style={{ minHeight: '500px', width: '100%' }}>
                   <Carousel.Item>
                        <img
                        className="d-block w-100"
                        height={'500px'}
                        src="./images/ou.png"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./images/ou1.jpg"
                        height={'500px'}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./images/ou2.jpeg"
                        alt="Third slide"
                        height={'500px'}
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./images/ou3.jpg"
                        alt="Fourth slide"
                        height={'500px'}
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./images/ou4.jpeg"
                        alt="fifth slide"
                        height={'500px'}
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./images/ou5.webp"
                        alt="sixth slide"
                        height={'500px'}
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div className='container d-flex justify-content-center align-items-center'>
        <div className='row'>
          <div data-aos="zoom-in-up" className='col-md-12'>
            <h1 className='mt-5 text-center my-5' style={{ color:'#fff', fontFamily: "'DM Serif Display', serif" }}>Our Objective</h1>
            <p className='text-center' style={{ color:'#fff', fontFamily: "'DM Serif Display', serif", fontSize: '18px', lineHeight: '1.6' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Amet mattis vulputate enim nulla aliquet. Magna fringilla urna porttitor rhoncus.Pharetra et ultrices neque ornare aenean euismod. Nullam ac tortor vitae purus faucibus ornare. Massa eget egestas purus viverra accumsan in nisl nisi. Blandit aliquam etiam erat velit scelerisque in. Elementum eu facilisis sed odio morbi. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Egestas purus viverra accumsan in. Id aliquet risus feugiat in ante metus. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Viverra nibh cras pulvinar mattis nunc sed blandit. Eget duis at tellus at urna. Gravida arcu ac tortor dignissim convallis aenean. Arcu cursus euismod quis viverra nibh cras pulvinar. Platea dictumst quisque sagittis purus sit. Rutrum quisque non tellus orci ac auctor augue. Amet mattis vulputate enim nulla aliquet. Magna fringilla urna porttitor rhoncus. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl.
            </p>
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
  )
}

export default About
