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
            <footer id="contact" className={styles["footer"]}>
                <Row className="d-flex align-items-center justify-content-center px-4">
                    <Col xs={12} sm={12} md={12} lg={2} className="d-flex flex-column align-items-center justify-content-center">
                        <h3>Contáctame</h3>
                    </Col>
                    <Col xs={12} sm={12} md={7} lg={5} className={styles["contact-column-res"]}>
                        <div className={styles["footer-item"]}>
                            <i className='bi bi-linkedin me-1'/>
                            <a className={styles["link"]} href="https://www.linkedin.com/in/pablo-retamales-jara-b95511232/"> 
                            linkedin.com/in/pablo-retamales-jara-b95511232
                            </a>
                        </div>
                        <div className={styles["footer-item"]}>
                            <i className='bi bi-telephone me-1' />
                            <a id="phone" className={styles["link"]} href="#/" onClick={handleCopyClick}> 
                                +56 9 8947 6136
                            </a>
                            <img src={process.env.PUBLIC_URL +"/images/contact/copytoclipboard.png"} height='22' alt="c"/>
                            {copied ==="phone" && <p className={`${styles["copy-to-clipboard"]}`} style={{ display: "inline" }}>(Copiado)</p>}
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={5} lg={5} className={styles["contact-column-res"]}>
                        <div className={styles["footer-item"]}>
                            <i className="bi bi-github me-1"/>
                            <a className={styles["link"]} href="https://github.com/doorkaz"> github.com/doorkaz</a>
                        </div>
                        <div className={styles["footer-item"]}>
                            <i className="bi bi-envelope me-1"/>
                            <a id="email" className={styles["link"]} href="#/" onClick={handleCopyClick}> 
                            retamalespj@gmail.com
                            </a> 
                            <img src={process.env.PUBLIC_URL +"/images/contact/copytoclipboard.png"} height='22' alt="c"/>
                            {copied ==="email" && <p className={`${styles["copy-to-clipboard"]}`} style={{ display: "inline" }}>(Copiado)</p>}
                        </div>
                    </Col>
                </Row>
            </footer>
            <small className='d-flex flex-row align-items-end justify-content-center' style={{ backgroundColor: 'rgb(29, 26, 26)', color: 'white'}}>&copy; 2023. All Rights Deserved</small>

        </>
    );
}

export default Contact;