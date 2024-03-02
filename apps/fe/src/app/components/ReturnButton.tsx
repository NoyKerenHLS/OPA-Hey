import { Box, BoxProps, IconButton } from '@mui/material';
import { FC } from 'react';
import BackArrowIcon from './icons/backArrowIcon';
import { useNavigate } from 'react-router-dom';

interface IProps extends BoxProps {}

const ReturnButton: FC<IProps> = ({ ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/', { replace: true });
  };

  return (
    <Box
      {...props}
      sx={{ position: 'fixed', bottom: 0, left: 0, padding: { md: '16px' } }}
    >
      <IconButton onClick={handleClick}>
        <BackArrowIcon />
      </IconButton>
    </Box>
  );
};

export default ReturnButton;
