import { FC, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Stack, Typography } from '@mui/material';
import HeadLine from './HeadLine';
import { IUser } from '../../types/user.type';
import { useNavigate } from 'react-router-dom';
import { NAVBAR_HEIGHT } from '../../styles/navbar.style';
import googleIcon from '../../assets/googleIcon.png';
import { googleSignButtonStyle, imgBoxStyle } from '../../styles/login.style';

interface IProps {}

const Login: FC<IProps> = (props) => {
  const navigate = useNavigate();

  const redirectIfUserLoggedIn = async () => {
    try {
      const { data } = await axios.get<{ user: IUser }>('/user');

      const { user } = data;

      if (user.role === 'employee') {
        navigate('/', { replace: true });
      } else if (user.role === 'chef') {
        navigate('/kitchen', { replace: true });
      }
    } catch (error) {}
  };

  useEffect(() => {
    redirectIfUserLoggedIn();
  }, []);

  return (
    <Stack
      mt={NAVBAR_HEIGHT}
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="100px"
      height="100%"
    >
      <HeadLine />
      <Button
        component="a"
        href={`${import.meta.env.VITE_API_URL}/auth/google`}
        target="_self"
        sx={googleSignButtonStyle}
      >
        <Box sx={imgBoxStyle}>
          <img width="25px" src={googleIcon} />
        </Box>
        <Typography fontSize="20px">Sign in with Google</Typography>
      </Button>
    </Stack>
  );
};

export default Login;
