import styles from "../styles/CategoryFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/slices/shoppingSlice";
import { RootState } from "../redux/store";

interface CategoryFilterProps {}

const CategoryFilter: React.FC<CategoryFilterProps> = () => {
  const dispatch = useDispatch();
  const selectedFilter = useSelector(
    (state: RootState) => state.shopping.filter,
  );

  const handleFilterChange = (category: string) => {
    dispatch(setFilter(category));
  };

  return (
    <div className={styles.filterContainer}>
      <button
        className={`${styles.button} ${selectedFilter === "all" ? styles.active : ""}`}
        onClick={() => handleFilterChange("all")}
      >
        All
      </button>
      <button
        className={`${styles.button} ${selectedFilter === "Fruits" ? styles.active : ""}`}
        onClick={() => handleFilterChange("Fruits")}
      >
        Fruits
      </button>
      <button
        className={`${styles.button} ${selectedFilter === "Vegetables" ? styles.active : ""}`}
        onClick={() => handleFilterChange("Vegetables")}
      >
        Vegetables
      </button>
      <button
        className={`${styles.button} ${selectedFilter === "Dairy" ? styles.active : ""}`}
        onClick={() => handleFilterChange("Dairy")}
      >
        Dairy
      </button>
    </div>
  );
};

export default CategoryFilter;
