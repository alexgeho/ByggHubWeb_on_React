import React, {Component} from 'react';
import {Container, Card, Col, Row, Button} from 'react-bootstrap';
import one from '../assets/1.svg';
import two from '../assets/2.svg';
import three from '../assets/3.svg';
import phone2 from '../assets/p2.png';
import phone3 from '../assets/p3.png';
import phone4 from '../assets/p4.png';
import phone5 from '../assets/p5.png';
import HeroBlock from '../Components/HeroBlock/HeroBlock';
import '../css/Hem.css';
import PhoneBlock from "../Components/PhoneBlock/PhoneBlock";
import BlueBlock from "../Components/BlueBlock/BlueBlock";
import TitleAndSubtitle from "../Components/TitleAndSubtitle/TitleAndSubtitle";
import ContentBlocks from "../Components/ContentBlocks/ContentBlocks";

export default class Hem extends Component {
    render() {
        return (

            <>
                <div className="HemPageDark">
                    <HeroBlock/>
                    <Container>
                        <Row>

                            <Col md={4}>
                                <Card className="CustomCard">
                                    <Card.Img variant="top" src={one} style={{margin: '0 auto'}}/>
                                    <Card.Body>
                                        <Card.Title>Card 1</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the
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
                                            Some quick example text to build on the card title and make up the bulk of
                                            the
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
                                            Some quick example text to build on the card title and make up the bulk of
                                            the
                                            card's content.
                                        </Card.Text>
                                        <Button variant="primary">Läs mer</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </Container>
                </div>


                <div className="
                HemPageLight
                d-flex
                flex-column
                justify-content-center
                align-items-center gap-5
                "
                     style={{padding: '50px'}}
                >

                    <PhoneBlock
                        image={phone2}
                        title="Auto Time Tracking"
                        text="GPS-based check-in/check-out, automatic shift logs. Export to Excel in 3 clicks."
                    />

                    <PhoneBlock
                        image={phone3}
                        title="Photo Reports"
                        text="Workers upload jobsite photos right in the app. You get instant proof of progress."
                        reverse
                    />

                    <PhoneBlock
                        image={phone4}
                        title="Project info in one place"
                        text="Tasks, drawings, and files stored per project. Everything in the right hands."
                    />

                    <PhoneBlock
                        image={phone5}
                        title="No mess, no distractions"
                        text="Create project-specific groups, so conversations stay focused and nothing gets lost. No personal chats like in WhatsApp — only clearly organized work chats."
                        reverse
                    />

                    <BlueBlock>

                        <TitleAndSubtitle
                            title={<>We'll bulid custom features<br/>specifically for your workflow</>}
                            subtitle="Just tell us what your team needs — and we’ll implement it shortly. "
                        />

                    </BlueBlock>


                </div>

                <div className="HemPageDark">

                        <ContentBlocks/>

                </div>


            </>
        );
    }
}
