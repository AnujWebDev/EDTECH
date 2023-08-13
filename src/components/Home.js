import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css";
import {AiOutlineTwitter} from "react-icons/ai";
import {BiLogoFacebookCircle} from "react-icons/bi";
import {AiOutlineLinkedin} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
const Home = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(()=>{
        setIsLoading(false);
    },3000)
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
    {isLoading ? (
    <div className='d-flex justify-content-center align-items-center'>
        <div class="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>)
    :
    (
        <>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6 d-flex justify-content-center align-items-center my-5'>
                            <img src='./images/banner2.png' className='img-fluid' alt='' />
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                            <div className='text-center p-md-5'>
                                <h1 style={{ fontFamily: "'DM Serif Display', serif" }}>Overview</h1>
                                <p style={{ fontSize: "18px", lineHeight: '1.6', fontFamily: "'DM Serif Display', serif" }}>
                                    EDTECH CONSULTANCY, we provide very much prepared Website Development Solutions and Our focus in Allahabad
                                    to give our client a best .Net Framework Solution, PHP Framework Solution, HTML CSS Javascript Jquery and
                                    Bootstrap Responsive Solutions, server controls solutions, Binding to a Datagrid and Database Solutions,
                                    Object Oriented Programing Properties Solutions, Content Managment Solutions, Mobile App and SEO Services
                                    in a affordable price. EDTECH CONSULTANCY is a website design, website Development, eCommerce Development,
                                    CMS Development, Product Development, Mobile Aplication Development company in India. Techno Thrive Solutions
                                    works on different domains like Magento, Joomla, WordPress, Core php, mobile app, opencart. We are the best
                                    Website development company in Allahabad, Noida and Varanasi UP.
                                </p>
                                <div className='container d-flex flex-column align-items-center'>
                                    <div className='row'>
                                        <div data-aos="zoom-in" className='col-md-4 col-sm-12 d-flex flex-column align-items-center'>
                                            <div className="counter my-3 d-flex flex-column align-items-center">
                                                <h1 className="heading">Students</h1>
                                                <span id="count" className="count-number">{count}+</span>
                                            </div>
                                        </div>
                                        <div data-aos="zoom-in" className='col-md-4 col-sm-12 d-flex flex-column align-items-center'>
                                            <div className="counter my-3 d-flex flex-column align-items-center">
                                                <h1 className="heading">Users</h1>
                                                <span id="count" className="count-number">{count1}+</span>
                                            </div>
                                        </div>
                                        <div data-aos="zoom-in" className='col-md-4 col-sm-12 d-flex flex-column align-items-center'>
                                            <div className="counter my-3 d-flex flex-column align-items-center">
                                                <h1 className="heading">Placements</h1>
                                                <span id="count" className="count-number">{count2}+</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div>
            <div className='container'>
                <h1 className='text-center my-5' style={{ color:'#fff', fontFamily: "'DM Serif Display', serif" }}>Technologies We Serve</h1>
                <div className='row justify-content-center' >
                    <div className='col-md-4 col-sm-12'>
                        <Card  data-aos="flip-right" className='text-center' style={{ width: '18rem',marginBottom:'50px'  }}>
                            <Card.Img variant="top" src="./images/web.jpg" />
                            <Card.Body>
                                <Card.Title>Web development</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Link to="./services"><Button variant="primary">Learn more</Button></Link>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className='col-md-4 col-sm-12'>
                            <Card data-aos="flip-right" className='text-center' style={{ width: '18rem',marginBottom:'50px'  }}>
                                <Card.Img variant="top" height={'150px'} src="./images/app.png" />
                                <Card.Body>
                                    <Card.Title>App development</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Link to="./services"><Button variant="primary">Learn more</Button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-md-4 col-sm-12'>
                            <Card data-aos="flip-right" className='text-center' style={{ width: '18rem',marginBottom:'50px'  }}>
                                <Card.Img variant="top" height={'150px'} src="./images/ui.avif" />
                                <Card.Body>
                                    <Card.Title>UI/UX development</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Link to="./services"><Button variant="primary">Learn more</Button></Link>
                                </Card.Body>
                            </Card>
                    </div>
                </div>
            </div>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card data-aos="flip-right" className='text-cente' style={{ width: '18rem',marginBottom:'50px' }}>
                            <Card.Img variant="top" src="./images/s.jpg" />
                            <Card.Body>
                                <Card.Title>Software development</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Link to="./services"><Button variant="primary">Learn more</Button></Link>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className='col-md-4'>
                        <Card data-aos="flip-right" className='text-center' style={{ width: '18rem',marginBottom:'50px'  }}>
                            <Card.Img variant="top" height={'150px'} src="./images/1.jpg" />
                            <Card.Body>
                                <Card.Title>Data Scientist</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Link to="./services"><Button variant="primary">Learn more</Button></Link>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className='col-md-4'>
                        <Card data-aos="flip-right" className='text-center' style={{ width: '18rem',marginBottom:'50px'  }}>
                            <Card.Img variant="top" height={'150px'} src="./images/ai.jpg" />
                            <Card.Body>
                                <Card.Title>AI Engineer</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Link to="./services"><Button variant="primary">Learn more</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-fluid my-5 d-flex flex-column align-items-center'>
            <h1 className='text-center' style={{color:"#fff", fontFamily: "'DM Serif Display', serif" }}>Roadmap For Technologies</h1>
            <p className='text-center' style={{color:"#fff", fontSize: "15px", lineHeight: '1.6', fontFamily: "'DM Serif Display', serif" }}>This is the Roadmap for all the Technologies in a slider</p>
            <div className='w-100' style={{ maxWidth: '1000px' }}>
                <Carousel data-bs-theme="dark" style={{ minHeight: '500px', width: '100%' }}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        height={'500px'}
                        src="./images/r1.png"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./images/r2.jpg"
                        height={'500px'}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./images/r3.png"
                        alt="Third slide"
                        height={'500px'}
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./images/r4.png"
                        alt="Fourth slide"
                        height={'500px'}
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./images/r5.jpg"
                        alt="fifth slide"
                        height={'500px'}
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./images/r6.jpg"
                        alt="sixth slide"
                        height={'500px'}
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
             </div>
             <p className='mt-5 text-center' style={{color:"#fff", fontSize: "18px", lineHeight: '1.6', fontFamily: "'DM Serif Display', serif" }}>If you have any Doubts in how to start Learning,feel free to Contact us.</p>
             <Link to='/contact'><Button variant="primary">Contact Us</Button></Link>
        </div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6'>
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
                </div> 
                <div className='col-md-6 d-flex flex-column align-items-center'>
                    <h1 className='mt-5' style={{color:"#fff", fontFamily: "'DM Serif Display', serif" }}>Benefits And perks</h1>
                    <p className='mt-5' style={{ color:"#fff", fontSize: "18px", lineHeight: '1.6', fontFamily: "'DM Serif Display', serif" }}>
                        <ul data-aos="flip-left" data-aos-duration="2000">
                            <li>100% placement gurantee</li>
                            <li>Best faculty and trainers</li>
                            <li>good guidence and mentorships</li>
                            <li>Best Mentorships</li>
                            <li>Mock interviews</li>
                            <li>Mock Tests</li>
                        </ul>
                    </p>
                    <Link to="./contact"><Button className='my-5' variant="primary">Contact Us</Button></Link>
                </div> 
            </div>
        </div>
        <div className='container d-flex flex-column align-items-center'>
            <h1 className='mt-5 text-center my-5' style={{color:"#fff",fontFamily: "'DM Serif Display', serif" }}>Our Courses</h1>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                <div className='col'>
                <Card data-aos="flip-left" data-aos-duration="2000" className='text-center'>
                    <Card.Img variant="top" height={'286px'}  src="./images/front.png" />
                    <Card.Body>
                    <Card.Title>Front end course</Card.Title>
                    <Card.Text>
                        Duration - 3 months
                    </Card.Text>
                    <Button variant="primary">10000 rupees</Button>
                    </Card.Body>
                </Card>
                </div>
                <div className='col'>
                <Card data-aos="flip-left" data-aos-duration="2000" className='text-center'>
                    <Card.Img variant="top" height={'286px'} src="./images/bpng.png" />
                    <Card.Body>
                    <Card.Title>Back end Course</Card.Title>
                    <Card.Text>
                        Duration - 3 months
                    </Card.Text>
                    <Button variant="primary">10000 rupees</Button>
                    </Card.Body>
                </Card>
                </div>
                <div className='col'>
                <Card data-aos="flip-left" data-aos-duration="2000" className='text-center'>
                    <Card.Img variant="top" height={'286px'} src="./images/r.webp" />
                    <Card.Body>
                    <Card.Title>ReactJS Course</Card.Title>
                    <Card.Text>
                        Duration - 2 months
                    </Card.Text>
                    <Button variant="primary">7000 rupees</Button>
                    </Card.Body>
                </Card>
                </div>
                <div className='col'>
                <Card data-aos="flip-left" data-aos-duration="2000" className='text-center'>
                    <Card.Img variant="top" height={'286px'}  src="./images/p.webp" />
                    <Card.Body>
                    <Card.Title> python course</Card.Title>
                    <Card.Text>
                        Duration - 2 months
                    </Card.Text>
                    <Button variant="primary">10000 rupees</Button>
                    </Card.Body>
                </Card>
                </div>
                <div className='col'>
                <Card data-aos="flip-left" data-aos-duration="2000" className='text-center'>
                    <Card.Img variant="top" height={'286px'} src="./images/j.png" />
                    <Card.Body>
                    <Card.Title>JAVA Course</Card.Title>
                    <Card.Text>
                        Duration - 2 months
                    </Card.Text>
                    <Button variant="primary">10000 rupees</Button>
                    </Card.Body>
                </Card>
                </div>
                <div className='col'>
                <Card data-aos="flip-left" data-aos-duration="2000" className='text-center'>
                    <Card.Img variant="top" height={'286px'} src="./images/n.png" />
                    <Card.Body>
                    <Card.Title>NodeJs Course</Card.Title>
                    <Card.Text>
                        Duration - 2 months
                    </Card.Text>
                    <Button variant="primary">7000 rupees</Button>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
        <div className='container-fluid'>
            <h1 className='mt-5 text-center my-5' style={{ fontFamily: "'DM Serif Display', serif" }}>Our Students</h1>
            <div className='row justify-content-center'>
                <div className='col-md-4 mb-4 text-center'>
                <img src='./images/cred.png' alt="cred logo" width={'100px'} height={'40px'} />
                <div className='d-flex flex-column align-items-center mt-3'>
                    <img src='./images/a1.jpg' alt="avatar" width={'50px'} height={'50px'} style={{ borderRadius: '50px' }} />
                    <div className='mt-2'>
                    <span style={{ fontWeight: 'bold' }}>Yadhu Manoharan</span>
                    <p className='s1'>Sr. iOS Engineer</p>
                    </div>
                </div>
                <p className='pg1 mt-3'>
                    EDTECH CONSULTANCY was able to make the process
                    really easy. They were able to schedule
                    interviews with the
                    best companies in the industry and drove the entire process
                    smoothly.
                </p>
                </div>
                <div className='col-md-4 mb-4 text-center'>
                <img src='./images/dream11.png' alt="dream11 logo" width={'100px'} height={'40px'} />
                <div className='d-flex flex-column align-items-center mt-3'>
                    <img src='./images/a2.jpeg' alt="avatar" width={'50px'} height={'50px'} style={{ borderRadius: '50px' }} />
                    <div className='mt-2'>
                    <span style={{ fontWeight: 'bold' }}>Santosh Nain</span>
                    <p className='s1'>SDE-2</p>
                    </div>
                </div>
                <p className='pg1 mt-3'>
                    A friend of mine told me about EDTECH CONSULTANCY
                    when I started looking for new opportunities.
                    The EDTECH CONSULTANCY team was
                    extremely helpful, professional and quick
                    with everything.
                </p>
                </div>
                <div className='col-md-4 mb-4 text-center'>
                <img src='./images/curefit.png' alt="curefit logo" width={'100px'} height={'40px'} />
                <div className='d-flex flex-column align-items-center mt-3'>
                    <img src='./images/a3.jpeg' alt="avatar" width={'50px'} height={'50px'} style={{ borderRadius: '50px' }} />
                    <div className='mt-2'>
                    <span style={{ fontWeight: 'bold' }}>Tarun Dugar</span>
                    <p className='s1'>Sr. Software Engineer</p>
                    </div>
                </div>
                <p className='pg1 mt-3'>
                    Compared to other job portals, what
                    stood out for me was that EDTECH CONSULTANCY, on
                    top of providing really good
                    opportunities, helped me in negotiations
                    with the companies too.
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
      </> )}
    </div>   
    
  )
}

export default Home;
