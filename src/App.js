import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import TopRatedMovies from './Pages/TopRatedMovies/TopRatedMovies';
import TopRatedSeries from './Pages/TopRatedSeries/TopRatedSeries';
import Collection from './Pages/Collection/Collection';
import Trending from './Pages/Trending/Trending';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import Movie from './Pages/Movie/Movie';
import Discover from './Pages/Discover/Discover';
import Tv from './Pages/Tv/Tv';
import Season from './Pages/Season/Season';
import Episode from './Pages/Episode/Episode';
import Person from './Pages/Person/Person';
import Search from './Pages/Search/Search';
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
        <Route path="discover" element={<Discover />} />
        <Route path="search" element={<Search />} />
        <Route path="person/:id" element={<Person />} />
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
