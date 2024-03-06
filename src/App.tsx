import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import BookList from './components/BookList';
import AddBookModal from './components/AddBookModal';
import './styles/index.css';

const store = createStore(rootReducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Bookstore</h1>
        <AddBookModal />
        <BookList />
      </div>
    </Provider>
  );
}

export default App;
