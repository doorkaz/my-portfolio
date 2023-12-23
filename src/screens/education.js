import React from 'react';
import Col  from 'react-bootstrap/Col' ;
import Row from 'react-bootstrap/Row';

const Education = () => {
    return (
        <>
            <section id="education">
                <h3 className='fs-4'>Mis estudios</h3>
                <div className='d-flex align-items-center justify-content-center'>
                    <Row>
                        <Col  className='text-start'>
                            <h3 className='fs-4'>Formación académica</h3>
                            <p className="fs-5" style={{margin: 0}}>Ingeniería Civil Informática</p>
                            <p className="fs-6 fst-italic lh-sm">Universidad Técnica Federico Santa María (UTFSM)<br/>2021 - Actualidad</p>
                        </Col>
                        <Col className='text-start'>
                            <h3 className='flex fs-4 mb-auto'>Formación adicional</h3>
                            <p className='fs-5' style={{margin: 0}}>Python sin fronteras: HTML, CSS, Flask y MySQL. </p>
                            <p className='fs-6 fst-italic lh-sm'>Plataforma Udemy</p>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )

}

export default Education;