import React from 'react';
import styles from '../components/styles.module.css';

const about = () => {
    return (
        <>
            <section id="about" className={`mt-5 ${styles.aboutme}`}>
                <h1 className='fs-2'>Hola. Soy Pablo!</h1>
                <p>Soy motivado, responsable y riguroso. Me gusta resolver problemas complejos. Tengo conocimientos en varios lenguajes de programación, bases de datos, desarrollo de software, análisis y desarrollo de algoritmos.</p>
                <h3 class="fs-4">Áreas de interés</h3>
                <p>Las áreas de mi interés son el desarrollo full-stack y análisis de datos.</p>
            </section>
        </>
    );
}

export default about;