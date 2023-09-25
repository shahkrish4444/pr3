import React from 'react';
import KrishHeader from './krish/Components/KrishHeader';
import SectionOne from './krish/Components/SectionOne';
import './krish/Components/style.css'
import TitleOne from './krish/Components/TitleOne';
import Card from './krish/Components/Card';
import Features from './krish/Components/Features';
import Popular from './krish/Components/Popular';
import Trainer from './krish/Components/Trainer';
import Footer from './krish/Components/Footer';
function App() {
  return (
    <>

      <KrishHeader />
      <SectionOne />
      <TitleOne />
      < Card />
      <Features />
      <Popular />
      <Trainer />
      <Footer/>
    </>
  );
}

export default App;
