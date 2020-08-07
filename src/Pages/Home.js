import React from 'react'
import logo from '../logo.svg';
import '../Styles/App.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Home(props) {
    return (
        <div className="App">
            <Header />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <Footer />
        </div>
    )
}

export default Home
