import styles from "./styles/App.module.css";
import ShoppingForm from "./components/ShoppingForm";
import ShoppingList from "./components/ShoppingList";
import CategoryFilter from "./components/CategoryFilter";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`${styles.app} theme-${theme}`}>
      <header className={styles.header}>
        <h1>Shopping List</h1>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </header>
      <main className={styles.main}>
        <ShoppingForm />
        <CategoryFilter />
        <ShoppingList />
      </main>
    </div>
  );
}

export default App;
