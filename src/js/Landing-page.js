import React from 'react';
import ParticlesBg from './ParticleBg';
import {
    Link,
} from 'react-router-dom';
// import Footer from './Footer';

const LandingPage=props=>{
    return(
        <>
        <section id="landingSection" className="d-block container-fluid landing-section">
        <ParticlesBg></ParticlesBg>
            <div className="container landing-page">
                <div className="row w-100" /*style={{marginTop:-190}}*/>
                <div className="col-12 col-lg-6">
                    <div className="landing-page--left">
                    <img src="landing.svg" alt="landing-img"/>
                    </div>
                </div>
                <div className="col-12 col-lg-6 p-0 md-jc" style={{display:'flex', alignItems:'center'}}>
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
                <footer id="footerContent" className="text-center">
                <div>
                    <p className="font-weight-bold my-secondary-font mb-0">Developed by <a href="https://te-nyain-moe-lwin.vercel.app/" target="_blank">👨‍💻TeNyain</a> 2020 November</p>
                    <p className="font-weight-bold my-secondary-font">Detailed Source is <a href="https://github.com/bradtraversy/design-resources-for-developers" target="_blank">Here</a>.</p>
                </div>
            </footer>
            </div>
            
        </section>
        {/* <Footer/> */}
        
        </>
    )
}

export default LandingPage;