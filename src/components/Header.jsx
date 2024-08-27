import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';


function Header() {
    //useSelector hook is used to access state available in store
    const whishlist = useSelector((state) => state.wishlistReducer)
    console.log('====whishlist items====');
    console.log(whishlist);

    const cart = useSelector((state=>state.cartReducer))
    console.log('====cart items====');
    console.log(cart);


    return (
        <>
            <Navbar expand="lg" className="bg-primary" >
                <Container >
                    <Navbar.Brand href="/" style={{ color: 'white' }}>
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
                                    <Badge className='ms-1 fs-6 ' bg="secondary">{cart?.length}</Badge>
                                </Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link to={"/whishlist"} style={{ color: 'white', textDecoration: 'none' }}>
                                    <i className="fa-solid fa-heart me-2  fa-fade text-danger "></i>
                                    Wishlist
                                    <Badge className='ms-1 text-danger fs-6' bg="secondary">{whishlist?.length}</Badge>
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