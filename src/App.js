import './styles/App.css';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import HomePage from './components/HomePage';

function App() {

  const [query, setQuery] = useState('');

  const handleSearch = (searchQuery) => {
      setQuery(searchQuery);
  };

  return (
    <div className="App">
            <h1>Book Reading App</h1>
            <SearchBar onSearch={handleSearch} />
            {query ? <BookList query={query} /> : <HomePage/> }
    </div>
  );
}

export default App;
