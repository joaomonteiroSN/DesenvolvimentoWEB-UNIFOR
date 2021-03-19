import React from 'react';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Ajuda from './components/Ajuda';

import './styles/global.css';

import { 
    Route, BrowserRouter as Router, 
    Switch 
} from 'react-router-dom';

function App() {
    return (
        <Router>
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/Ajuda">
                    <Ajuda />
                </Route>
            </Switch>
            <Footer />
        </div>
        </Router>
    );
}

export default App;