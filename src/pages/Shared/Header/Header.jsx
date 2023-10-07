import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container className='mt-4'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-center'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY ")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={80}>
                    I can be a React component, multiple React components, or just some text......  I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

            <Navbar expand="lg" expanded="light" variant='light' className="bg-body-tertiary">
                <Container>
                     
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>  
                            <Nav.Link href="#link">Career</Nav.Link>  
                        </Nav>
                        <Nav>
                        <Nav.Link href="#home">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#home">
                                <Button variant='secondary'>Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </Container>
    );
};

export default Header;