import React, { FC, useEffect, useState } from 'react';
import { ButtonProps, Button as MuiButton } from '@mui/material';

interface Props extends ButtonProps {
  children: string;
}

const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <MuiButton
      {...props}
      variant="contained"
      sx={{
        backgroundColor: '#A62C2A',
        color: 'white',
        fontSize: '16px',
        px: '15px',
        ':hover': {
          backgroundColor: '#A62C2A',
        },
      }}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
