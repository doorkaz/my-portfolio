import React from 'react';
import styles from '../components/styles.module.css';

const about = () => {
    return (
        <>
            <section id="about" className={`mt-5 ${styles.aboutme}`}>
                <h1>Hola. Soy Pablo <img className={styles["hi"]} src={process.env.PUBLIC_URL +"/images/hi.png"} alt="hi"/></h1>
                <p>Profesional en formación, autodidacta y altamente motivado, con gran capacidad de resolución y adaptación. Dispuesto a aprender y mejorar en el ámbito social y laboral. Actualmente, estoy cursando Ingeniería Civil Informática en la Universidad Técnica Federico Santa María, donde recién concluí mi tercer año de carrera. </p>      
                <h3>Mis principales competencias</h3>
                <ul>
                    <li>
                        <span style={{fontSize: '18px'}}>PYTHON</span>
                        <img src={process.env.PUBLIC_URL +"/images/skills/python.png"} alt="python" width={50}/>
                    </li>
                    <li>
                        <span style={{fontSize: '18px'}}>REACTJS</span>
                        <img src={process.env.PUBLIC_URL +"/images/skills/reactjs.png"} alt="reactjs" width={50}/>
                    </li>
                    <li>
                        <span style={{fontSize: '18px'}}>JAVASCRIPT</span>
                        <img src={process.env.PUBLIC_URL +"/images/skills/javascript.png"} alt="javascript" width={50}/>
                    </li>
                    
                    <li>
                        <span style={{fontSize: '18px'}}>SQL</span>
                        <img src={process.env.PUBLIC_URL +"/images/skills/sql.png"} alt="sql" width={50}/>
                    </li>
                    <li>
                        <span style={{fontSize: '18px'}}>CSS</span>
                        <img src={process.env.PUBLIC_URL +"/images/skills/css.svg"} alt="css" width={50}/>
                    </li>
                    <li>
                        <span style={{fontSize: '18px'}}>HTML5</span>
                        <img src={process.env.PUBLIC_URL +"/images/skills/html.png"} alt="html5" width={50}/>
                    </li>
                    <li>
                        <span style={{fontSize: '18px'}}>BOOTSTRAP</span>
                        <img src={process.env.PUBLIC_URL +"/images/skills/bootstrap.png"} alt="bootstrap" width={50}/>
                    </li>
                </ul>
            </section>
        </>
    );
}

export default about;