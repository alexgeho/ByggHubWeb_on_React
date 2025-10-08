import React, {Component} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import logo from '../../img/logo.png';
import {Link} from "react-router-dom";
import './Header.css';
import ArticlePage from "../../Pages/ArticlePage";

export default class Header extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const navbar = document.querySelector(".CustomNavbar");
        if (!navbar) return; // ← если не найден, просто выходим, без ошибок

        if (window.scrollY > 20) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    };


    navbar = (
        <Navbar
            fixed="top"
            collapseOnSelect
            expand="md"
            style={{backgroundColor: "#000509"}}
            variant="dark"
        >
            <Container className="custom-container d-flex justify-content-between align-items-center">
                {/* --- LOGO --- */}

                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img
                        src={logo}
                        width="205"
                        height="56"
                        className="d-inline-block align-top logo-img"
                        alt="ByggHub Logo"
                    />
                </Link>


                {/* --- TOGGLER (для мобильных) --- */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>




                {/* --- NAVIGATION LINKS --- */}
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto gap-3 custom-nav">
                        <Nav.Link as={Link} to="/">Hem</Nav.Link>
                        <Nav.Link as={Link} to="/about">Om oss</Nav.Link>
                        <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/Contacts">Kontakt</Nav.Link>
                    </Nav>

                    {/* --- BUTTONS (LOGIN + TRY FOR FREE) --- */}
                    <div className="d-flex align-items-center gap-2">
                        <Button
                            variant="outline-light"
                            className="px-3"
                            as={Link}
                            to="/login"
                        >
                            Login
                        </Button>

                        <Button
                            variant="primary"
                            className="px-3"
                            as={Link}
                            to="/signup"
                        >
                            Try for free
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

    render() {
        return this.navbar;
    }
}
