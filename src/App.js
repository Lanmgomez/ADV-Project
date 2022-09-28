// CSS
import './App.css';

// Hooks
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FooterDark from './components/FooterDark';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='icon-whatsapp-screen-all'>
            <a href="http://web.whatsapp.com/send?phone=5511947457110" target="_blank" rel='noreferrer'>
              <i className='bi bi-whatsapp'></i>
            </a>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
        <FooterDark />
      </BrowserRouter>
    </div>
  );
}

export default App;
