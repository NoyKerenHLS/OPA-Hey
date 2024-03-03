import { SxProps } from '@mui/material';

export const NAVBAR_HEIGHT = '90px';

export const appBarStyle: SxProps = {
  height: NAVBAR_HEIGHT,
  backgroundColor: 'transparent',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: 'none',
  pl: '22px',
  pr: '15px',
};

export const logoIconStyle: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
};

export const logoutIconStyle: SxProps = {
  color: 'black',
  display: 'flex',
};
