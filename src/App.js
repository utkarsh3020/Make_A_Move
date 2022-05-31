import './App.css';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Home from './components/Home';
import HomeCategory from './components/HomeCategory';
import Navbar from './components/Navbar';
import ProductSlider from './components/ProductSlider';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <HomeCategory />
      <ProductSlider />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
