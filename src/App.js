import React, {Component, Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Home from './components/Home';
import Homepage from './components/Homepage';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Product from './components/Product';
import Contacts from './components/Contacts';

const Loader = () => (
<div className="loader">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
);

class App extends Component {
  render() {

  return (
  <Suspense fallback={<Loader />}>
    <Router>
      <React.Fragment>
          <Route path="/" render={props => ( props.location.pathname !== "/") && <Header /> }/>
          <main className="main">
            <Switch>
              <Route exact path="/" render={props => <Home />}/>
              <Route path="/main" component={Homepage}/>
              <Route path="/about" component={About}/>
              <Route path="/product" component={Product}/>
              <Route path="/contacts" component={Contacts}/>
            </Switch>
          </main>
          <Route path="/" render={props => ( props.location.pathname !== "/") && <Footer /> }/>
      </React.Fragment>
    </Router>
  </Suspense>
  );
}
}

export default App;