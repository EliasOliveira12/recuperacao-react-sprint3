import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CadastroBolo from './pages/CadastroBolo';
import ListaBolo from './pages/ListaBolo';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    { /* rotas */}

    {/* componentes */}

    <BrowserRouter>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='CadastroBolo' element={<CadastroBolo />} />
        <Route path='Listabolo' element={<ListaBolo />} />

      </Routes>

      <Footer /> {/*3*/}
    </BrowserRouter>

  </React.StrictMode>,
)
