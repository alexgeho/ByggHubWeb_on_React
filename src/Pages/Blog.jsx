import React, {Component} from 'react';
import {Card, Col, Container, ListGroup, Row} from "react-bootstrap";

export default class Blog extends Component {
    render() {
        return (
            <Container>

                <Row>

                    <Col md="9">
                        <h5 className="text-center mt-1">
                            Articles
                        </h5>
                        <article className="mb-4 p-3 border rounded">
                            <img src="https://picsum.photos/200" alt="Post 1" className="mb-3 img-fluid rounded" />
                            <h4>Blog Title</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, unde.
                            </p>
                        </article>

                        <article className="d-flex align-items-start mb-4 p-3 border rounded">
                            <img src="https://picsum.photos/201" alt="Post 2"  className="me-3 mb-3 img-fluid rounded" />

                            <div>
                            <h4>Another Post</h4>
                            <p>
                                Nulla vitae elit libero, a pharetra augue mollis interdum.
                            </p>
                            </div>
                        </article>

                        <article className="mb-4 p-3 border rounded">
                            <img src="https://picsum.photos/202" alt="Post 3" className="mb-3 img-fluid rounded" />
                            <h4>Third Post</h4>
                            <p>
                                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                            </p>
                        </article>
                    </Col>

                    <Col md="3">
                   <h5 className="text-center mt-1">
                       Category
                   </h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item><a href="#">Link 1</a></ListGroup.Item>
                                <ListGroup.Item><a href="#">Link 1</a></ListGroup.Item>
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>

                    </Col>

                </Row>



            </Container>
        );
    }
}

