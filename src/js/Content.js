import React from 'react';
import $ from 'jquery';
import Icon from './NotFound';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from 'react-router-dom';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faTh,faBars,faInfo } from '@fortawesome/free-solid-svg-icons'
import Header from './Header';
import SocialComponent from './SocialApp';
import DevComponent from './DevApp';
import DesignComponent from './DesignApp';
import ColorComponent from './ColorApp';
import FontComponent from './FontApp';
import IconComponent from './IconApp';
import InsComponent from './Inspiration';
import IllComponent from './Illustration';
import ImageComponent from './ImageApp';
import GameComponent from './GameApp';
import InfoComponent from './Info';


const MenuSection=props=>{

    const showMenu = () =>{
        $('#menuDiv').toggleClass('menuShowing');
    }

    return(
        <Router id="dataPage">
            <Header/>
            <div id="menuBar" className="d-flex  justify-content-between align-items-center margin-div">
                <span id="menuBtn" onClick={showMenu}>
                    <FontAwesomeIcon icon={faBars}/>
                </span>

                <span id="infoBtn">
                    <Link to="/content/info">
                        <FontAwesomeIcon icon={faInfo}/>
                    </Link>
                </span>
            </div>
            <div id="menuDiv"  className="text-center">
                <ul id="menuLinks" className="menu-links list-unstyled d-flex menu-active flex-wrap">
                    <li onClick={showMenu}><Link to="/content/allApp"><FontAwesomeIcon icon={faTh}/></Link></li>
                    <li onClick={showMenu}><Link to="/content/devApp">#Guide</Link></li>
                    <li onClick={showMenu}><Link to="/content/designApp">#Design</Link></li>
                    <li onClick={showMenu}><Link to="/content/colorApp">#Color</Link></li>
                    <li onClick={showMenu}><Link to="/content/fontApp">#Fonts</Link></li>
                    <li onClick={showMenu}><Link to="/content/iconApp">#Icons</Link></li>
                    <li onClick={showMenu}><Link to="/content/insApp">#Inspirations</Link></li>
                    <li onClick={showMenu}><Link to="/content/illApp">#Illustrations</Link></li>
                    <li onClick={showMenu}><Link to="/content/imgApp">#Images</Link></li>
                    <li onClick={showMenu}><Link to="/content/gameApp">#Games</Link></li>
                    <li onClick={showMenu}><Link to="/content/socialApp">#Social</Link></li>
                </ul>
            </div>
            <section id="dataSectionMenu" className="container data-section">
                {/* <div className="card-columns"> */}
                    <Switch>
                        <Route path="/content/allApp">
                            <div className="card-columns">
                                <DevComponent/>
                                <DesignComponent/>
                                <ColorComponent/>
                                <FontComponent/>
                                <IconComponent/>
                                <InsComponent/>
                                <IllComponent/>
                                <ImageComponent/>
                                <GameComponent/>
                                <SocialComponent/>
                            </div>
                        </Route>
                        <Route path="/content/socialApp">
                            <div className="card-columns">
                                <SocialComponent/>
                            </div>
                        </Route> 
                        <Route path="/content/devApp">
                            <div className="card-columns">
                                <DevComponent/>
                            </div>
                        </Route> 
                        <Route path="/content/designApp">
                            <div className="card-columns">
                                <DesignComponent/>
                            </div>
                        </Route> 
                        <Route path="/content/colorApp">
                            <div className="card-columns">
                                <ColorComponent/>
                            </div>
                        </Route> 
                        <Route path="/content/fontApp">
                            <div className="card-columns">
                                <FontComponent/>
                            </div>
                        </Route> 
                        <Route path="/content/iconApp">
                            <div className="card-columns">
                                <IconComponent/>
                            </div>
                        </Route> 
                        <Route path="/content/insApp">
                            <div className="card-columns">
                                <InsComponent/>
                            </div>
                        </Route>
                        <Route path="/content/illApp">
                            <div className="card-columns">
                                <IllComponent/>
                            </div>
                        </Route>
                        <Route path="/content/imgApp">
                            <div className="card-columns">
                                <ImageComponent/>
                            </div>
                        </Route>
                        <Route path="/content/gameApp">
                            <div className="card-columns">
                                <GameComponent/>
                            </div>
                        </Route>
                        <Route path="/content/info"><InfoComponent/></Route>
                    </Switch>
                {/* </div> */}
            </section>
            <section id="noFoundData" className="d-none">
                <h1 className="my-primary-color">Item Not Found!</h1>
                <Icon className="icon-404" />
            </section>
            <footer id="footerContent" className="sub-footer text-center">
            <div>
                <p className="font-weight-bold my-secondary-font mb-0">Developed by <a href="https://te-nyain-moe-lwin.vercel.app/" target="_blank">👨‍💻TeNyain</a> 2020 November</p>
                <p className="font-weight-bold my-secondary-font">Detailed Source is <a href="https://github.com/bradtraversy/design-resources-for-developers" target="_blank">Here</a>.</p>
            </div>
            </footer>
        </Router>
    )
}

export default MenuSection;