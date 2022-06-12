import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import FabricaPage from './pages/FabricaPage';
import InicioPage from './pages/InicioPage';

import 





function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<InicioPage />} />
          <Route path='Nuestra Fábrica' element={<FabricaPage />} />
        </Routes>
      
      </BrowserRouter>
     
      <Footer />
    </div>
  );
}

export default App;
