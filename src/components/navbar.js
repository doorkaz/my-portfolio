import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './styles.module.css';

const CustomNavbar = () => {
    return (
        <Navbar id="navbar" expand="lg" className={`bg-body-terciary shadow-lg p-3 ${styles["navbar-fix"]}`}>
            <Container>
                <Navbar.Brand style={{ color: 'white' }}>
                    <div className={styles["dev-icon"]}>
                        &lt;/&gt;
                    </div>
                </Navbar.Brand>
                <Navbar.Brand className="d-flex flex-column justify-content-start align-items-start ms-2" style={{ lineHeight: '1', color: 'white' }}>
                    <span className='fs-5'>Pablo</span>
                    <span className='fs-5'>Retamales</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link style={{color: 'white'}} href="#about">Sobre mí</Nav.Link>
                    <Nav.Link style={{color: 'white'}} href="#projects">Proyectos</Nav.Link>
                    <Nav.Link style={{color: 'white'}} href="#contact">Contacto</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;