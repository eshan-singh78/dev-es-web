import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/pages/navbar'; 
import Home from './components/pages/home';
import AboutMe from './components/pages/aboutme';
import Project from './components/pages/project';
import Contactus from './components/pages/connectus';
import DevLive from './components/pages/livedev';

function App() {
    return (
        <div className="app">

            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/projects" element={<Project />} />
                    <Route path="/contact" element={<Contactus />} />
                    <Route path="/live" element={<DevLive />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
