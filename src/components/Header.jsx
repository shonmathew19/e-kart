import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';


function Header() {
    return (
        <>
            <Navbar expand="lg" className="bg-primary">
                <Container>
                    <Navbar.Brand href="#home" style={{ color: 'white' }}>
                        <i className="fa-solid fa-cart-shopping fa-bounce me-3 text-success fs-3"></i>
                        E-KART
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto ">
                            <Nav.Link >
                                <Link to={"/cart"} style={{ color: 'white', textDecoration: 'none' }}>
                                    <i className="fa-solid fa-cart-shopping me-2 "></i>
                                    Cart
                                    <Badge className='ms-1 ' bg="secondary">7</Badge>
                                </Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link to={"/whishlist"} style={{ color: 'white', textDecoration: 'none' }}>
                                    <i className="fa-solid fa-heart me-2  fa-fade text-danger "></i>
                                    Wishlist
                                    <Badge className='ms-1 text-danger' bg="secondary">2</Badge>
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header