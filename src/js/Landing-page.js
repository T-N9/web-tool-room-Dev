import React from 'react';
import ParticlesBg from './ParticleBg';
import {
    Link,
} from 'react-router-dom';
import Footer from './Footer';

const LandingPage=props=>{
    return(
        <>
        <section id="landingSection" className="d-block container-fluid landing-section">
        <ParticlesBg></ParticlesBg>
            <div className="container landing-page">
                <div className="row w-100" /*style={{marginTop:-190}}*/>
                <div className="col-12 col-lg-6">
                    <div className="landing-page--left">
                    <img className="w-100" src="landing.svg" alt="landing-img"/>
                    </div>
                </div>
                <div className="col-12 col-lg-6 p-0" style={{display:'flex', alignItems:'center'}}>
                    <div className="landing-page--right my-primary-font">
                    <h1>WEB's tools room</h1>
                    <p className="my-secondary-font landing-quote">
                        A collection of websites that may be useful <br className="d-mobile-none"/>for web developers and web designers.
                    </p>
                    <Link to="/content/allApp">
                        <div className="landing-btn">
                        Explore
                        </div>
                    </Link>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default LandingPage;