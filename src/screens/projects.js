import React, { useState } from 'react';
import styles from '../components/styles.module.css';
import Carousel from 'react-bootstrap/Carousel';
import Col  from 'react-bootstrap/Col' ;
import Row from 'react-bootstrap/Row';

const Projects = () => {
    const [indexClaps, setIndexClaps] = useState(0);

    const handleSelectClaps = (selectedIndex) => {
        setIndexClaps(selectedIndex);
    };

    const [indexEasyTake, setIndexEasyTake] = useState(0);
  
    const handleSelectEasyTake = (selectedIndex) => {
        setIndexEasyTake(selectedIndex);
    };

    const [indexPrestigeTravels, setIndexPrestigeTravels] = useState(0);
    
    const handleSelectPrestigeTravels = (selectedIndex) => {
        setIndexPrestigeTravels(selectedIndex);
    };
    return (
        <>
            <section id="projects" className='text-start mt-4 mx-3'>
                <h2 className='fs-2'>Mis proyectos.</h2>
                <Row>
                    <Col md={12} lg={6} className={styles["project"]}>
                        <Col className={styles["project"]} style={{backgroundColor: '#17494d'}}>
                            <small>Mobile App</small>
                            <h3>Claps App</h3>
                            <h5>Aplicación para descubrir y dar difusión a obras de teatro locales cercanas.</h5>
                            <h6 style={{color: '#21FFA4'}}>TypeScript, React Native, Django REST Framework, SQLite3, Python, Bootstrap</h6>
                            <p>Fui Front-end Developer, brindé diseño a la aplicación, hice peticiones a la API con Axios y depuré errores trabajando en sincronía con el Backend para garantizar un consumo de la API Rest de forma exitosa.</p>
                            <Carousel className={styles["project-img-container"]} interval={null} activeIndex={indexClaps} onSelect={handleSelectClaps}>
                                <Carousel.Item>
                                    <img className={styles["carousel-img"]} src={process.env.PUBLIC_URL +"/images/carousel/claps/canva1.png"} alt="1"/>
                                </Carousel.Item>
                                    <Carousel.Item>
                                    <img className={styles["carousel-img"]} src={process.env.PUBLIC_URL +"/images/carousel/claps/canva2.png"} alt="2"/>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Col>
                    <Col md={12} lg={6} className={styles["project"]}>
                        <Col className={styles["project"]} style={{backgroundColor: '#2a3838'}}>
                            <small>Web Project</small>
                            <h3>EasyTake</h3>
                            <h5>Aplicación para gestionar la toma de horas en un hospital público.</h5>
                            <h6 style={{color: '#21FFA4', marginBottom: 'auto'}}>NodeJS, React, ExpressJS, JavaScript, MongoDB, CSS, Bootstrap</h6>
                            <p>Fui Full-Stack Developer, creé modelos, gestioné solicitudes HTTP mediante llamadas con Express.js, depuré las solicitudes, creé la solicitud de toma de horas y la visualización de los exámenes por fecha.</p>
                            <Carousel className={styles["project-img-container"]} interval={null} activeIndex={indexEasyTake} onSelect={handleSelectEasyTake}>
                                <Carousel.Item>
                                    <img className={styles["carousel-img"]} src={process.env.PUBLIC_URL +"/images/carousel/easytake/canva1.png"} alt="1"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className={styles["carousel-img"]} src={process.env.PUBLIC_URL +"/images/carousel/easytake/canva2.png"} alt="2"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className={styles["carousel-img"]} src={process.env.PUBLIC_URL +"/images/carousel/easytake/canva3.png"} alt="3"/>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Col>
                    <Col md={12} lg={6} className={styles["project"]} >
                        <Col className={styles["project"]} style={{backgroundColor: '#243443'}}>
                            <small>Web Project</small>
                            <h3>PrestigeTravels</h3>
                            <h5>Aplicación para adquirir paquetes turísticos y reservar alojamientos en hoteles.</h5>
                            <h6 style={{color: '#21FFA4'}}>PHP, MySQL, CSS, Bootstrap</h6>
                            <p>Fui Full-Stack Developer, implementé consultas SQL para visualizar el contenido en la página, implementé tanto funciones clave como búsqueda avanzada, carrito de compras y wishlist, como el diseño de la página.</p>
                            <Carousel className={styles["project-img-container"]} interval={null} activeIndex={indexPrestigeTravels} onSelect={handleSelectPrestigeTravels}>
                                <Carousel.Item>
                                    <img className={styles["carousel-img"]} src={process.env.PUBLIC_URL +"/images/carousel/prestigetravels/canva1.png"} alt="1"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className={styles["carousel-img"]} src={process.env.PUBLIC_URL +"/images/carousel/prestigetravels/canva2.png"} alt="2"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className={styles["carousel-img"]} src={process.env.PUBLIC_URL +"/images/carousel/prestigetravels/canva3.png"} alt="3"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className={styles["carousel-img"]} src={process.env.PUBLIC_URL +"/images/carousel/prestigetravels/canva4.png"} alt="4"/>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default Projects;