import React from 'react';
import { FC } from 'react';
import { Book } from './../../interfaces/Book.interface';
import './BookItem.css';

type Props = {
  book: Book;
  removeBook: (book: Book) => void;
}

const BookItem: FC<Props> = ({ book, removeBook }) => {
  return (<li className="book-item">{book.title} by {book.author}, ${book.price}<button type="button" onClick={() => removeBook(book)} className="button">Delate</button></li>);
};

export default BookItem;