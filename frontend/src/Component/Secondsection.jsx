import './CssFile/Secondsection.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import flower from '../img/flower.png';

function Secondsection() {
    return (
        <>
            <Container fluid className='contain mb-5'>
                <div className='youryogo'>
                    <Row>
                        <h2 className='natureyogoheads'>Your Natural of Yoga</h2>
                    </Row>
                    <Row>
                        <p className='mindndbody'>Yoga is a mind and body practice with origins in ancient Indian philosophy</p>
                    </Row>

                    <Row className='mt-5'>
                        <Col xl={4} sm={6} md={4} lg={4} xxl={4} className='d-flex justify-content-evenly'>
                            <div className="card" style={{ width: '16rem' }}>
                                <img src={flower} className="card-img-top mx-auto d-block" alt="..." style={{ width: '40%', height: 'auto' }} />
                                <div className="card-body">
                                    <h5 className="card-title">Choose the class</h5>
                                    <p className="card-text">
                                        It va esser tam simplic quam Occidental in fact, it va esser Occidental.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col xl={4} sm={6} md={4} lg={4} xxl={4} className='d-flex justify-content-evenly'>
                            <div className="card" style={{ width: '16rem' }}>
                                <img src={flower} className="card-img-top mx-auto d-block" alt="..." style={{ width: '40%', height: 'auto' }} />
                                <div className="card-body">
                                    <h5 className="card-title">Workout Routines</h5>
                                    <p className="card-text">
                                        It va esser tam simplic quam Occidental in fact, it va esser Occidental.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col xl={4} sm={6} md={4} lg={4} xxl={4} className='d-flex justify-content-evenly'>
                            <div className="card" style={{ width: '16rem' }}>
                                <img src={flower} className="card-img-top mx-auto d-block" alt="..." style={{ width: '40%', height: 'auto' }} />
                                <div className="card-body">
                                    <h5 className="card-title">Yoga challenge</h5>
                                    <p className="card-text">
                                        It va esser tam simplic quam Occidental in fact, it va esser Occidental.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
}

export default Secondsection;
