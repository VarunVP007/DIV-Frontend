import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Inventory from './components/Inventory';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Inventory />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;