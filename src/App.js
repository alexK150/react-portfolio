import React from 'react';
import './App.css';
import Header from './components/header/Header';
import MainInfo from './components/main-info/MainInfo';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import AdditionalInfo from './components/additional-info/AdditionalInfo';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div className="App">
            <div className="portfolioWrapper">
              <Header/>
              <MainInfo/>
              <Skills/>
              <Projects/>
              <Contacts/>
              <AdditionalInfo/>
              <Footer/>
            </div>
        </div>
    );
}

export default App;
