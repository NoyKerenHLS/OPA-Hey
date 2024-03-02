import { FC, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Stack } from '@mui/material';
import Body from './Body';
import GoogleIcon from './icons/GoogleIcon';
import Icon from './icons/Icon';
import { IUser } from '../../types/user.type';
import { useNavigate } from 'react-router-dom';
import Background from './Background';

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
    <Background>
      <Box
        display={'flex'}
        height={'100%'}
        width={'100%'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Stack
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="40px"
        >
          <Body />
          <Button
            component="a"
            href={`${import.meta.env.VITE_API_URL}/auth/google`}
            target="_self"
            sx={{
              border: '1px solid black',
              borderRadius: '30px',
              color: 'black',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              px: '15px',
              justifyContent: 'center',
              lineHeight: '0px',
            }}
          >
            <Icon width="20px" mt="5px">
              <GoogleIcon />
            </Icon>
            Sign in with Google
          </Button>
        </Stack>
      </Box>
    </Background>
  );
};

export default Login;
