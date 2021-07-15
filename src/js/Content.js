import React from 'react';
import Icon from './NotFound';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from 'react-router-dom';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faTh,faBars } from '@fortawesome/free-solid-svg-icons'
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


const MenuSection=props=>{

    // const menuToggle=()=>{
    //     const menuDiv=document.getElementById('menuDiv');
    //     const menu=document.getElementById('menuLinks');
    //     menu.classList.toggle('menu-none');
    //     menu.classList.toggle('menu-active');
    //     menuDiv.classList.toggle('margin-div');
    //     console.log('clicked');
    // }

    return(
        <Router id="dataPage">
            <Header/>
            <div id="menuDiv"  className="position-relative margin-div text-center">
                <ul id="menuLinks" className="menu-links list-unstyled d-flex menu-active flex-wrap">
                    <li><Link to="/content/allApp"><FontAwesomeIcon icon={faTh}/></Link></li>
                    <li><Link to="/content/devApp">#Guide</Link></li>
                    <li><Link to="/content/designApp">#Design</Link></li>
                    <li><Link to="/content/colorApp">#Color</Link></li>
                    <li><Link to="/content/fontApp">#Fonts</Link></li>
                    <li><Link to="/content/iconApp">#Icons</Link></li>
                    <li><Link to="/content/insApp">#Inspirations</Link></li>
                    <li><Link to="/content/illApp">#Illustrations</Link></li>
                    <li><Link to="/content/imgApp">#Images</Link></li>
                    <li><Link to="/content/gameApp">#Games</Link></li>
                    <li><Link to="/content/socialApp">#Social</Link></li>
                </ul>
                {/* <div onClick={menuToggle} style={{color:'white', display: 'inline', fontSize: 25, cursor: 'pointer'}} >
                    <FontAwesomeIcon icon={faBars}/>
                </div> */}
            </div>
            <section id="dataSectionMenu" className="container data-section">
                <div className="card-columns">
                    <Switch>
                        <Route path="/content/allApp">
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
                        </Route>
                        <Route path="/content/socialApp"><SocialComponent/></Route> 
                        <Route path="/content/devApp"><DevComponent/></Route> 
                        <Route path="/content/designApp"><DesignComponent/></Route> 
                        <Route path="/content/colorApp"><ColorComponent/></Route> 
                        <Route path="/content/fontApp"><FontComponent/></Route> 
                        <Route path="/content/iconApp"><IconComponent/></Route> 
                        <Route path="/content/insApp"><InsComponent/></Route>
                        <Route path="/content/illApp"><IllComponent/></Route>
                        <Route path="/content/imgApp"><ImageComponent/></Route>
                        <Route path="/content/gameApp"><GameComponent/></Route>
                    </Switch>
                </div>
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