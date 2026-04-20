import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Products from '../components/Products';
import About from '../components/About';
import Technologies from '../components/Technologies';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Products />
      <About />
      <Technologies />
      <Testimonials />
      <Contact />
    </>
  );
}
