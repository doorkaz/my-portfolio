import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const CustomNavbar = () => {
    return (
        <Navbar id="navbar" expand="lg" data-bs-theme="dark" className="bg-body-terciary shadow-lg p-3 navbar-fix">
            <Container>
                <Navbar.Brand>
                    <img className='my-photo-navbar' src={process.env.PUBLIC_URL + '/assets/me/1.jpg'} alt='me'/>
                </Navbar.Brand>
                <Navbar.Brand className="d-flex flex-column justify-content-start align-items-start" style={{ lineHeight: '1', color: 'white' }}>
                    <span className='fs-5'>Pablo</span>
                    <span className='fs-5'>Retamales</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link style={{color: 'white'}} href="#about">Sobre mí</Nav.Link>
                    <Nav.Link style={{color: 'white'}} href="#skills">Skills</Nav.Link>
                    <Nav.Link style={{color: 'white'}} href="#projects">Proyectos</Nav.Link>
                    <Nav.Link style={{color: 'white'}} href="#education">Educación</Nav.Link>
                    <Nav.Link style={{color: 'white'}} href="#contact">Contacto</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;