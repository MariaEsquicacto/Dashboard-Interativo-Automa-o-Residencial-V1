import React from 'react';
import { ResidenciaProvider } from './context/ResidenciaContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Casa from './Screens/Casa';
import Cozinha from './Screens/Cozinha';
import Banheiro from './Screens/Banheiro';
import Quarto from './Screens/Quarto';
import Sala from './Screens/Sala';

function App() {
  return (
    <ResidenciaProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Casa />} />
        <Route path="/casa" element={<Casa />} />
          <Route path="/cozinha" element={<Cozinha />} />
          <Route path="/banheiro" element={<Banheiro />} />
          <Route path="/sala" element={<Sala />} />
          <Route path="/quarto" element={<Quarto />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/" element={<Dashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </ResidenciaProvider>
  );
}

export default App;
