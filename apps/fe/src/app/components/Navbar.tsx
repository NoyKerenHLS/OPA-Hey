import { useState, type FC, useEffect } from 'react';
import { AppBar, IconButton } from '@mui/material';
import moveoLogo from '../../assets/moveoLogo.svg';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';
import { IUser } from '../../types/user.type';

export const NAVBAR_HEIGHT = '80px';
interface Props {}

const Navbar: FC<Props> = () => {
  const [user, setUser] = useState<IUser | null>(null);

  const getUser = async () => {
    try {
      const { data } = await axios.get<{ user: IUser }>('/user');

      setUser(data.user);
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AppBar
      component={'nav'}
      sx={{
        height: NAVBAR_HEIGHT,
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: 'none',
        px: '10px',
      }}
    >
      <img
        src={moveoLogo}
        alt="moveo-logo"
        style={{ width: '80px', height: '80px' }}
      />
      <IconButton
        component="a"
        href={`${import.meta.env.VITE_API_URL}/auth/logout`}
        target="_self"
      >
        <LogoutIcon
          fontSize="large"
          sx={{ color: '#C1C1C1', display: 'flex' }}
        />
      </IconButton>
    </AppBar>
  );
};

export default Navbar;
