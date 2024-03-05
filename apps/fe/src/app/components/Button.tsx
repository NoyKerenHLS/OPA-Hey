import React, { FC, useEffect, useState } from 'react';
import { ButtonProps, Icon, Button as MuiButton } from '@mui/material';
import { style } from '../../styles/button.style';

interface Props extends ButtonProps {
  children: string;
}

const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <MuiButton {...props} variant="contained" sx={style}>
      {children}
    </MuiButton>
  );
};

export default Button;
