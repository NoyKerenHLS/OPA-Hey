import { Stack, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import Body from './HeadLine';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { IUser } from '../../types/user.type';
import { IOrder } from '../../types/order.type';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { NAVBAR_HEIGHT } from '../../styles/navbar.style';
import OrderHomePage from './OrderHomePage';
import AfterOrderHomePage from './afterOrderHomePage';

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
