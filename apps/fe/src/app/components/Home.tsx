import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { IOrder } from '../../types/order.type';
import OrderHomePage from './OrderHomePage';
import AfterOrderHomePage from './AfterOrderHomePage';

interface IProps {}

const Home: FC<IProps> = (props) => {
  const [isOrdered, setIsOrdered] = useState(false);

  const getOrder = async () => {
    try {
      const { data } = await axios.get<{ order: IOrder }>('/order/employee');
      const status = data.order.status;
      console.log(data);
      if (status === 'submitted') {
        setIsOrdered(true);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getOrder();
  }, []);

  return isOrdered ? <AfterOrderHomePage /> : <OrderHomePage />;
};

export default Home;
