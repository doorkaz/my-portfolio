import React from 'react';
import styles from '../components/styles.module.css';

const about = () => {
    return (
        <>
            <section id="about" className={styles.aboutme}>
                <h1>Hola. Soy Pablo <img src="images/hi.png" alt="hi" width={30}/></h1>
                <p>Profesional en formación, autodidacta y altamente motivado, con gran capacidad de resolución y adaptación. Dispuesto a aprender y mejorar en el ámbito social y laboral. Actualmente, estoy cursando Ingeniería Civil Informática en la Universidad Técnica Federico Santa María, donde recién concluí mi tercer año de carrera. </p>      
                <h3>Mis principales competencias</h3>
                <ul>
                    <li>
                        <span>PYTHON</span>
                        <img src="images/skills/python.png" alt="python" width={30}/>
                    </li>
                    <li>
                        <span>REACTJS</span>
                        <img src="images/skills/reactjs.png" alt="reactjs" width={30}/>
                    </li>
                    <li>
                        <span>JAVASCRIPT</span>
                        <img src="images/skills/javascript.png" alt="javascript" width={30}/>
                    </li>
                    <li>
                        <span>HTML5</span>
                        <img src="images/skills/html.png" alt="html5" width={30}/>
                    </li>
                    <li>
                        <span>SQL</span>
                        <img src="images/skills/sql.png" alt="sql" width={30}/>
                    </li>
                </ul>
            </section>
        </>
    );
}

export default about;