import React from "react";
import styled from 'styled-components';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
// import './App.css';

const AppWrapper = styled.div`
    background-color: #ffffff;
`;

function App() {
    return (
        <AppWrapper>
            <Header />
            <Home />
            <About />
            <Projects />
            <Resume />
            <Contact />
            <Footer />
        </AppWrapper>
    );
}

export default App;
