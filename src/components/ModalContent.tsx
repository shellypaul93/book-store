import React, { MouseEventHandler } from 'react';
import styles from '../styles/AddBook.module.css';
import { Book } from '../types';

interface ModalContentProps {
  form: Book;
  setForm: Function;
  closeModal: MouseEventHandler<HTMLButtonElement>;
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
}

const ModalContent: React.FC = ({
  form,
  setForm,
  closeModal,
  handleSubmit,
}: ModalContentProps) => {
  return (
    <div className={styles['add-modal']}>
      <span className={styles.close}>
        <button onClick={closeModal}>X</button>
      </span>
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />
      <input
        type="text"
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ModalContent;
