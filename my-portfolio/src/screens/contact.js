import React from 'react';
import styles from '../components/styles.module.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Contact = () => {
    return (
        <>
            <footer id="contact" className={styles.footer}>
                <Row>
                    <Col xs={2} md={2} lg={2}>
                        <h3>Contáctame</h3>
                    </Col>
                    <Col xs={5} md={5} lg={5}>
                        <Row>
                            <div className='d-flex me-4'>
                                <div className='me-4'>
                                    <i className='bi bi-linkedin'/> 
                                    <a className={styles["link"]} href="https://www.linkedin.com/in/pablo-retamales-jara-b95511232/"> linkedin.com/in/pablo-retamales-jara-b95511232</a>
                                </div>
                                <div className='me-4'>
                                    <i className='bi bi-telephone'/>
                                    <span> +56 9 8947 6136</span> 
                                </div>
                            </div>
                        </Row>
                    </Col>
                    <Col xs={5} md={5} lg={5}>
                        <Row>
                            <div className='d-flex me-4'>
                                <div>
                                    <i class="bi bi-github"></i>
                                    <a className={styles["link"]} href="https://github.com/doorkaz"> github.com/doorkaz</a>
                                </div>
                            </div> 
                        </Row>
                    </Col>
                </Row>
            </footer>
        </>
    );
}

export default Contact;