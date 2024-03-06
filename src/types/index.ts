export interface Book {
    id: number;
    name: string;
    price: string;
    category: string;
  }
  
  export interface BookState {
    books: Book[];
  }
  
  export const ADD_BOOK = 'ADD_BOOK';
  export const DELETE_BOOK = 'DELETE_BOOK';
  
  interface AddBookAction {
    type: typeof ADD_BOOK;
    payload: Book;
  }
  
  interface DeleteBookAction {
    type: typeof DELETE_BOOK;
    payload: number;
  }
  
  export type BookActionTypes = AddBookAction | DeleteBookAction;
  