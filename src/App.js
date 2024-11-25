import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Portfolio from './pages/Portfolio'
import Workflow from './pages/Workflow'


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/workflow" element={<Workflow />} />
      </Routes>
      <Footer></Footer>
    </>

  );
}

export default App;
