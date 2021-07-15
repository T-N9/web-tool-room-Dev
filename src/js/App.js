import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import LandingPage from './Landing-page';
import MenuSection from './Content';
const App=props=>{
  return(
    <section id="mainContent" className="container-fluid main-content">
      <Router>
        <Switch>
          <Route path="/" exact><LandingPage/></Route>
          <Route path="/content"><MenuSection/></Route>
        </Switch>
      </Router>
    </section>
  )
}
export default App;