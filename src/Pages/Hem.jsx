import React, { Component } from 'react';
import { Container, Card, Col, Row, Button } from 'react-bootstrap';
import one from '../assets/1.svg';
import two from '../assets/2.svg';
import three from '../assets/3.svg';
import HeroBlock from '../Components/HeroBlock';
import '../css/Hem.css';

export default class Hem extends Component {
    render() {
        return (
            <div className="HemPage">
                <HeroBlock />

                <Container>
                    <h2 className="text-center m-4">Hej är det du?</h2>
                    <Row className="g-4">
                        {[one, two, three].map((img, index) => (
                            <Col md={4} key={index}>
                                <Card className="CustomCard">
                                    <Card.Img variant="top" src={img} />
                                    <Card.Body>
                                        <Card.Title>Card {index + 1}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Läs mer</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}
