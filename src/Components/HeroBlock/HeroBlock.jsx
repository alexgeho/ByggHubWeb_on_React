import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import TitleAndSubtitle from "../TitleAndSubtitle/TitleAndSubtitle";
import BlueButton from "../BlueButton/BlueButton";
import phone1 from "../../assets/p1.png";
import './HeroBlock.css';

export default class HeroBlock extends Component {
    render() {
        return (

            <div className="HeroBlock d-flex justify-content-center align-items-center">

                <Row className="TopMargin">

                    <Col sm={8} className="LeftMargin d-flex flex-column">

                        <div className="HeroBadge">Built by construction pros, for construction pros</div>

                        <TitleAndSubtitle
                            title={<>Get rid of chaos<br/>and boring paperwork</>}
                            subtitle={<>Automate work time-tracking, keep tasks, documents,<br/>and team communication
                                in one place.</>}
                        />

                        <BlueButton/>

                    </Col>

                    <Col sm={4} className="RightMargin">
                        <img src={phone1} alt="App preview" className="imgHero"/>
                    </Col>

                </Row>

                <div className="HeroGlow"></div>

            </div>
        );
    }
}

