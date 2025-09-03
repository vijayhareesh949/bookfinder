function Book({ book, onSelect }) {
  return (
    <div className="book" onClick={() => onSelect(book)}>
      <img
        src={book.volumeInfo.imageLinks?.thumbnail}
        alt={book.volumeInfo.title}
      />
      <h3>{book.volumeInfo.title}</h3>
      <p>{book.volumeInfo.authors?.join(', ') || 'Unknown Author'}</p>
      <p>{book.volumeInfo.publishedDate || 'Unknown Date'}</p>
    </div>
  );
}

export default Book;
