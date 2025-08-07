import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CloudPolicy from './components/CloudPolicy';
import Trainer from './components/Trainer';
import Curriculum from './components/Curriculum';
import CTA from './components/CTA';
import Footer from './components/Footer';
import RegistrationForm from './components/RegistrationForm';
import { RegistrationProvider, useRegistration } from './contexts/RegistrationContext';

const AppContent: React.FC = () => {
  const { isRegistrationOpen, closeRegistration } = useRegistration();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Curriculum />
      <Trainer />
      <About />
      <CloudPolicy />
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
      <RegistrationForm isOpen={isRegistrationOpen} onClose={closeRegistration} />
    </div>
  );
};

function App() {
  return (
    <RegistrationProvider>
      <AppContent />
    </RegistrationProvider>
  );
}

export default App;