// Header.jsx
import { useRef } from 'react';
import { useDetectMobile } from '../hooks/useDetectMobile';

export function Header({ onSearch, onViewFavs, showFavorites, onViewSorted, showSorted }) {
  const inputRef = useRef();
  const debounceTimeout = useRef(null);
  const isMobile = useDetectMobile()


  const handleWrite = () => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      const newQuery = inputRef.current.value;
      if (!newQuery) return;

      onSearch(newQuery);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuery = inputRef.current.value;
    if (newQuery) {
      onSearch(newQuery);
    }
  };

  const handleSortChange = (e) => {
    onViewSorted(e.target.value);
  };

  return (
    <header>
      <h1>MOVIE SEARCHER</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="avengers, transformers, matrix..."
          onChange={handleWrite}
        />

{/* This button will not be displayed on mobile. I made this decision because, on mobile, you will need the keyboard to be open in order to type, which means you can press the send button on the keyboard. Also, it looks better without this button. */}
        <button style={{
          display: isMobile ? 'none' : 'block'
        }} type="submit">search</button>


        <button onClick={onViewFavs} className="favorites">
          {showFavorites ? 'Show movies' : 'Show favorites'}
        </button>

        <select value={showSorted} onChange={handleSortChange}>
          <option value="noSort">No Sort</option>
          <option value="sortByTitle">Sort by Title</option>
          <option value="sortByYear">Sort by Year</option>
        </select>
      </form>
    </header>
  );
}
