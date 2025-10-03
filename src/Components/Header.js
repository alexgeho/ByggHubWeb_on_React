import React, {Component} from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import logo from '../img/logo.png';

export default class Header extends Component {
    render(){
        return(
         <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
             <Container>
                     <Navbar.Brand href="/">
                         <img
                             src={logo}
                             width="30"
                             height="30"
                             className="d-inline-block align-top"
                             alt="Logo" />
                         React App
                     </Navbar.Brand>
                 <Navbar.Toggle arial-controls="responsive-navbar-nav" />
                 <Navbar.Collapse id="responsive-navbar-nav">

                     <Nav className="mr-auto">

                         <Nav.Link href="/">Hem</Nav.Link>
                         <Nav.Link href="/om_oss">Om oss</Nav.Link>
                         <Nav.Link href="/kontakt">Kontakt</Nav.Link>
                         <Nav.Link href="/blog">Blog</Nav.Link>

                     </Nav>
                    <Form inline>
                        < FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                 </Navbar.Collapse>
             </Container>
         </Navbar>
        )
    }

}