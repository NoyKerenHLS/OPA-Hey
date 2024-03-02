import { Box, BoxProps } from '@mui/material';
import React, { FC } from 'react';

interface Props extends BoxProps {
  children: React.ReactNode;
}

const Icon: FC<Props> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};

export default Icon;
