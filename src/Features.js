import React from 'react';
import PictureOne from './Picture1.png';
import PictureTwo from './Picture2.png';
import PictureThree from './Picture3.png';
import './Features.css'; // Ensure you import the CSS file

function Features() {
    return (
        <div id="features">
            <h2>Our Innovations</h2>
            <div className="feature-descriptions">
                <p><strong>Enhanced Pinterest:</strong> A platform where users can explore an unlimited array of AI-generated outfits that match their style and size preferences.</p>
                <p><strong>Virtual Fitting Room:</strong> Using advanced tech packs and 3D models, we offer precise size recommendations and a virtual try-on experience even better than the physical shopping experience.</p>
                <p><strong>Data-Driven Insights:</strong> Helping brands understand their customers better, reducing returns, and increasing satisfaction.</p>
            </div>
            <div className="images-container">
                <div className="image">
                    <h3>Enhanced Pinterest</h3>
                    <img src={PictureOne} alt="Enhanced Pinterest" />
                </div>
                <div className="image">
                    <h3>Virtual Fitting Room</h3>
                    <img src={PictureTwo} alt="Virtual Fitting Room" />
                </div>
                <div className="image">
                    <h3>Data-Driven Insights</h3>
                    <img src={PictureThree} alt="Data-Driven Insights" />
                </div>
            </div>
        </div>
    );
}

export default Features;
