import React from 'react';
import { Container, Col, Row, Button, ButtonGroup} from 'react-bootstrap';
import './Footer.css';    

const footer = () => (
    <Container className="mt-2 contenedor-footer ">
        <Row className="align-items-center">
            <Col lg="8" class="align-items-center">           
                <div className="d-flex align-items-center justify-content-around">
                    <Button className="social-icons "><a href="https://www.instagram.com"><i class="fab fa-instagram"></i></a></Button>
                    <Button className="social-icons "><a href="https://www.facebook.com"><i class="fab fa-facebook-f"></i></a></Button>
                    <Button className="social-icons "><a href="https://www.gmail.com"><i class="far fa-envelope"></i></a></Button>
                </div>
            </Col>
            <Col lg="4">
                <div className="d-flex align-items-center justify-content-center ">
                    <h2 className="titulo-footer">Baby Soul</h2>
                </div>
            </Col>
            <Col lg="12">
                <p className="text-center paragraph" style={{fontSize : "10px", fontWeight : "bold"}}>DERECHOS RESERVADOS - BABY♥SOUL</p>
            </Col>
        </Row>
    </Container>
)


export default footer;