import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from "./components/BackToTop";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Services />
      <About />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
