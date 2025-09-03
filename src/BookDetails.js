function BookDetail({ book, onClose }) {
  return (
    <div className="book-detail">
      <div className="detail-content">
        <button onClick={onClose} className="close-button">×</button>
        <img
          src={book.volumeInfo.imageLinks?.thumbnail}
          alt={book.volumeInfo.title}
          className="detail-cover"
        />
        <div className="detail-info">
          <h2>{book.volumeInfo.title}</h2>
          <p><strong>Author(s):</strong> {book.volumeInfo.authors?.join(', ') || 'Unknown'}</p>
          <p><strong>Published Date:</strong> {book.volumeInfo.publishedDate || 'Unknown'}</p>
          <p><strong>Publisher:</strong> {book.volumeInfo.publisher || 'Unknown'}</p>
          <p><strong>Description:</strong> {book.volumeInfo.description || 'No description available.'}</p>
          <p><strong>Page Count:</strong> {book.volumeInfo.pageCount || 'Unknown'}</p>
          <p><strong>Categories:</strong> {book.volumeInfo.categories?.join(', ') || 'None'}</p>
          <a
            href={book.volumeInfo.previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="preview-link"
          >
            Preview Book
          </a>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
