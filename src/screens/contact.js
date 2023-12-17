import React, { useState } from 'react';
import styles from '../components/styles.module.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Contact = () => {
    const [copied, setCopied] = useState(null);

    function handleCopyClick(event){
        const id = event.target.id;
        navigator.clipboard.writeText(event.target.innerText);
        setCopied(id);
    };
    return (
        <>
            <footer id="contact" className={styles.footer}>
                <Row>
                    <Col xs={4} md={4} lg={4}>
                        <h3>Contáctame</h3>
                    </Col>
                    <Col xs={4} md={4} lg={4} className="d-flex flex-column align-items-start justify-content-start">
                        <Row>
                            <div>
                                <i className='bi bi-linkedin'/> 
                                <a className={styles["link"]} href="https://www.linkedin.com/in/pablo-retamales-jara-b95511232/"> linkedin.com/in/pablo-retamales-jara-b95511232</a>
                            </div>
                        </Row>
                        <Row>
                            <div className='d-flex align-items-start justify-content-start'>
                                <i className='bi bi-telephone me-1'/>
                                <a
                                id="phone"
                                className={styles["link"]} 
                                href="#/" 
                                onClick={handleCopyClick}
                                > 
                                    +56 9 8947 6136
                                </a> 
                                <img src={process.env.PUBLIC_URL +"/images/contact/copytoclipboard.png"} width='22' alt="c"/>
                                {copied ==="phone" && <p className={`${styles["copy-to-clipboard"]}`}>(Copiado)</p>}
                            </div>
                        </Row>
                    </Col>
                    <Col xs={4} md={4} lg={4} className="d-flex flex-column align-items-start justify-content-start">
                        <Row>
                            <div>
                                <i class="bi bi-github"></i>
                                <a className={styles["link"]} href="https://github.com/doorkaz"> github.com/doorkaz</a>
                            </div>
                        </Row>
                        <Row>
                            <div className='d-flex align-items-start justify-content-start'>
                                <i className="bi bi-envelope me-1"></i>
                                <a
                                id="email"
                                className={styles["link"]} 
                                href="#/"
                                onClick={handleCopyClick}
                                > 
                                retamalespj@gmail.com
                                </a> 
                                <img src={process.env.PUBLIC_URL +"/images/contact/copytoclipboard.png"} width='22' alt="c"/>
                                {copied ==="email" && <p className={`${styles["copy-to-clipboard"]}`}>(Copiado)</p>}
                            </div>
                        </Row>
                    </Col>
                </Row>
            </footer>
        </>
    );
}

export default Contact;