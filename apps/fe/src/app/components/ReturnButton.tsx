import { ButtonProps, Button as MuiButton } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { returnButtonStyle } from '../../styles/button.style';

interface IProps extends ButtonProps {}

const ReturnButton: FC<IProps> = ({ ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/', { replace: true });
  };

  return (
    <MuiButton onClick={handleClick} sx={returnButtonStyle}>
      Go back
    </MuiButton>
  );
};

export default ReturnButton;
