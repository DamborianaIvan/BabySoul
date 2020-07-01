import React from 'react';
import { Container, Col, Row} from 'react-bootstrap';
import './Footer.css';    
import BtnRedes from './BtnRedes';

const footer = () => (
    <Container className="mt-2 contenedor-footer ">
        <Row className="align-items-center">
            <Col lg="8" className="align-items-center">           
                <BtnRedes />
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