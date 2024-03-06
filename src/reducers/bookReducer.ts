import { generateId } from '../utils';
import { ADD_BOOK, BookActionTypes, BookState, DELETE_BOOK } from '../types';

const initialState: BookState = {
  books: [
    {
      id: generateId(),
      name: 'React fundamentals',
      price: '52 CAD',
      category: 'Frontend development',
    },
    {
      id: generateId(),
      name: 'Next.js fundamentals',
      price: '80 CAD',
      category: 'Frontend development',
    },
    {
      id: generateId(),
      name: 'Advanced Java',
      price: '40 CAD',
      category: 'Backend development',
    },
  ],
};

const bookReducer = (
  state = initialState,
  action: BookActionTypes,
): BookState => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        books: [...state.books, action.payload],
      };
    case DELETE_BOOK:
      return {
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};

export default bookReducer;
