import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../actions';
import { generateId } from '../utils';
import styles from '../styles/AddBook.module.css';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';

const AddBookModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: '',
    price: '',
    category: '',
  });
  const [domReady, setDomReady] = React.useState(false);

  React.useEffect(() => {
    setDomReady(true);
  }, []);

  React.useEffect(() => {
    if (showModal) {
      document.getElementById('root')?.classList.add('blurred');
    } else {
      document.getElementById('root')?.classList.remove('blurred');
    }
  }, [showModal]);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (form.name === '' || form.price === '' || form.category == '') return;
    const id = generateId();
    const { name, price, category } = form;
    dispatch(addBook({ id, name, price, category }));
    setShowModal(false);
    setForm({
      name: '',
      price: '',
      category: '',
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Add Book</button>
      {showModal &&
        domReady &&
        createPortal(
          <div className={styles.modal}>
            <ModalContent
              form={form}
              setForm={setForm}
              closeModal={closeModal}
              handleSubmit={handleSubmit}
            />
          </div>,
          document.getElementById('modal') as HTMLDivElement,
        )}
    </div>
  );
};

export default AddBookModal;
