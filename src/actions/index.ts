import { ADD_BOOK, Book, BookActionTypes, DELETE_BOOK } from "../types";

export const addBook = (book: Book): BookActionTypes => ({
  type: ADD_BOOK,
  payload: book,
});

export const deleteBook = (id: number): BookActionTypes => ({
  type: DELETE_BOOK,
  payload: id,
});
