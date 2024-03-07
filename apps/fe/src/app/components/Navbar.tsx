import { useState, type FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppBar, Box, IconButton, Stack, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';
import { IUser } from '../../types/user.type';
import {
  appBarStyle,
  logoIconStyle,
  logoNameStyle,
  logoutIconStyle,
} from '../../styles/navbar.style';
import LogoIcon from './icons/LogoIcon';
import { IOrder } from '../../types/order.type';

interface Props {}

const Navbar: FC<Props> = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isOrdered, setIsOrdered] = useState(false);
  const location = useLocation();

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

  const getUser = async () => {
    try {
      const { data } = await axios.get<{ user: IUser }>('/user');

      setUser(data.user);
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
    getOrder();
  }, []);

  return (
    <AppBar component="nav" sx={appBarStyle}>
      <Stack direction="row" alignItems={'center'} gap="10px">
        <Box sx={logoIconStyle}>
          <LogoIcon />
        </Box>
        {location.pathname === '/order' ||
        location.pathname === '/kitchen/orders' ||
        (location.pathname === '/' && isOrdered) ? (
          <Typography fontWeight="bold" sx={logoNameStyle}>
            OPA Hey
          </Typography>
        ) : (
          ''
        )}
      </Stack>
      {location.pathname !== '/login' ? (
        <IconButton
          component="a"
          href={`${import.meta.env.VITE_API_URL}/auth/logout`}
          target="_self"
        >
          <LogoutIcon fontSize="large" sx={logoutIconStyle} />
        </IconButton>
      ) : (
        ''
      )}
    </AppBar>
  );
};

export default Navbar;
