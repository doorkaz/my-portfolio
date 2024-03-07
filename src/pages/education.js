import React from 'react';
import Col  from 'react-bootstrap/Col' ;
import Row from 'react-bootstrap/Row';

const Education = () => {
    return (
        <>
            <section id='education' className='my-3'>
                <div className='d-flex align-items-center justify-content-center mx-5'>
                    <Row>
                        <Col xs={12} sm={6} className='text-start'>
                            <h3 className='fs-4'>Formación académica</h3>
                            <p className='fs-5' style={{margin: 0}}>Ingeniería Civil Informática</p>
                            <p className='fs-6 fst-italic lh-sm'>Universidad Técnica Federico Santa María (UTFSM)<br/>2021 - Actualidad</p>
                        </Col>
                        <Col xs={12} sm={6} className='text-start'>
                            <h3 className='fs-4'>Formación adicional</h3>
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