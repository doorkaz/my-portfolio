import React from 'react';
import styles from '../components/styles.module.css';
import Col  from 'react-bootstrap/Col' ;
import Row from 'react-bootstrap/Row';

const about = () => {
    return (
        <>
            <section id="about" className={`mt-5 ${styles.aboutme}`}>
                <h1>Hola. Soy Pablo <img className={styles["hi"]} src={process.env.PUBLIC_URL +"/images/hi.png"} alt="hi"/></h1>
                <p>Profesional en formación, autodidacta y altamente motivado, con gran capacidad de resolución y adaptación. Dispuesto a aprender y mejorar en el ámbito social y laboral. Actualmente, estoy cursando Ingeniería Civil Informática en la Universidad Técnica Federico Santa María, donde recién concluí mi tercer año de carrera. </p>      
                <h3>Mis principales competencias</h3>
                <Row className='d-flex flex-row align-items-center justify-content-around'>
                    <Col xs={4} sm={4} md={4} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                        <span>PYTHON</span>
                        <img className={styles["skills-img"]} src={process.env.PUBLIC_URL +"/images/skills/python.png"} alt="python"/>
                    </Col> 
                    <Col xs={4} sm={4} md={4} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                        <span>REACTJS</span>
                        <img className={styles["skills-img"]} src={process.env.PUBLIC_URL +"/images/skills/reactjs.png"} alt="reactjs"/>
                    </Col> 
                    <Col xs={4} sm={4} md={4} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                        <span>JAVASCRIPT</span>
                        <img className={styles["skills-img"]} src={process.env.PUBLIC_URL +"/images/skills/javascript.png"} alt="javascript"/>
                    </Col> 
                    <Col xs={4} sm={4} md={4} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                        <span>SQL</span>
                        <img className={styles["skills-img"]} src={process.env.PUBLIC_URL +"/images/skills/sql.png"} alt="sql"/>
                    </Col> 
                    <Col xs={4} sm={4} md={4} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                        <span>CSS</span>
                        <img className={styles["skills-img"]} src={process.env.PUBLIC_URL +"/images/skills/css.svg"} alt="css"/>
                    </Col> 
                    <Col xs={4} sm={4} md={4} lg={1} className='d-flex flex-column align-items-center justify-content-center text-center'>
                        <span>BOOTSTRAP</span>
                        <img className={styles["skills-img"]} src={process.env.PUBLIC_URL +"/images/skills/bootstrap.png"} alt="bootstrap"/>
                    </Col> 
                </Row>
            </section>
        </>
    );
}

export default about;