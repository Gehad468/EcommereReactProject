import React from 'react';
import bigImage from '../website.png'

function Home() {
    return (
        <div style={{ height: '100vh', display: 'flex',marginTop:'40px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to right, #eeeee4, #eae4ee)', color: 'white' }} >
            <h1  className="text-center" style={{ color: '#A27bad' }} >Welcome to My Website</h1>
            <div className="container" style={{ marginTop: '20px', textAlign: 'center' }}>
                <img src={bigImage} alt="Logo" style={{ maxWidth: '100%', maxHeight: '300px' }} />
                <p style={{ color: '#A27bad' }} >
                    This website has a lot of perfect products that you will love. Browse through our collection and find what you need.
                </p>
            </div>
        </div>
    );
}

export default Home;
