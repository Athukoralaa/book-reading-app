import React, { useState, useEffect } from 'react';
import '../styles/BookList.css';

const BookList = ({ query }) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // &langRestrict=en&maxResults=20&orderBy=newest&filter=free-ebooks&key=${API_KEY}

    //const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;


    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(
                    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&startIndex=0&maxResults=40`
                );
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBooks(data.items || []);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (query.trim() !== '') {
            fetchBooks();
        } else {
            setBooks([]);
            setLoading(false);
        }
    }, [query]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="book-list">
            {books.length > 0 ? (
                books.map((book) => (
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={book.volumeInfo.previewLink}
                        key={book.id}
                        className="book-item"
                    >
                        <img
                            src={book.volumeInfo.imageLinks?.thumbnail}
                            alt={book.volumeInfo.title}
                        />
                        <h3>{book.volumeInfo.title}</h3>
                        <p>{book.volumeInfo.authors?.join(', ')}</p>
                        <p>{book.volumeInfo.publishedDate}</p>
                        <p className="description">{book.volumeInfo.description}</p>
                    </a>
                ))
            ) : (
                <p>No books found for "{query}".</p>
            )}
        </div>
    );
};

export default BookList;
