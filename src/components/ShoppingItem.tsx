import React from "react";
import { useDispatch } from "react-redux";
import { togglePurchased, removeItem } from "../redux/slices/shoppingSlice";
import styles from "../styles/ShoppingItem.module.css";

interface ShoppingItemProps {
  id: string;
  name: string;
  category: string;
  purchased: boolean;
}

const ShoppingItem: React.FC<ShoppingItemProps> = ({
  id,
  name,
  category,
  purchased,
}) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <span
        className={purchased ? styles.purchased : ""}
        onClick={() => dispatch(togglePurchased(id))}
      >
        {name} ({category})
      </span>
      <button
        className={styles.button}
        onClick={() => dispatch(removeItem(id))}
      >
        Remove
      </button>
    </li>
  );
};

export default ShoppingItem;
