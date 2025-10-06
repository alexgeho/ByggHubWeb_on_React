import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import {Container, Card, Col, Row, Button} from "react-bootstrap";
import one from "../assets/1.svg";
import two from "../assets/2.svg";
import three from "../assets/3.svg";

export default class Hem extends Component {
    render() {
        return (
            <>
                <CarouselBox/>

                <Container>

                    <h2 className="text-center m-4">Hej är det du?</h2>
                    <Row className="g-4">

                        <Col md={4}>
                            <Card bg="warning" border="primary" text="white">

                                <Card.Img
                                    variant="top"
                                    src={one}
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                    <Button variant="primary">Läs mer</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={two}
                                />

                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                    <Button variant="primary">Läs mer</Button>
                                </Card.Body>

                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={three}
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                    <Button variant="primary">Läs mer</Button>
                                </Card.Body>
                            </Card>
                        </Col>


                    </Row>

                </Container>

            </>
        );
    }
}

// export default Hem;