import { SxProps } from '@mui/material';

export const style: SxProps = {
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
};

export const returnButtonStyle: SxProps = {
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
};
