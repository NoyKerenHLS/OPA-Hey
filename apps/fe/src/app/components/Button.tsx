import React, { FC, useEffect, useState } from 'react';
import { ButtonProps, Icon, Button as MuiButton } from '@mui/material';

interface Props extends ButtonProps {
  children: string;
}

const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <MuiButton
      {...props}
      variant="contained"
      sx={{
        backgroundColor: '#8D3D36',
        color: 'white',
        fontSize: { xs: '24px', md: '30px' },
        px: '40px',
        py: '6px',
        borderRadius: '40px',
        textTransform: 'none',
        ':hover': {
          backgroundColor: '#8D3D36',
        },
      }}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
