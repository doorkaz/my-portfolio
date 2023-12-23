import React from 'react';
import styles from '../components/styles.module.css';

const about = () => {
    return (
        <>
            <section id="about" className={`mt-5 ${styles.aboutme}`}>
                <h1 className='fs-2'>Hola. Soy Pablo!</h1>
                <p>Soy responsable, riguroso, altamente motivado, con gran capacidad de resolución y adaptabilidad. Las áreas de mi interés son el desarrollo full-stack y el análisis de datos. Me gusta el código limpio y eficiente, ah!, y los gatos!</p>
            </section>
        </>
    );
}

export default about;