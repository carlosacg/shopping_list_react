import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeItem, togglePurchased } from '../redux/slices/shoppingSlice';
import styles from '../styles/ShoppingList.module.css';

const ShoppingList = () => {
  const items = useSelector((state: RootState) => state.shopping.items);
  const filter = useSelector((state: RootState) => state.shopping.filter);
  const dispatch = useDispatch();

  const filteredItems =
    filter === 'all' ? items : items.filter((item) => item.category === filter);

  return (
    <ul className={styles.shoppingList}>
      {filteredItems.map((item) => (
        <li key={item.id} className={styles.item}>
          <span
            className={item.purchased ? styles.purchased : ''}
            onClick={() => dispatch(togglePurchased(item.id))}
          >
            {item.name} ({item.category})
          </span>
          <button
            className={styles.button}
            onClick={() => dispatch(removeItem(item.id))}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ShoppingList;