import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/shoppingSlice';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/ShoppingForm.module.css';
import { useTheme } from '../context/ThemeContext';

const ShoppingForm = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && category) {
      dispatch(addItem({ id: uuidv4(), name, category, purchased: false }));
      setName('');
      setCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} theme-${theme}`}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={styles.select}
      >
        <option value="">Select Category</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Dairy">Dairy</option>
      </select>
      <button type="submit" className={styles.button}>Add Item</button>
    </form>
  );
};

export default ShoppingForm;