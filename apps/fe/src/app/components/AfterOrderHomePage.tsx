import { Box, Stack, Typography } from '@mui/material';
import React, { FC } from 'react';
import { NAVBAR_HEIGHT } from '../../styles/navbar.style';
import takeAwayImage from '../../assets/takeAwayImage.png';

interface IProps {}

const AfterOrderHomePage: FC<IProps> = (props) => {
  return (
    <Stack alignItems={'center'} mt={NAVBAR_HEIGHT} gap="100px">
      <Stack alignItems={'center'}>
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
        <Typography color="#3E3E40" fontSize="35px">
          Ready at 12:30 PM,
        </Typography>
        <Typography color="#3E3E40" fontSize="35px">
          drop by whenever!
        </Typography>
      </Stack>
      <Box display="flex" alignSelf="flex-end" padding="10px">
        <img src={takeAwayImage} alt="takeAwayImage" />
      </Box>
    </Stack>
  );
};

export default AfterOrderHomePage;
