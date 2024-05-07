import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function ProductsByCategory() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${category}`)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <Container className='py-5'>
      <Row className='py-5'>
        {products.map(product => (
          <Col key={product.id} xs={12} sm={5} md={3} lg={2.4} style={{ marginBottom: '1.1rem' }}>
            <Link to={`/ProductDetails/${product.id}`} className='product-link'>
              <Card className='product-card'>
                <div className='image-container'>
                  <Card.Img variant="top" src={product.thumbnail} className='product-image' />
                </div>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductsByCategory;
