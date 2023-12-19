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
            <section id="projects" className='text-start'>
                    <h2 className='fs-2'>Mis proyectos.</h2>
                    <Row>
                        <Col sm={12} md={6} className={styles["project"]}>
                            <Col className={styles["project"]} style={{backgroundColor: '#17494d'}}>
                                <small>Mobile App</small>
                                <h3>Claps App</h3>
                                <Carousel className={styles["project-img-container"]} activeIndex={indexClaps} onSelect={handleSelectClaps}>
                                    <Carousel.Item>
                                        <img className={styles["carousel-img"]} src={process.env.PUBLIC_URL +"/images/carousel/claps/canva1.png"} alt="1"/>
                                    </Carousel.Item>
                                      <Carousel.Item>
                                        <img className={styles["carousel-img"]} src={process.env.PUBLIC_URL +"/images/carousel/claps/canva2.png"} alt="2"/>
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                        </Col>
                        <Col sm={12} md={6} className={styles["project"]}>
                            <Col className={styles["project"]} style={{backgroundColor: '#2a3838'}}>
                                <small>Web Project</small>
                                    <h3>EasyTake</h3>
                                    <p></p>
                                    <Carousel className={styles["project-img-container"]} activeIndex={indexEasyTake} onSelect={handleSelectEasyTake}>
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
                        <Col sm={12} md={6} className={styles["project"]} >
                            <Col className={styles["project"]} style={{backgroundColor: '#243443'}}>
                                <small>Web Project</small>
                                <h3>PrestigeTravels</h3>
                                <p></p>
                                <Carousel className={styles["project-img-container"]} activeIndex={indexPrestigeTravels} onSelect={handleSelectPrestigeTravels}>
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