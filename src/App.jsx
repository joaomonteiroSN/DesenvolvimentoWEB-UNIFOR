import React from 'react';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Ajuda from './components/Ajuda';

import './styles/global.css';

function App() {
    return (
        <div>
            <Header />
            <Home />
            <Footer />
        </div>
    );
}

export default App;