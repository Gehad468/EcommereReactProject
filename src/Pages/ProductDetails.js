import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
// import './ProductDetails.css'; // Import your CSS file

function ProductDetails() {
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then((res) => setProductDetails(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    if (!productDetails) {
        return <div>Loading...</div>;
    }

    return (
        <Container className='py-5 product-details-container'>
            <Row>
                <Col md={6} className='py-5'>
                    <Image src={productDetails.images[0]} className='product-image' alt={productDetails.title} />
                </Col>
                <Col md={6} className='py-5 product-info'>
                    <ul type="none">
                        <li><strong>Description:</strong> {productDetails.description}</li>
                        <li><strong>Price:</strong> {productDetails.price}$</li>
                        <li><strong>Rating:</strong> {productDetails.rating}</li>
                        <li><strong>Stock:</strong> {productDetails.stock}</li>
                        <li><strong>Brand:</strong> {productDetails.brand}</li>
                        <li><strong>Category:</strong> {productDetails.category}</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductDetails;
