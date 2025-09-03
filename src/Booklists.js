import Book from './Book';

function BookList({ books, onBookSelect }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <Book key={book.id} book={book} onSelect={onBookSelect} />
      ))}
    </div>
  );
}

export default BookList;

