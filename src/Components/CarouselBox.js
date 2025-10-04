import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import heroImage from "../assets/bg1.jpg";
import heroImage2 from "../assets/bgH.png";


export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={heroImage}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>BYggHub Original</h3>
                        <p>We already helped 867 companies till 2026.07.17 save tons of hours</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={heroImage2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>BYggHub Original</h3>
                        <p>We already helped 867 companies till 2026.07.17 save tons of hours</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        );
    }
}

