import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/HomePage/Home'
import Services from './components/pages/Services/Services'
import Products from './components/pages/Products/Products'
import SignUp from './components/pages/SignUp/SignUp'
import Footer from './components/pages/Footer/Footer';
import Proverbs from './components/pages/Proverbs/Proverbs';
import Quotes from './components/pages/Quotes/Quotes';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/services'  component={Services}/>
      <Route path='/products'  component={Products}/>
      <Route path='/sign-up'  component={SignUp}/>
      <Route path='/proverbs'  component={Proverbs}/>
      <Route path='/quotes'  component={Quotes}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
