import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import products from './data/products.js';
import { GiAnt } from "react-icons/gi";

import Nav from './components/Nav.js';
import HomePage from './pages/HomePage.js';
import GalleryPage from './pages/GalleryPage.js';
import StaffPage from './pages/StaffPage.js';
import OrderPage from './pages/OrderPage.js';
import DeckPage from './pages/DeckPage.js';
import CreatePage from './pages/CreatePage.js';
import EditPage from './pages/EditPage.js';
import TopicsPage from "./pages/TopicsPage.js";


import './App.css';

function App() {
  
  const [deck, setDeck] = useState([])

  return (
    <>
      <BrowserRouter>
      
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1><GiAnt/> Andrew Garcia </h1>
        </header>

        <Nav />

        <main>
          <section className="Article-App.js">

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/topics" element={<TopicsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/order" element={<OrderPage products={products}/>} />
              <Route path="/staff" element={<StaffPage />} />
              <Route path="/log" element={<DeckPage setDeck={setDeck} />} />
              <Route path="/addDeck" element={<CreatePage/>} />
              <Route path="/editDeck" element = {<EditPage deck={deck} />} />
            </Routes>

          </section>
        </main>

        <footer>
          <p>&copy; 2023 Andrew Garcia</p>
        </footer>

      </BrowserRouter>
    </>
  );
}

export default App;
