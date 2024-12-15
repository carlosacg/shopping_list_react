import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import ShoppingItem from './ShoppingItem';
import styles from '../styles/ShoppingList.module.css';

const ShoppingList = () => {
  const items = useSelector((state: RootState) => state.shopping.items);
  const filter = useSelector((state: RootState) => state.shopping.filter);

  const filteredItems =
    filter === 'all' ? items : items.filter((item) => item.category === filter);

  return (
    <ul className={styles.shoppingList}>
      {filteredItems.map((item) => (
        <ShoppingItem
          key={item.id}
          id={item.id}
          name={item.name}
          category={item.category}
          purchased={item.purchased}
        />
      ))}
    </ul>
  );
};

export default ShoppingList;