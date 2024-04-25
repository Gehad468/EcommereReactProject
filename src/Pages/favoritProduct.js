import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorites } from '../store/action/favAction';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const FavoriteProducts = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites.favorites);

    const handleRemoveFromFavorites = (productId) => {
        dispatch(removeFromFavorites(productId));
    };

    return (
        <div className="container py-5 mb-5">
            <h1 className="text-center py-5 " style={{ color: '#A27BAD' }}>Favorite Products</h1>
            <div>
                <div className="row text-center">
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {favorites.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td><Image src={product.images[0]} alt={product.title} style={{ width: "150px", height: "100px" }} /></td>
                                    <td>
                                        <Button onClick={() => handleRemoveFromFavorites(product.id)} variant='dark'>Remove</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default FavoriteProducts;
