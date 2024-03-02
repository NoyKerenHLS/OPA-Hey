import { Box, Stack, Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { NAVBAR_HEIGHT } from './Navbar';
import Body from './Body';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { IUser } from '../../types/user.type';
import { IOrder } from '../../types/order.type';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import Background from './Background';

interface IProps {}

const Home: FC<IProps> = (props) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);

  const getUser = async () => {
    try {
      const { data } = await axios.get<{ user: IUser }>('/user');

      setUser(data.user);
    } catch (error) {}
  };

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
    getUser();
    getOrder();
    orderTime();
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    if (user?.role === 'employee') {
      navigate('/order', { replace: true });
    } else if (user?.role === 'chef') {
      navigate('/kitchen/orders', { replace: true });
    }
  };

  const orderTime = () => {
    if (user?.role === 'chef') {
      setIsButtonDisabled(false);
      return;
    }

    const now = new Date();
    const disabledTimeStart = new Date(new Date().setHours(17, 0, 0));
    const disabledTimeStop = new Date(new Date().setHours(20, 0, 0));

    if (now >= disabledTimeStart && now <= disabledTimeStop) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  };

  const userName = user?.fullName.substring(0, user.fullName.indexOf(' '));

  return (
    <Background>
      <Stack
        mt={'130px'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={'50px'}
      >
        <Stack>
          <Typography
            sx={{
              fontSize: '40px',
              fontWeight: 700,
              display: 'flex',
              alignSelf: 'center',
            }}
          >
            Hi, {userName}!
          </Typography>
          <Typography
            sx={{ fontSize: '20px', display: 'flex', alignSelf: 'center' }}
          >
            Welcom to
          </Typography>
        </Stack>
        <Body />

        {isOrdered ? (
          <Stack direction={'row'} gap="10px" alignItems={'center'}>
            <Typography fontSize={'20px'}>We've Got Your Order</Typography>
            <SentimentSatisfiedAltIcon fontSize="large" />
          </Stack>
        ) : (
          <Button
            disabled={isButtonDisabled}
            onClick={handleClick}
            sx={{
              backgroundColor: '#A62C2A',
              color: 'white',
            }}
          >
            {user?.role === 'employee' ? 'Order Now' : 'view orders'}
          </Button>
        )}
      </Stack>
    </Background>
  );
};

export default Home;
