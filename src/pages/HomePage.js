import React from 'react';
import { Link } from "react-router-dom";
import Header from '../components/layout/Header';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';

const HomePage = (props) => {
    return (
        <div>
            <Header />
            <Nav />
            <Footer />
        </div>    
    
    );
};
export default HomePage;