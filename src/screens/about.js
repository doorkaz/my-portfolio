import React from 'react';
import styles from '../components/styles.module.css';

const about = () => {
    return (
        <>
            <section id="about" className={`mt-5 ${styles.aboutme}`}>
                <h1 className='fs-2'>Hola. Soy Pablo <img className={styles["hi"]} src={process.env.PUBLIC_URL +"/images/hi.png"} alt="hi"/></h1>
                <p>Profesional en formación, autodidacta y altamente motivado, con gran capacidad de resolución y adaptación. Dispuesto a aprender y mejorar en el ámbito social y laboral. Actualmente, estoy cursando Ingeniería Civil Informática en la Universidad Técnica Federico Santa María, donde recién concluí mi tercer año de carrera.</p>      
            </section>
        </>
    );
}

export default about;