import React from 'react'
import { Footer, Header , ContactUs , Blog ,AboutFinvesta } from './containers';
import {Navbar , Brand , CTA , Feature } from './components';
import './App.css';
const App = () => {
    return (
        <div className='App'>
            <div className='gradient_bg'>
                <Navbar />
               
            </div>
            <Header />
           
        </div>
    )
}

export default App
