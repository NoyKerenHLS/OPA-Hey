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
import { IUser } from '../../types/user.type';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import ReturnButton from './ReturnButton';
import { NAVBAR_HEIGHT } from '../../styles/navbar.style';

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
    <Stack mt={'150px'} gap="40px" paddingX={'20px'} alignItems={'center'}>
      <Typography fontSize={{ xs: '30px', md: '50px' }} color={'#3E3E40'}>
        What is your food mood today?
      </Typography>
      <Box
        gap="20px"
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
      >
        <Typography fontSize={{ xs: '24px', md: '36px' }} color={'#3E3E40'}>
          Food Preference
        </Typography>
        <Select
          defaultValue={foodPreference[0]}
          sx={{
            minWidth: { xs: '220px', md: '290px' },
            height: '40px',
            fontSize: '24px',
            color: '#3E3E40',
          }}
          onChange={handleSelectOnChange}
        >
          {foodPreference.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box gap="20px" display={'flex'} flexDirection={'column'}>
        <Stack alignItems={'center'}>
          <Typography fontSize={{ xs: '24px', md: '36px' }} color={'#3E3E40'}>
            Any food sensitivities?
          </Typography>
          <Typography fontSize={{ xs: '24px', md: '36px' }} color={'#3E3E40'}>
            Any Additional Requests?
          </Typography>
        </Stack>
        <TextField
          multiline
          inputProps={{ maxLength: 50 }}
          sx={{ minWidth: { xs: '220px', md: '290px' } }}
          onChange={handleTextFieldOnChange}
        />
      </Box>
      <Box display={'flex'} alignSelf={'center'} mt="15px">
        <Button onClick={handleClick}> Place Your Order! </Button>
      </Box>
    </Stack>
  );
};

export default Order;
