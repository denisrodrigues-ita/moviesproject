import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import TopRated from './components/TopRated/TopRated';
import Collection from './components/Collection/Collection';
import Trending from './components/Trending/Trending';
import Genres from './components/Genres/Genres';
import Header from './components/Header';
import Footer from './components/Footer';
import Movie from './components/Movie/Movie';
import './App.css';
import Discover from './components/Discover/Discover';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="top-rated" element={<TopRated />} />
        <Route path="collection/:id" element={<Collection />} />
        <Route path="trending" element={<Trending />} />
        <Route path="genres" element={<Genres />} />
        <Route path="discover" element={<Discover />} />
        <Route path="movie/:id" element={<Movie />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
