import { useState, type FC, useEffect } from 'react';
import { AppBar, Box, IconButton, Stack, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';
import { IUser } from '../../types/user.type';
import {
  appBarStyle,
  logoIconStyle,
  logoutIconStyle,
} from '../../styles/navbar.style';
import LogoIcon from './icons/LogoIcon';

interface Props {
  withLogoutIcon?: boolean;
  withLogoName?: boolean;
}

const Navbar: FC<Props> = ({ withLogoutIcon, withLogoName }) => {
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
    <AppBar component="nav" sx={appBarStyle}>
      <Stack direction="row" alignItems={'center'} gap="10px">
        <Box sx={logoIconStyle}>
          <LogoIcon />
        </Box>
        {withLogoName ? (
          <Typography
            fontWeight={'bold'}
            sx={{ fontSize: '22px', color: '#444E66' }}
          >
            OPA Hey
          </Typography>
        ) : (
          ''
        )}
      </Stack>
      {withLogoutIcon ? (
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
