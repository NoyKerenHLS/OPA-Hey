import { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { NAVBAR_HEIGHT } from '../../styles/navbar.style';
import takeAwayImage from '../../assets/takeAwayImage.png';

interface IProps {}

const AfterOrderHomePage: FC<IProps> = (props) => {
  return (
    <Stack alignItems={'center'} mt={NAVBAR_HEIGHT} gap="100px">
      <Typography
        display={{ xs: 'none', md: 'flex' }}
        sx={{
          fontSize: '70px',
          fontWeight: 700,
          lineHeight: '60px',
          mt: '60px',
          color: '#8D3D36',
        }}
      >
        We've Got Your Order!
      </Typography>
      <Stack display={{ xs: 'flex', md: 'none' }} alignItems={'center'}>
        <Typography
          sx={{
            fontSize: '48px',
            fontWeight: 700,
            lineHeight: '60px',
            mt: '60px',
            color: '#8D3D36',
          }}
        >
          We've Got
        </Typography>
        <Typography
          sx={{
            fontSize: '48px',
            fontWeight: 700,
            lineHeight: '60px',
            color: '#8D3D36',
          }}
        >
          Your Order!
        </Typography>
      </Stack>
      <Stack alignItems={'center'}>
        <Typography color="#3E3E40" fontSize={{ xs: '35px', md: '45px' }}>
          Ready at 12:30 PM,
        </Typography>
        <Typography color="#3E3E40" fontSize={{ xs: '35px', md: '45px' }}>
          drop by whenever!
        </Typography>
      </Stack>
      <Box
        display={{ xs: 'flex', md: 'none' }}
        alignSelf="flex-end"
        padding="10px"
      >
        <img src={takeAwayImage} alt="takeAwayImage" />
      </Box>
      <Box
        display={{ xs: 'none', md: 'flex' }}
        alignSelf="flex-end"
        padding="10px"
        mr="200px"
      >
        <img width="235px" src={takeAwayImage} alt="takeAwayImage" />
      </Box>
    </Stack>
  );
};

export default AfterOrderHomePage;
