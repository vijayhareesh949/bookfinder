import { useState } from 'react';
import axios from 'axios';
import SearchBar from './Searchlist';
import BookList from './Booklists';
import BookDetail from './BookDetails';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedBook, setSelectedBook] = useState(null);

  const searchBooks = async (query, newSearch = true) => {
    setLoading(true);
    setError(null);
    try {
      const startIndex = newSearch ? 0 : (page - 1) * 10;
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10&startIndex=${startIndex}`
      );
      setBooks(newSearch ? response.data.items : [...books, ...response.data.items]);
    } catch (err) {
      setError("Failed to fetch books. Please try again.");
      console.error("Error fetching books:", err);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setPage(page + 1);
    searchBooks(document.querySelector('input').value, false);
  };

  return (
    <div className="App">
      <h1>Book Finder</h1>
      <SearchBar onSearch={(query) => {
        setPage(1);
        searchBooks(query);
      }} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <BookList books={books} onBookSelect={setSelectedBook} />
      {selectedBook && <BookDetail book={selectedBook} onClose={() => setSelectedBook(null)} />}
     {books.length > 0 && !loading && (
  <button onClick={loadMore} className="load-more">Load More</button>
)}

    </div>
  );
}

export default App;
