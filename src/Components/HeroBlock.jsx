import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import TitleAndSubtitle from "./TitleAndSubtitle";
import BlueButton from "./BlueButton";
import phone1 from "../assets/p1.png";
import '../css/HeroBlock.css';

export default class HeroBlock extends Component {
    render() {
        return (
            <div className="HeroBlock d-flex justify-content-center align-items-center">

                <Row>
                    <Col sm={8}>

                        <div className="HeroBadge">Built by construction pros, for construction pros</div>

                        <TitleAndSubtitle/>

                        <BlueButton/>

                    </Col>

                    <Col sm={4}>
                        <img src={phone1} alt="App preview" className="imgHero"/>
                    </Col>
                </Row>

                <div className="HeroGlow"></div>

            </div>
        );
    }
}

