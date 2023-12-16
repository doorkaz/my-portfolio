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
                    <Col xs={10} md={10} lg={10}>
                        <div className='d-flex me-4'>
                            <div className='me-4'>
                                <i className='bi bi-linkedin'></i> 
                                <span>linkedin.com/in/pablo-retamales-jara-b95511232</span>
                            </div>
                            <div className='me-4'>
                                <i className='bi bi-telephone'></i> 
                                <span>+56 9 8947 6136</span> 
                            </div>
                        </div> 
                    </Col>
                </Row>
            </footer>
        </>
    );
}

export default Contact;