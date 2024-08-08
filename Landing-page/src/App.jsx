import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import WorkFlow from './components/WorkFlow';
import Price from './components/Price';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <FeatureSection />
        <WorkFlow />
        <Price />
        <Testimonials />
        <Footer />
      </div>
    </div>
    
  )
}

export default App