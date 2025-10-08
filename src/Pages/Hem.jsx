import React, {Component} from 'react';
import {Container, Card, Col, Row, Button} from 'react-bootstrap';
import one from '../assets/1.svg';
import two from '../assets/2.svg';
import three from '../assets/3.svg';
import HeroBlock from '../Components/HeroBlock';
import '../css/Hem.css';

export default class Hem extends Component {
    render() {
        return (
            <div className="HemPage">
                <HeroBlock/>

                <Container>

                    <Row>

                        <Col md={4}>
                            <Card className="CustomCard">
                                <Card.Img variant="top" src={one} style={{margin: '0 auto'}}/>
                                <Card.Body>
                                    <Card.Title>Card 1</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">Läs mer</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="CustomCard">
                                <Card.Img variant="top" src={two} style={{margin: '0 auto'}}/>
                                <Card.Body>
                                    <Card.Title>Card 2</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">Läs mer</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="CustomCard">
                                <Card.Img variant="top" src={three} style={{margin: '0 auto'}}/>
                                <Card.Body>
                                    <Card.Title>Card 3</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">Läs mer</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>

                </Container>
            </div>
        );
    }
}
