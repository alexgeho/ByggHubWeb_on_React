import React, {Component} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import TitleAndSubtitle from "../TitleAndSubtitle/TitleAndSubtitle";
import BlueButton from "../BlueButton/BlueButton";
import './ContentBlocks.css';

export default class ContentBlocks extends Component {
    render() {
        return (

            <div className="HeroBlock d-flex justify-content-center align-items-center">

                <Row className="TopMargin">

                    <Col sm={6} className="LeftMargin d-flex flex-column">

                        <div className="ContentBadge">Pricing</div>

                        <TitleAndSubtitle
                            title="Try before you pay"
                            subtitle="14-day free trial. All features. No credit card."
                        />

                        <BlueButton/>

                    </Col>

                    <Col md={6}>
                        <Card className="PricingCard text-light p-4 shadow-sm">
                            <Card.Body>
                                <h5 className="fw-semibold mb-1">Full package</h5>
                                <p className="text-secondary mb-3">Every feature we have</p>
                                <h3 className="fw-bold mb-4">€50 per month per 10 users</h3>

                                <Row>
                                    <Col xs={6}>
                                        <ul className="list-unstyled small">
                                            <li>✅ GPS and manual time tracking</li>
                                            <li>✅ Task manager</li>
                                            <li>✅ File manager</li>
                                            <li>✅ Group & direct chats</li>
                                        </ul>
                                    </Col>
                                    <Col xs={6}>
                                        <ul className="list-unstyled small">
                                            <li>✅ Photo reports</li>
                                            <li>✅ Full data export</li>
                                            <li>✅ Web and mobile access</li>
                                            <li>✅ Email & chat support</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>


            </div>
        );
    }
}

