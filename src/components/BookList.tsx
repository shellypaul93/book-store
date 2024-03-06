import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { deleteBook } from '../actions';
import { Book } from '../types';
import styles from '../styles/BookList.module.css';

const BookList: React.FC = () => {
  const books: Book[] = useSelector((state: RootState) => state.bookstore.books);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className={styles['book-list']}>
      {books?.length > 0 ? books.map((book: Book) => (
        <div key={book.id} className={styles.book}>
          <p><b>Name:</b> {book.name}</p>
          <p><b>Price:</b> {book.price}</p>
          <p><b>Category:</b>  {book.category}</p>
          <button onClick={() => handleDelete(book.id)}>Delete</button>
        </div>
      )) : <p>No books found!</p>}
    </div>
  );
};

export default BookList;
