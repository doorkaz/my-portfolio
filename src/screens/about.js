import React from 'react';
import styles from '../components/styles.module.css';

const about = () => {
    return (
        <>
            <section id="about" className={`mt-5 ${styles.aboutme}`}>
                <h1 className='fs-2'>Hola. Soy Pablo!</h1>
                <p>Soy responsable, riguroso, altamente motivado, con gran capacidad de resolución y adaptabilidad. Me encanta embarcarme en nuevos desafíos, en el viaje interminable que es la informática!</p>
                <h3 class="fs-4">Áreas de interés</h3>
                <p>Las áreas de mi interés son el desarrollo full-stack y el análisis de datos.</p>
            </section>
        </>
    );
}

export default about;