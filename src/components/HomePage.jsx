import React from 'react';
import '../styles/HomePage.css';

import heroBooks from '../assets/images/hero-books.png';
import featureSearch from '../assets/images/feature-search.png';
import featureFree from '../assets/images/feature-free.png';
import featureDiscover from '../assets/images/feature-discover.jpg';
import ctaImage from '../assets/images/cta-image.jpg';


const HomePage = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to the Book Reading App</h1>
                    <p>Discover, explore, and dive into the world of free eBooks with ease.</p>
                    <button className="cta-button">Start Exploring</button>
                </div>
                <div className="hero-image">
                    <img src={heroBooks} alt="Books Stack" />
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <h2>Why Choose Us?</h2>
                <div className="features-container">
                    <div className="feature-item">
                        <img src={featureSearch} alt="Search Icon" />
                        <h3>Seamless Search</h3>
                        <p>Quickly find the books you love with our intuitive search functionality.</p>
                    </div>
                    <div className="feature-item">
                        <img src={featureFree} alt="Free Icon" />
                        <h3>100% Free</h3>
                        <p>Access a vast library of free eBooks at your fingertips.</p>
                    </div>
                    <div className="feature-item">
                        <img src={featureDiscover} alt="Discover Icon" />
                        <h3>Discover New Reads</h3>
                        <p>Stay updated with the newest books and recommendations.</p>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="cta">
                <div className="cta-content">
                    <h2>Start Your Journey Today</h2>
                    <p>Embark on an adventure through words. Join us now and transform the way you read.</p>
                    <button className="cta-button">Join Now</button>
                </div>
                <img src={ctaImage} alt="Join Us" className={`cta-image`} />
            </section>
        </div>
    );
};

export default HomePage;
