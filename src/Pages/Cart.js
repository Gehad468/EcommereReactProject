import React from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart, clearCart } from '../store/action/actions';
import Table from 'react-bootstrap/Table'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';

const Card = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const totalPrice = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const handleDeleteFromCart = (product) => {
        dispatch(deleteFromCart(product));
    };

    return (
        <div className="container py-5 ">
            <div className="py-5">
                <div className="row text-center">
                {cart.length === 0 ? (
        <h3 style={{ color: '#a29BAD', fontFamily:'cursive' }}>Empty Card!!</h3>
      ) : (
                    <div className="col-md-12">
                    <Button onClick={handleClearCart} variant='dark'>Clear</Button>
                    <Table striped="columns">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Image</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td><Image src={product.images[0]} alt={product.title} style={{ width: "150px", height: "100px" }} /></td>
                                    <td>{product.quantity}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <Button onClick={() => handleAddToCart(product)} style={{ marginTop: '10px', backgroundColor: '#A27bad', color: 'white', border: 'none', margin: '5px 10px', borderRadius: '3px', cursor: 'pointer' }}>+</Button>
                                        <Button variant="dark" onClick={() => handleDeleteFromCart(product)} style={{ marginTop: '10px', border: 'none', margin: '5px', borderRadius: '3px', cursor: 'pointer' }}>-</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
      )
    }
      </div>
      <strong  style={{color:'#A27bad' }}>Total Price:</strong> {totalPrice} $

    </div>
        </div>
    );
};
export default Card;
