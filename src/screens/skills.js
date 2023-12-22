import React from 'react';
import styles from '../components/styles.module.css';
import Col  from 'react-bootstrap/Col' ;
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';

const skills = () => {
    return (
        <>
            <section id="skills" className={`mt-5 ${styles.aboutme}`}>
                <h3 className='fs-4'>Mi stack de tecnologías</h3>
                <Carousel className={styles["carousel-min-height"]} interval={null} data-bs-theme="dark" controls={false}>
                    <Carousel.Item>
                        {/* Primer stack de tecnologías */}
                        <Row className='d-flex align-items-center justify-content-around'>
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className="fs-6">Python</span>
                                <img className={styles["skills-img"]} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' alt="1"/>
                            </Col> 
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className="fs-6">ReactJS</span>
                                <img className={styles["skills-img"]} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' alt="2"/>
                            </Col> 
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className="fs-6">JavaScript</span>
                                <img className={styles["skills-img"]} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' alt="3"/>
                            </Col>
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className="fs-6">TypeScript</span>
                                <img className={styles["skills-img"]} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' alt="3"/>
                            </Col>
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className="fs-6">Java</span>
                                <img className={styles["skills-img"]} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' alt="5"/>
                            </Col>  
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className="fs-6">C</span>
                                <img className={styles["skills-img"]} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' alt="2"/>
                            </Col> 
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className="fs-6">C++</span>
                                <img className={styles["skills-img"]} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' alt="3"/>
                            </Col> 
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className="fs-6">PHP</span>
                                <img className={styles["skills-img"]} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' alt="3"/>
                            </Col> 
                        </Row>
                    </Carousel.Item>
                    
                    {/* Segundo stack de tecnologías */}
                    <Carousel.Item>
                        <Row className='d-flex align-items-center justify-content-around'>
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className="fs-6">MySQL</span>
                                <img className={styles["skills-img"]} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' alt="4"/>
                            </Col>
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className="fs-6">MongoDB</span>
                                <img className={styles["skills-img"]} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' alt="4"/>
                            </Col>
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className="fs-6">CSS</span>
                                <img className={styles["skills-img"]} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' alt="5"/>
                            </Col>
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className="fs-6">HTML5</span>
                                <img className={styles["skills-img"]} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' alt="5"/>
                            </Col>
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className="fs-6">Bootstrap</span>
                                <img className={styles["skills-img"]} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' alt="6"/>
                            </Col> 
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className="fs-6">Android Studio</span>
                                <img className={styles["skills-img"]} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' alt="1"/>
                            </Col> 
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className="fs-6">Jupyter Notebook</span>
                                <img className={styles["skills-img"]} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg' alt="4"/>
                            </Col> 
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className="fs-6">GitHub</span>
                                <img className={styles["skills-img"]} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' alt="3"/>
                            </Col> 
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </section>
        </>
    );
}

export default skills;