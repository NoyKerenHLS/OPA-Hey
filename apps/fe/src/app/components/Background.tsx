import { Box } from '@mui/material';
import React, { FC } from 'react';
import laptopBackground from '../../assets/laptopBackground.png';

interface IProps {
  children: React.ReactNode;
}

const Background: FC<IProps> = ({ children }) => {
  return (
    <Box
      height={'100vh'}
      width={'100%'}
      position={{ xs: 'unset', sm: 'absolute' }}
      sx={{
        backgroundImage: { xs: 'none', sm: `url(${laptopBackground})` },
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
    </Box>
  );
};

export default Background;
