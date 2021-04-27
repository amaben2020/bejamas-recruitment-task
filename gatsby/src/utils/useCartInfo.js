import { useContext } from 'react';
import OrderContext from '../components/OrderContext';

const useCartInfo = ({ products }) => {
  const [order, setOrder] = useContext(OrderContext);

  const addToOrder = (orderedProduct) => {
    setOrder([...order, orderedProduct]);
  };

  const clearOrder = (index) => {
    setOrder([]);
  };
  return { order, addToOrder, clearOrder };
};

export default useCartInfo;
