import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Pagination, InputGroup, FormControl } from 'react-bootstrap';

import axios from 'axios';
import { addToCart } from '../store/action/actions';
import { addToFavorites, removeFromFavorites } from '../store/action/favAction';

function Products() {
    const dispatch = useDispatch();
    const history = useHistory();
    const favorites = useSelector(state => state.favorites.favorites) || [];

    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);
    const [searchQuery, setSearchQuery] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    useEffect(() => {
        axios.get(`https://dummyjson.com/product`)
            .then((res) => {
                setProducts(res.data.products);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (minPrice === '' || parseFloat(product.price) >= parseFloat(minPrice)) &&
        (maxPrice === '' || parseFloat(product.price) <= parseFloat(maxPrice))
    );

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handleProductClick = (productId) => {
        history.push(`/ProductDetails/${productId}`);
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const handleMinPriceChange = (e) => {
        setMinPrice(e.target.value);
        setCurrentPage(1);
    };

    const handleMaxPriceChange = (e) => {
        setMaxPrice(e.target.value);
        setCurrentPage(1);
    };

    const handleAddToCart = (product) => {
        const storedUserData = JSON.parse(localStorage.getItem('userData'));
        if (storedUserData) {
            dispatch(addToCart(product));
        } else {
            console.log("User not logged in. Redirecting to login page.");
            history.push('/login');
        }
    };

    const toggleFavorite = (product) => {
        const isFavorite = favorites.some(item => item.id === product.id);
        if (isFavorite) {
            dispatch(removeFromFavorites(product.id));
        } else {
            dispatch(addToFavorites(product));
        }
    };

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container py-5">
            <div className="row mb-4 py-5">
                <InputGroup className="col-md-6 mb-3">
                    <FormControl
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleInputChange}
                    />
                </InputGroup>
                <InputGroup className="col-md-3 mb-3">
                    <FormControl
                        placeholder="Min Price"
                        type="number"
                        value={minPrice}
                        onChange={handleMinPriceChange}
                    />
                </InputGroup>
                <InputGroup className="col">
                    <FormControl
                        placeholder="Max Price"
                        type="number"
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                    />
                </InputGroup>
            </div>
            <div className="row row-cols-1 row-cols-md-5 g-4">
                {currentProducts.map((product) => (
                    <div className="col mb-4" key={product.id}>
                        <div className="card h-100">
                            <img onClick={() => handleProductClick(product.id)} style={{maxHeight:'12rem',minHeight:'8rem'}} src={product.images[0]} className="card-img-top" alt={product.title} />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <h6 className="card-title">{product.title}</h6>
                                <div>
                                    <p className="card-text">Rating: {product.rating}</p>
                                    <p className="card-text">Price: {product.price}</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span onClick={() => toggleFavorite(product)}>
                                        {favorites.some(item => item.id === product.id) ? <FaHeart color="#A27BAD" /> : <FaRegHeart color="#A27BAD" />}
                                    </span>
                                    <button onClick={() => handleAddToCart(product)} style={{background:'#A27BAD', color:'white'}} className="btn ">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination className="mt-4">
                <Pagination.First onClick={() => goToPage(1)} disabled={currentPage === 1} />
                <Pagination.Prev onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} />
                <Pagination.Item active>{currentPage}</Pagination.Item>
                <Pagination.Next onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} />
                <Pagination.Last onClick={() => goToPage(totalPages)} disabled={currentPage === totalPages} />
            </Pagination>
        </div>
    );
}

export default Products;
