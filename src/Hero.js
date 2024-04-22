import React from 'react';

function Hero() {
    return (
        <section className="hero">
            <h1>Welcome to Sans Clothing</h1>
            <p>Transforming Online Fashion with Personalization and Precision.</p>
            {/* Link that opens the user's email client to send an email */}
            <a href="mailto:edward@sansclo.com" className="cta-button">Contact Us</a>
        </section>
    );
}

export default Hero;
