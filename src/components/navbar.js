import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './styles.module.css';

const CustomNavbar = () => {
    return (
        <Navbar id="navbar" expand="lg" className={`bg-body-terciary bg-white shadow-sm p-3 rounded ${styles["navbar-fix"]}`}>
            <Container>
                <Navbar.Brand className="d-flex flex-column justify-content-start align-items-start fs-6 ms-2" style={{ lineHeight: '1' }}>
                    <span>Pablo</span>
                    <span>Retamales</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#about">Sobre mí</Nav.Link>
                    <Nav.Link href="#projects">Proyectos</Nav.Link>
                    <Nav.Link href="#contact">Contacto</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;