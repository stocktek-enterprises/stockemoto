import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Inventory from './components/Inventory';
import Services from './components/Services';
import Info from './components/Info';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';

// Simple Page Wrapper components for route isolation
const Home = () => (
  <>
    <Hero />
    <Inventory />
    <Services />
    <ContactForm />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-brand-darker text-slate-100 flex flex-col font-sans selection:bg-brand-neon selection:text-brand-darker">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/services" element={<Services />} />
            <Route path="/info" element={<Info />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>
        
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
};

export default App;
