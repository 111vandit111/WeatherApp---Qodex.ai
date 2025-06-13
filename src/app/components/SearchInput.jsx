import { Search } from 'lucide-react';
import { useState } from 'react'
import { SAVED_CITIES_KEY } from '../../constants';

const SearchInput = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem(SAVED_CITIES_KEY) || '');

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
      setSearchTerm('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-wrapper">
      <div className="search">
        <Search className="icon sm search-lens" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Enter city name..."
          className="input search-input"
        />
      </div>
        <button
          onClick={handleSearch}
          className="btn search-btn"
        >
          <Search className="icon xs" />
        </button>
    </div>
  );
};

export default SearchInput