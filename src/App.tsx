import { useState } from 'react'
import styles from './styles/App.module.css';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';
import CategoryFilter from './components/CategoryFilter';


function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Shopping List</h1>
      </header>
      <main className={styles.main}>
        <ShoppingForm />
        <CategoryFilter/>
        <ShoppingList />
      </main>
    </div>
  )
}

export default App
