import { useState } from 'react';
import './index.css';
import { Movies } from './components/Movies';
import { Header } from './components/Header';
import Errormsg from './components/Errormsg';
import useGetMovies from './hooks/useGetMovies';
import ThemeChanger from 'simple-theme-changer';


function App() {
  const [query, setQuery] = useState('avengers');
  const [showFavorites, setShowFavorites] = useState(false);
  const [sortOption, setSortOption] = useState('noSort');
  const apiurl = 'https://www.omdbapi.com/?apikey=4287ad07&s=';
  const { movies, error } = useGetMovies({ query, url: apiurl });
  
  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  };

  const handleViewFavs = () => {
    setShowFavorites(!showFavorites);
  };

  const handleSortChange = (newSortOption) => {
    setSortOption(newSortOption);
  };

  return (
    <div className="container">
      <div className='header'>
      <Header 
        onSearch={handleSearch} 
        onViewFavs={handleViewFavs} 
        showFavorites={showFavorites} 
        onViewSorted={handleSortChange} 
        showSorted={sortOption} 
      />
      <ThemeChanger defaultTheme='dark'/>
      
      </div>
      <Errormsg error={error} />
      <Movies movies={movies} showFavorites={showFavorites} showSorted={sortOption} />
    </div>
  );
}

export default App;
