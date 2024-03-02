import {
  Box,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import Body from './Body';
import { NAVBAR_HEIGHT } from './Navbar';
import { IUser } from '../../types/user.type';
import Button from './Button';
import { IOrder } from '../../types/order.type';
import { useNavigate } from 'react-router-dom';
import ReturnButton from './ReturnButton';
import Background from './Background';

interface IProps {}

const Order: FC<IProps> = (props) => {
  const time = new Date();
  const foodPreference = ['Meat Lover', 'Vegetarian', 'vegan'];
  const [order, setOrder] = useState({
    userId: 0,
    preference: 'regular',
    notes: '',
  });
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const { data } = await axios.get<{ user: IUser }>('/user');
      setOrder((prevOrder) => ({
        ...prevOrder,
        userId: data.user.id,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const placeOrder = async () => {
    try {
      const orderPlaced = await axios.post('/order', order);
    } catch (error) {}
  };

  const handleClick = async () => {
    await placeOrder();

    navigate('/', { replace: true });
  };

  const handleSelectOnChange = (event: any) => {
    const preference =
      event.target.value === 'Meat Lover' ? 'Regular' : event.target.value;

    setOrder((prevOrder) => ({
      ...prevOrder,
      preference: preference,
    }));
  };

  const handleTextFieldOnChange = (event: any) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      notes: event.target.value,
    }));
  };

  return (
    <Background>
      <Stack
        mt={NAVBAR_HEIGHT}
        gap="40px"
        paddingX={'20px'}
        alignItems={'center'}
      >
        <Body />
        <Box gap="10px" display={'flex'} flexDirection={'column'}>
          <Typography fontSize={'20px'}>Food Preference</Typography>
          <Select
            defaultValue={foodPreference[0]}
            sx={{ maxWidth: '220px', height: '40px' }}
            onChange={handleSelectOnChange}
          >
            {foodPreference.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box gap="10px" display={'flex'} flexDirection={'column'}>
          <Typography fontSize={'20px'}>Any Additional Requests?</Typography>
          <TextField
            multiline
            rows={4}
            inputProps={{ maxLength: 50 }}
            sx={{ maxWidth: '220px' }}
            onChange={handleTextFieldOnChange}
          />
        </Box>
        <Box display={'flex'} alignSelf={'center'} mt="15px">
          <Button onClick={handleClick}> Place Your Order! </Button>
        </Box>
        <ReturnButton />
      </Stack>
    </Background>
  );
};

export default Order;
