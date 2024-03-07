import React from 'react';
import Col  from 'react-bootstrap/Col' ;
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';

const skills = () => {
    return (
        <>
            <section id='skills' className={`d-flex flex-column justify-content-center text-center`} style={{margin: '0 6em 0 6em'}}>
                <h3 className='fs-4'>Mi stack de tecnologías</h3>
                <Carousel className='carousel-min-height' interval={null} data-bs-theme='dark' controls={false}>
                    <Carousel.Item>
                        {/* Primer stack de tecnologías */}
                        <Row className='d-flex align-items-center justify-content-around'>
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className='fs-6'>React</span>
                                <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' alt='img'/>
                            </Col>
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className='fs-6'>JavaScript</span>
                                <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' alt='img'/>
                            </Col>
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className='fs-6'>TypeScript</span>
                                <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' alt='img'/>
                            </Col>
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className='fs-6'>Django</span>
                                <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg' alt='img'/>
                            </Col> 
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className='fs-6'>Python</span>
                                <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' alt='img'/>
                            </Col>
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className='fs-6'>Java</span>
                                <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' alt='img'/>
                            </Col>  
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className='fs-6'>C</span>
                                <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' alt='img'/>
                            </Col> 
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className='fs-6'>C++</span>
                                <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' alt='img'/>
                            </Col> 
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className='d-flex align-items-center justify-content-around'>
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className='fs-6'>NumPy</span>
                                <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg' alt='img'/>
                            </Col>
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className='fs-6'>Matplotlib</span>
                                <img className='skills-img' src='https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg' alt='img'/>
                            </Col>
                           
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className='fs-6'>Pandas</span>
                                <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' alt='img'/>
                            </Col>
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className='fs-6'>Excel</span>
                                <img className='skills-img' src='https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg' alt='img'/>
                            </Col>
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className='fs-6'>PHP</span>
                                <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' alt='img'/>
                            </Col>
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className='fs-6'>MySQL</span>
                                <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' alt='img'/>
                            </Col>
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className='fs-6'>MongoDB</span>
                                <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' alt='img'/>
                            </Col>
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className='fs-6'>SQL Server</span>
                                <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' alt='img'/>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    
                    {/* Segundo stack de tecnologías */}
                    <Carousel.Item>
                        <Row className='d-flex align-items-center justify-content-around'>
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className='fs-6'>CSS3</span>
                                <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' alt='img'/>
                            </Col>
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className='fs-6'>HTML5</span>
                                <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' alt='img'/>
                            </Col>
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className='fs-6'>Bootstrap</span>
                                <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' alt='img'/>
                            </Col> 
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className='fs-6'>LaTeX</span>
                                <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg' alt='img'/>
                            </Col>
                            
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className='fs-6'>Android Studio</span>
                                <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' alt='img'/>
                            </Col> 
                            <Col xs={6} sm={3} md={3} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                                <span className='fs-6'>Jupyter Notebook</span>
                                <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg' alt='img'/>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </section>
        </>
    );
}

export default skills;