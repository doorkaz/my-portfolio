import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const CustomNavbar = () => {
    return (
        <Navbar expand="lg" className="bg-body-terciary shadow-sm p-3 mb-5 bg-white rounded">
            <Container>
                <Navbar.Brand className="d-flex flex-column justify-content-start align-items-start fs-6" href="/" style={{ lineHeight: '1' }}>
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