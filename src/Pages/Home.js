import React from 'react'
import logo from '../logo.svg';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Styles/App.css';
import '../Styles/home.css';

function Home(props) {
    return (
        <div className="App-header">
            <Header />
            <Footer />
        </div>
    )
}

export default Home
