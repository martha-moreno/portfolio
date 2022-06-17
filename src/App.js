
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className='page-container'>
    <div className='content-wrapper'> 
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
