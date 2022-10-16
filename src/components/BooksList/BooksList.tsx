import { FC } from 'react';
import { Book } from './../../interfaces/Book.interface';
import BookItem from '../BookItem/BookItem';
import './BooksList.css';
import React from 'react';

type Props = {
  books: Book[];
  removeBook: (book: Book) => void
}

const BooksList: FC<Props> = ({ books, removeBook }) => {
  return (
    <ul className="books-list">
      {books.map((book: Book) => <BookItem key={book.id} book={book} removeBook={removeBook} />)}
  </ul>
  );
};

export default BooksList;