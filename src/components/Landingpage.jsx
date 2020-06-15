import React, { Component } from 'react';
import { Container, Carousel, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import BtnRedes from './BtnRedes';


class Landingpage extends Component {
    render(){
        return(
            
                <Container>
                    <Container>     
                        <Carousel className="mb-3 carousel">
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://image.freepik.com/foto-gratis/fondo-azul-claro-bebe-elementson_1220-4300.jpg"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3 className="all-titles">First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://image.freepik.com/foto-gratis/primer-padre-sosteniendo-su-pequeno-bebe_23-2148354229.jpg"
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3 className="all-titles">Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://image.freepik.com/foto-gratis/pequeno-nino-banandose-parque_1303-15972.jpg"
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3 className="all-titles">Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Container>
                    
                    <Container className="mt-5">
                        <Row className="text-center ">
                            <Col lg="12"><h1 className="all-titles display-3">¿Quienes somos?</h1></Col>
                            <hr style={{borderTop:'3px dotted #87CEEB', width:'50%', margin:'auto'}}/>
                            <Col lg="12" className="boder-left-0 border-secondary">
                                <Row className="mt-5 mb-4" >
                                    <Col  lg="6">
                                        <img style={{width:'450px', margin:'auto'}} src="https://image.freepik.com/foto-gratis/vista-superior-bebe-rubio-rodeado-ropa_23-2147983486.jpg" alt=""/>
                                    </Col>
                                    <Col lg="6" className="d-flex flex-column justify-content-center">
                                        <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ty</p>
                                        <BtnRedes />
                                    </Col>
                                </Row>
                            </Col>
                            <hr style={{borderTop:'3px dotted #87CEEB', width:'50%', margin:'auto', marginBottom:'10px'}}/>
                        </Row>
                    </Container>
                    <Container>
                    <div>

                    </div>    
                    </Container>
                </Container>

            
        )
    }

}

export default Landingpage;