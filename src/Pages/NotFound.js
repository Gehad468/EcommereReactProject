import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="py-5">
            <h1 className="text-danger text-center">404 - Page not found</h1>
            <div className="text-center">
                <p>We could not find what you were looking for.
Please contact the owner of the site that linked you to the original URL and let them know their link is broken.</p>
                <Link to="/login" className="btn btn-primary mx-2">Login</Link>
                <Link to="/signup" className="btn btn-secondary mx-2">Sign Up</Link>
            </div>
        </div>
    );
}

export default NotFound;
