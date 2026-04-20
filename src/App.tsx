import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Products from './components/Products';
import About from './components/About';
import Technologies from './components/Technologies';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f0a]">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Products />
      <About />
      <Technologies />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
