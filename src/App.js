import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import TopRatedMovies from './components/TopRatedMovies/TopRatedMovies';
import TopRatedSeries from './components/TopRatedSeries/TopRatedSeries';
import Collection from './components/Collection/Collection';
import Trending from './components/Trending/Trending';
import Genres from './components/Genres/Genres';
import Header from './components/Header';
import Footer from './components/Footer';
import Movie from './components/Movie/Movie';
import Discover from './components/Discover/Discover';
import Tv from './components/Tv/Tv';
import Season from './components/Season/Season';
import Episode from './components/Episode/Episode';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="top-rated-movies" element={<TopRatedMovies />} />
        <Route path="top-rated-series" element={<TopRatedSeries />} />
        <Route path="collection/:id" element={<Collection />} />
        <Route path="trending" element={<Trending />} />
        <Route path="genres" element={<Genres />} />
        <Route path="discover" element={<Discover />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="tv/:id" element={<Tv />} />
        <Route path="tv/:id/season/:se" element={<Season />} />
        <Route path="tv/:id/season/:se/episode/:nu" element={<Episode />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
