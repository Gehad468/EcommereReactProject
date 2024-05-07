import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../li.png';

import { NavDropdown, Container, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting"
];

function NavbarComponent() {
    const cart = useSelector(state => state.cart);
    const favorites = useSelector(state => state.favorites.favorites);
    return (
        <Navbar expand="lg" className="navbar-light fixed-top" style={{ background: 'linear-gradient(to right, #6a83ad, #A27bad)' }}>
            <Container>
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="logo" style={{ width: '100px', height: 'auto' }} />
                </Link>
                <Navbar.Toggle aria-controls="navbarNav" className="custom-toggler " />
                <Navbar.Collapse id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/" style={{ color: 'white' }}>Home</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/products" style={{ color: 'white' }}>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login" style={{ color: 'white' }}>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register" style={{ color: 'white' }}>Register</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart" style={{ color: 'white' }}><i className="fa fa-shopping-cart" ></i>  {cart.length}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/FavoriteProducts" style={{ color: 'white' }}><i className="fa fa-heart" ></i> {favorites.length}</Link>
                        </li>
                        <NavDropdown  title="Categories"  id="navbarScrollingDropdown">
                            {categories.map(category => (
                                <NavDropdown.Item as={Link} key={category} to={`/category/${category}`}>{category}</NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
