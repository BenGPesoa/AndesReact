import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Banner from './components/layout/Banner';
import Marquee from './components/layout/Marquee';

import HomePage from './pages/HomePage';
import InicioPage from './pages/InicioPage';
import FabricaPage from './pages/FabricaPage';
import ProductosPage from './pages/ProductosPage';
import GaleriaPage from './pages/GaleriaPage';
import EfemeridesPage from './pages/EfemeridesPage';
import ContactoPage from './pages/ContactoPage';


function App() {
  return (
    <div className="App">
      <Marquee />
      <Header />

      <BrowserRouter>
        <Nav />
        <Banner />
          <Routes>
            <Route path='/' element={<InicioPage/>} />
            <Route path='productos' element={<ProductosPage/>} />
            <Route path='fabrica' element={<FabricaPage/>} />
            <Route path='efemerides' element={<EfemeridesPage/>} />
            <Route path='galeria' element={<GaleriaPage/>} />
            <Route path='contacto' element={<ContactoPage/>} />
          </Routes>
      </BrowserRouter>
      
     
      <Footer />
    </div>
  );
}

export default App;
