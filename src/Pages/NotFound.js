import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="py-5">
            <h1 className="text-danger text-center py-5">404 - Page not found</h1>
            <div className="text-center">
                <p>  Oops! The page you're looking for is not here..</p>
                {/* <Link to="/login" className="btn btn-primary mx-2">Login</Link> */}
                <Link to="/products" className="btn btn-danger mx-2">go back</Link>
            </div>
        </div>
    );
}

export default NotFound;
