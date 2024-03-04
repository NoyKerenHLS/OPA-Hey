import { ButtonProps, Button as MuiButton } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps extends ButtonProps {}

const ReturnButton: FC<IProps> = ({ ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/', { replace: true });
  };

  return (
    <MuiButton
      onClick={handleClick}
      sx={{
        display: 'flex',
        alignSelf: 'flex-start',
        position: 'fixed',
        bottom: 12,
        backgroundColor: '#8D3D36',
        color: 'white',
        fontSize: { xs: '20px', md: '24px' },
        px: '20px',
        py: '2px',
        borderRadius: '40px',
        textTransform: 'none',
        ':hover': {
          backgroundColor: '#8D3D36',
        },
      }}
    >
      Go back
    </MuiButton>
  );
};

export default ReturnButton;
