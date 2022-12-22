import React, { useState } from 'react';
import { UncontrolledCarousel, Row, Col, Container } from "reactstrap";

const items = [
  {
    src: "http://localhost:8000/public/images/1.jpg",
    altText: '',
    caption: '',
    key: 1,
  },
  {
    src: "http://localhost:8000/public/images/2.jpg",
    altText: '',
    caption: '',
    key: 2,
  },
  {
    src: "http://localhost:8000/public/images/3.jpg",
    altText: '',
    caption: '',
    key: 3,
  },
  {
    src: "http://localhost:8000/public/images/4.jpg",
    altText: '',
    caption: '',
    key: 4,
  },
];

function Lading() {
    return (
        <Container className=' mt-5'>
            <Row className='text-warning'>
                <h1><b>PIZZA 365 <br /> <span style={{ fontStyle: "italic", fontSize: "25px" }}>Truly italian!</span> </b></h1>
            </Row>
            <Row>
                <Col className="mx-auto">
                    <UncontrolledCarousel items={items} />
                </Col>
            </Row>
        </Container>
    );
}

export default Lading;