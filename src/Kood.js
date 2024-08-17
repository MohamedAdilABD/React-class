import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";



export default function Kood()
{
    return (

        <>
            <Container className="text-white">

                <Row>

                    <Col className="bg-primary p-5">
                    <h1>React</h1>
                    </Col>

                    <Col className="bg-secendary p-5">
                    <h1>Bootstrap</h1>
                    </Col>
                </Row>
            </Container>
            
            
            
        </>
    )
}