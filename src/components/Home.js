import React from 'react';
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

                <div className="home__row">
                    <Product
                        id="12321341" 
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={5}
                    />
                     <Product
                        id="29538094" 
                        title="KitchenAid KSM180QHSD 100 Year Limited Edition Queen of Hearts Stand Mixer, Passion Red"
                        price={399.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81LBhCVGIPL._AC_SL1500_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                <Product
                    id="3903850" 
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    price={199.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    rating={3}
                    />
                <Product
                    id="43445930" 
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal, Fabric"
                    price={98.00}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    rating={5}
                    />
                <Product
                    id="5254354345" 
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    rating={4}
                    />
                </div>

                <div className="home__row">
                <Product
                    id="60829332" 
                    title="Samsung CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty (C49J890DKN)"
                    price={1321.55}
                    image="https://images-na.ssl-images-amazon.com/images/I/81B0xCF%2BPWL._AC_SL1500_.jpg"
                    rating={4}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
