import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Challenges from './components/Challenges';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Process from './components/Process';
import Stats from './components/Stats';
import Clients from './components/Clients';
import Testimonial from './components/Testimonial';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import { observeElements, initParallax } from './utils/animations';

function App() {
  useEffect(() => {
    observeElements();
    initParallax();
  }, []);

  return (
    <div className="App">
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <Hero />
      <Challenges />
      <Services />
      <Expertise />
      <Process />
      <Stats />
      <Clients />
      <Testimonial />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

