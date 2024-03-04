import { Box, Stack, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import HeadLine from './HeadLine';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { IUser } from '../../types/user.type';
import opaImage from '../../assets/opaImage.png';
import { NAVBAR_HEIGHT } from '../../styles/navbar.style';
import chefIcon from '../../assets/chefIcon.png';
interface IProps {}

const OrderHomePage: FC<IProps> = (props) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const icon = user?.role === 'chef' ? chefIcon : '';

  const getUser = async () => {
    try {
      const { data } = await axios.get<{ user: IUser }>('/user');

      setUser(data.user);
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
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
    <Stack
      mt={NAVBAR_HEIGHT}
      width="100%"
      height="100%"
      alignItems={'center'}
      justifyContent={'center'}
      direction={{ xs: 'column', md: 'row' }}
      gap="150px"
    >
      <Stack alignItems={'center'} justifyContent={'center'} gap="40px">
        <Typography
          sx={{
            fontSize: { xs: '26px', md: '45px' },
            display: 'flex',
            alignSelf: 'center',
            color: '#3E3E40',
          }}
        >
          Hello {userName}!
        </Typography>
        <HeadLine icon={icon} />
        <Box display={{ xs: 'flex', md: 'none' }}>
          <img width="268px" src={opaImage} alt="opaImage" />
        </Box>
        <Button disabled={isButtonDisabled} onClick={handleClick}>
          {user?.role === 'employee' ? 'Order Now' : 'view orders'}
        </Button>
      </Stack>
      <Box display={{ xs: 'none', md: 'block' }}>
        <img width="455px" src={opaImage} alt="opaImage" />
      </Box>
    </Stack>
  );
};

export default OrderHomePage;
