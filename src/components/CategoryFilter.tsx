import styles from '../styles/CategoryFilter.module.css';

interface CategoryFilterProps {
  onFilterChange: (category: string) => void;
  selectedFilter: string;
}

const CategoryFilter = ({ onFilterChange, selectedFilter }: CategoryFilterProps) => {
  return (
    <div className={styles.filterContainer}>
      <button
        className={`${styles.button} ${selectedFilter === 'all' ? styles.active : ''}`}
        onClick={() => onFilterChange('all')}
      >
        All
      </button>
      <button
        className={`${styles.button} ${selectedFilter === 'Fruits' ? styles.active : ''}`}
        onClick={() => onFilterChange('Fruits')}
      >
        Fruits
      </button>
      <button
        className={`${styles.button} ${selectedFilter === 'Vegetables' ? styles.active : ''}`}
        onClick={() => onFilterChange('Vegetables')}
      >
        Vegetables
      </button>
      <button
        className={`${styles.button} ${selectedFilter === 'Dairy' ? styles.active : ''}`}
        onClick={() => onFilterChange('Dairy')}
      >
        Dairy
      </button>
    </div>
  );
};

export default CategoryFilter;
