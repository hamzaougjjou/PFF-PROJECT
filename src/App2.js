
import React from 'react';
import './App2.css';
import './assets/css/framwork.css'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import NavPages from './components/NavPages';
function App2() {
    return (


        <div className="App">

            <div className="App-header">
                <h1>My Trip App</h1>
                <Header />
            </div>
            <div className='app-container'>
                <NavPages />
            </div>
            <Footer />
        </div>
    );
}

export default App2;
